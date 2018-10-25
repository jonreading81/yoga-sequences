import React, {Component } from 'react';
import PropTypes from 'prop-types';
import imageA from '../../assets/images/cakravakasana-a.jpg';
import imageB from '../../assets/images/cakravakasana-b.jpg';
import ExIn from './breath/ExIn';
import Count from './Count';

class Chakravakasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Warm up and stretch upper and lower back",
        repetition: "6",
        elementId: 'chakravakasana',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale lead with chest keeping neck long,
                    expand chest avoiding compressing lower back
                </p>
                <p>On exhale bring chest to thights,
                    round lower back avoid collapsing upper back
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--chakravakasana">
                <h3>Chakravakasana</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img  className="asana__image" {...imageA} alt="Chakravakasana start"/>
                            </div>
                            <div className="col-sm-1 asana__instructions__details">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img className="asana__image" {...imageB} alt="Chakravakasana end"/>
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
export default Chakravakasana;
