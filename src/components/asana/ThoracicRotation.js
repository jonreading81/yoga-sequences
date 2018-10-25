import React, {Component } from 'react';
import PropTypes from 'prop-types';
import imageA from '../../assets/images/thoracic-rotation-a.jpg';
import imageB from '../../assets/images/thoracic-rotation-b.jpg';
import ExIn from './breath/ExIn';
import Count from './Count';

class ThoracicRotation extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Extend and rotate the thoracic spine",
        repetition: "10",
        elementId: 'thoracic-rotation',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale open the chest and extend and twist through the upper back</p>
                <p>On exhale reverse the motion bring the elbow to touch the opposite elbow</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--thoracic-rotataion">
                <h3>Thoracic Rotation</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img className="asana__image" {...imageA}  alt="Thoracic Rotation start"/>
                            </div>
                            <div className="col-sm-1 asana__instructions__details">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img className="asana__image" {...imageB} alt="Thoracic Rotation end"/>
                            </div>
                            <div className="col-sm-3 asana__instructions__details">
                                <Count repetition={repetition} stay={stay} />
                            </div>
                        </div>
                </div>
                {children}
            </div>
        )
    }
}
export default ThoracicRotation;
