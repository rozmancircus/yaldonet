import {Entity} from 'aframe-react';
import React from 'react';
import SceneContainer from './SceneContainer';

class SceneSunset extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <SceneContainer {...this.props} nextButtonProps={ {position: {x: 2, y: 10, z: 6}}}>
                <a-image src="./images/ring.png" position="1.7 2.305 3" scale="2 2 2" rotation="0 30 0"
                         animation="dir:alternate;easing:linear;loop:true;property:rotation;to:0 10 0;dur:1000"
                />
                { this.props.isCurrentScene && <Entity sound="src: #guitarViolin; autoplay: true" /> }
            </SceneContainer>
        );
    }
}

SceneSunset.propTypes = {
    ...SceneContainer.propTypes
};
export default SceneSunset;