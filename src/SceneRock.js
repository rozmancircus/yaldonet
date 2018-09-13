import {Entity} from 'aframe-react';
import React from 'react';
import SceneContainer from './SceneContainer';


class SceneRock extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <SceneContainer {...this.props} nextButtonProps={ {position: {x: -2, y: 2.5, z: 3}, rotation: '0 180 0'}}>
                <Entity class="clickable" events={{click: () => {
                    this.notesRef.setAttribute('visible', 'true');
                    this.soundRef.setAttribute('sound', "src: #guitarRock; autoplay: true");
                    setTimeout(()=> {
                        this.notesRef.setAttribute('visible', 'false');
                        this.soundRef.removeAttribute('sound');
                        this.props.nextSceneCallback();
                    }, 15000)
                }}}>
                    <a-image src="./images/purim.png" position="-10 4 0" scale="3 3 3" rotation="0 90 0">
                        <a-animation begin='click' attribute="scale" dur="3000" to="10 10 10" direction="alternate" repeat="1"/>
                    </a-image>
                </Entity>
                <Entity _ref={(_)=> {this.soundRef = _}}/>
                <Entity _ref={(_)=> {this.notesRef = _}}
                    gltf-model="./models/music/scene.gltf" visible="false" animation-mixer="" position="-23.575 6 -0.75" scale="0.1 0.1 0.1"/>
            </SceneContainer>
        );
    }
}

SceneRock.propTypes = {
    ...SceneContainer.prototype
};
export default SceneRock;