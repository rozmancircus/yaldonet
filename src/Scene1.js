import {Entity} from 'aframe-react';
import React from 'react';
import SceneContainer from './SceneContainer';

class Scene1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <SceneContainer {...this.props}>
                <Entity scale="0.4 0.4 0.4" rotation="0 0 15" position="-1.3 2.7 -2.3"
                        text-geometry="value: The story of US; font: #dawningFont; bevelEnabled: true; bevelSize: 0.02; bevelThickness: 0.05; curveSegments: 12; size: 1; height: 0;"
                        material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"
                />
                <Entity class="clickable" events={{click: () => { this.props.nextSceneCallback() }}}>
                    <Entity
                        gltf-model="./models/heart/scene.gltf" position="1.5 2.9 -2" scale="0.1 0.1 0.1">
                        <a-animation easing="linear" attribute="rotation" dur="10000" to="0 360 0" repeat="indefinite"/>
                    </Entity>
                </Entity>

                <a-image src="#img1" position="0.226 2.305 -2.955" scale="3 3 3"/>
            </SceneContainer>
        );
    }
}

Scene1.propTypes = {
    ...SceneContainer.prototype
};
export default Scene1;