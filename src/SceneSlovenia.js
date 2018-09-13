import {Entity} from 'aframe-react';
import React from 'react';
import SceneContainer from './SceneContainer';

class SceneSlovenia extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <SceneContainer {...this.props}>
                <Entity class="clickable" events={{click: () => {
                    this.cowRef.setAttribute('animation-mixer', {clip: '*'});
                    setTimeout(this.props.nextSceneCallback, 10000)
                }}}>
                    <Entity gltf-model="./models/cow/scene.gltf" position="2 -3.088 -6.096" scale="0.01 0.01 0.01" rotation="0 90 0"
                            _ref={(_)=> {this.cowRef = _}} />
                </Entity>
            </SceneContainer>
        );
    }
}

SceneSlovenia.propTypes = {
    ...SceneContainer.prototype
};
export default SceneSlovenia;