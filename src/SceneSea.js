import {Entity} from 'aframe-react';
import React from 'react';

import SceneContainer from './SceneContainer';


class SceneSea extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <SceneContainer {...this.props}>
                <a-image src="#sea" position="1 2 -3" scale="3 3 3"/>
                <Entity class="clickable" events={{click: () => {setTimeout(this.props.nextSceneCallback, 6000)}}}>
                    <Entity gltf-model="./models/boat/scene.gltf" position="4 0 -2" scale="0.1 0.1 0.1" rotation="0 90 0"
                            animation="dir:alternate;easing:linear;property:rotation;to:0 50 0;dur:3000;startEvents:click"
                            animation__2="dir:alternate;easing:linear;property:position;to:12 0 -10;dur:6000;startEvents:click"
                    />
                </Entity>

                <a-entity gltf-model="./models/gull/scene.gltf" position="-1.516 3.643 -3.581" scale="0.05 0.05 0.05" rotation="0 45 0"
                          animation="dir:alternate;easing:linear;loop:true;property:rotation;to:0 90 0;dur:4000"
                          animation__2="dir:alternate;easing:linear;loop:true;property:scale;to:0.4 0.4 0.4;dur:6000"
                />
            </SceneContainer>
        );
    }
}

SceneSea.propTypes = {
    ...SceneContainer.prototype
};
export default SceneSea;