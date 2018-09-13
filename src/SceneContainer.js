import {Entity} from 'aframe-react';
import React from 'react';
import PropTypes from 'prop-types';
import NextButton from './NextButton';

class SceneContainer extends React.Component {
    constructor(props) {
        super(props);
        this.SHOW_EVENT = `ShowScene-${this.props.sceneIndex}`;
        this.HIDE_EVENT = `HideScene-${this.props.sceneIndex}`;
        this.z = -30;
        this.state = {
            visible: props.isCurrentScene
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isCurrentScene && !this.props.isCurrentScene){
            this.setState({visible: true});
            this.entityRef.emit(this.SHOW_EVENT);
        }
        else if(!nextProps.isCurrentScene && this.props.isCurrentScene){
            this.entityRef.emit(this.HIDE_EVENT);
            setTimeout(()=> {this.setState({visible: false});}, 1000);
        }
    }

    render () {
        const scenePosition = this.props.isCurrentScene ? { x: 0, y: 0, z: 0} : { x: 0, y: 0, z: this.z};
        return (
            <Entity id={`scene-${this.props.sceneIndex}`} position={scenePosition} _ref={(_)=> {this.entityRef = _}}
                    visible={this.state.visible}>
                <a-animation begin={this.SHOW_EVENT} attribute="visible" dur="1000" to="true"/>
                <a-animation begin={this.SHOW_EVENT} attribute="position" dur="1000" to="0 0 0"/>
                <a-animation begin={this.HIDE_EVENT} attribute="position" dur="1000" from="0 0 0" to="-100 0 0"/>
                {this.props.children}
                { /**<NextButton nextSceneCallback={this.props.nextSceneCallback} entityProps={this.props.nextButtonProps}/> */ }
            </Entity>

        );
    }
}

SceneContainer.propTypes = {
    nextSceneCallback:PropTypes.func.isRequired,
    sceneIndex: PropTypes.number.isRequired,
    isCurrentScene: PropTypes.bool.isRequired,
    currentSceneIndex: PropTypes.number.isRequired,
    nextButtonProps: PropTypes.object
};

export default SceneContainer;