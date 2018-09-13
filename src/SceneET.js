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
                <Entity scale="0.25 0.25 0.25"
                          rotation="0 0 5"
                          position="-1.5 3.2 -2.3"
                          text-geometry="value: Ready for our next; font: #dawningFont; bevelEnabled: true; bevelSize: 0.02; bevelThickness: 0.05; curveSegments: 12; size: 1; height: 0;"
                          material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"
                />

                <Entity scale="0.3 0.3 0.3"
                          rotation="0 0 5"
                          position="0 2.75 -1.94"
                          text-geometry="value: adventure?!; font: #dawningFont; bevelEnabled: true; bevelSize: 0.02; bevelThickness: 0.05; curveSegments: 12; size: 1; height: 0;"
                          material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"
                />
                <a-image src="./images/et.jpg" position="0.226 2.305 -2.955" scale="3 3 3"/>

                <Entity class="clickable" events={{click: this.props.nextSceneCallback }}>
                    <a-image src="./images/minion.png" position="1.9 2.5 -2.7" rotation="0 0 0" scale="1 1 1" animation="dir:alternate;easing:linear;loop:true;property:scale;to:1.2 1.2 1.2"/>
                </Entity>
            </SceneContainer>
        );
    }
}

Scene1.propTypes = {
    ...SceneContainer.prototype
};
export default Scene1;