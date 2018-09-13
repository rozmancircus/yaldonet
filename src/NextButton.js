import {Entity} from 'aframe-react';
import React from 'react';
import PropTypes from 'prop-types';


class NextButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Entity id="next" class="clickable">
                <Entity rotation="0 0 0"
                        scale="0.7 0.7 0.7"
                        animation="dir:alternate;easing:linear;loop:true;property:scale;to:1 1 1"
                        position={{x: -2, y: 2.5, z: -3}}
                        {...this.props.entityProps}
                        events={{click: () => this.props.nextSceneCallback()}}>
                    <a-image src="./images/arrow.png"/>
                </Entity>
            </Entity>
        );
    }
}

NextButton.propTypes = {
    nextSceneCallback: PropTypes.func.isRequired,
    entityProps: PropTypes.object
};

export default NextButton;