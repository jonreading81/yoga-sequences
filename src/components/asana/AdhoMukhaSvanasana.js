import React, {Component } from 'react';
import PropTypes from 'prop-types';

import SVGPositionA from '../../assets/svg/balasana.svg';
import SVGPositionB from '../../assets/svg/chakravakasana-a.svg';
import SVGPositionC from '../../assets/svg/adho-mukta-svanasana-01.svg';
import InEx from './breath/InEx';
import ExIn from './breath/ExIn';
import Count from './Count';

class AdhoMukhaSvanasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Strenghen back and shoulders",
        repetition: "6",
        stay: "6",
        elementId: 'adho-mukha-svanasana',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale lead with chest keeping neck long,
                    expand chest avoiding compressing lower back
                </p>
                <p>On exhale press feet and lift hips, externally rotating arms
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--adho-mukha-svanasana">
                <h3>Eka Pada Ustrasana</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-3">
                              <img src={SVGPositionA}  alt="Balasana"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-3">
                              <img src={SVGPositionB} alt="Chakravakasana"/>
                            </div>
                            <div className="col-sm-1">
                                <ExIn />
                            </div>
                            <div className="col-sm-3">
                              <img src={SVGPositionC} alt="AdhoMukhaSvanasana"/>
                            </div>
                            <div className="col-sm-1">
                                <Count repetition={repetition} stay={stay} />
                            </div>
                        </div>
                </div>
                {children}
            </div>
        )
    }
}
export default AdhoMukhaSvanasana;
