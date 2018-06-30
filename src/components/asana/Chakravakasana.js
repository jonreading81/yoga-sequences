import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/chakravakasana-a.svg';
import SVGPositionB from '../../assets/svg/balasana.svg';
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
                <div className="container">
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA}  alt="Chakravakasana start"/>
                            </div>
                            <div className="col-sm-1">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Chakravakasana end"/>
                            </div>
                            <div className="col-sm-3">
                                <Count repetition={repetition} stay={stay} />
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        )
    }
}
export default Chakravakasana;
