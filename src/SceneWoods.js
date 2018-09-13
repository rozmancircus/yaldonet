import {Entity} from 'aframe-react';
import React from 'react';
import SceneContainer from './SceneContainer';

class SceneWoods extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <SceneContainer {...this.props}>
                <a-image src="./images/woods.png" position="1 2 -5" scale="5 5 5"/>
                <Entity class="clickable" events={{click: () => {
                    this.phoenix.setAttribute('animation-mixer', {clip: 'Take 001'});
                    this.phoenix.emit('turn');
                    setTimeout(()=> {
                        this.phoenix.emit('turn');
                    }, 4000);
                    setTimeout(this.props.nextSceneCallback, 8000);
                }}}>
                    <Entity gltf-model="./models/phoenix_bird/scene.gltf" position="-1 3.3 -3.3"
                            scale="0.003 0.003 0.003" rotation="0 180 0"
                            _ref={(_)=> {this.phoenix = _}} >
                        <a-animation begin='turn' attribute="rotation" dur="2000" to="0 0 0" direction="alternate"/>
                        <a-animation begin='click' attribute="position" dur="4000" to="4 3.3 -3.3" direction="alternate" repeat="1"/>
                    </Entity>
                </Entity>
            </SceneContainer>
        );
    }
}

SceneWoods.propTypes = {
    ...SceneContainer.prototype
};
export default SceneWoods;