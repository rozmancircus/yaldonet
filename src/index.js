import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'aframe-text-geometry-component';
import aframeExtras from 'aframe-extras';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import Scene1 from './Scene1';
import SceneSea from './SceneSea';
import SceneRock from './SceneRock';
import SceneWoods from './SceneWoods';
import SceneSlovenia from './SceneSlovenia';
import SceneET from './SceneET';
import SceneSunset from './SceneSunset';

class App extends React.Component {
    constructor(props) {
        super(props);
        aframeExtras.registerAll();
        this.state = {sceneIndex: 0};
        this.nextSceneCallback = this.nextSceneCallback.bind(this);
        this.scenes = [
            { scene: Scene1, skyTexture: '#stars'},
            { scene: SceneSlovenia, skyTexture: '#slovenia360'},
            { scene: SceneRock, skyTexture: '#concert360'},
            { scene: SceneSea, skyTexture: '#sea360'},
            { scene: SceneWoods, skyTexture: '#woods360'},
            { scene: SceneET, skyTexture: '#stars'},
            { scene: SceneSunset, skyTexture: '#sunset360'}
        ];
    }

    nextSceneCallback(index){
        if(index === this.state.sceneIndex){
            this.setState({sceneIndex: this.state.sceneIndex === this.scenes.length - 1 ? 0 : this.state.sceneIndex + 1});
        }
    }

    componentDidMount() {
        const preloadNextScene = (index) => {
            setTimeout(()=>{
                    this.setState({sceneIndex: index});
                    if(index !== 0){
                        const nextSceneIndex = index === this.scenes.length - 2 ? 0 : index + 1;
                        preloadNextScene(nextSceneIndex);
                    }
                }, 1000);
        };

        preloadNextScene(1);


        this.sceneRef.addEventListener('enter-vr', ()=> {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const y = isMobile ? '0.6' : '2.2';
            this.cameraRef.setAttribute('position', `0 ${y} 0`);
        });
    };

    render () {
        return (
            <Scene _ref={(_)=> {this.sceneRef = _}}>
                <a-assets>
                    <a-asset-item id="dawningFont" src="./fonts/umbrella.json"/>
                    <img id="pink" src="./images/pink.jpg"/>
                    <img id="img1" src="images/11.jpg" />
                    <img id="stars" src="images/stars.jpg" />
                    <img id="sea360" src="images/sea360.jpg" />
                    <img id="sea" src="images/sea.png" />
                    <img id="concert360" src="images/concert360-2.jpg" />
                    <img id="woods360" src="images/woods360.jpg" />
                    <img id="slovenia360" src="images/slovenia360-2.jpg" />
                    <img id="sunset360" src="images/sunset360.jpg" />
                    <audio id="guitarRock" src="guitar.mp3"/>
                    <audio id="guitarViolin" src="guitar_violin.mp3"/>
                </a-assets>
                <Entity primitive="a-light" type="ambient" color="#445451"/>
                <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
                <Entity primitive="a-sky" src={this.scenes[this.state.sceneIndex].skyTexture}/>
                <Entity particle-system={{preset: 'snow', particleCount: 2000, texture:'images/smokeparticle.png'}}/>


                <Entity camera="userHeight: 0" look-controls wasd-controls _ref={(_)=> {this.cameraRef = _}} id="main-camera" visible="true"
                        cursor="rayOrigin: mouse;" raycaster="objects: .clickable" position="0 2.2 0" >
                    <a-cursor id="fuse-cursor" fuse="true" geometry="radiusInner: 0.02; radiusOuter: 0.03; thetaLength: 360; thetaStart: 90;"
                              color="#232323" opacity="1" repeat="1 1" shader="flat" position="0 0 -1" objects=".clickable"
                              rotation="0 0 0" scale="1 1 1" visible="true">
                        <a-animation begin="click" easing="ease-in" attribute="scale" dur="150"
                                     fill="forwards" from="0.1 0.1 0.1" to="1 1 1"/>
                        <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale" dur="1500"
                                     fill="backwards" from="1 1 1" to="0.1 0.1 0.1"/>
                    </a-cursor>
                </Entity>

                { this.scenes.map((Scene, index)=>{
                    return (<Scene.scene nextSceneCallback={()=>this.nextSceneCallback(index)}
                                         key={index}
                                         sceneIndex={index}
                                         isCurrentScene={index===this.state.sceneIndex}
                                         currentSceneIndex={this.state.sceneIndex}/>)
                })}
            </Scene>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
