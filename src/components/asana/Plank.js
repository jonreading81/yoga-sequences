import React, {Component } from 'react';
import PropTypes from 'prop-types';

import SVGPositionB from '../../assets/svg/plank-01.svg';
import SVGPositionA from '../../assets/svg/adho-mukta-svanasana-01.svg';
import InEx from './breath/InEx';
import Count from './Count';

class Plank extends Component {

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
        elementId: 'plank',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale lower into plank
                </p>
                <p>On exhale press back lifting hips
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--adho-mukha-svanasana">
                <h3>Plank</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA} alt="AdhoMukhaSvanasana"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Plank"/>
                            </div>
                            <div className="col-sm-3">
                                <Count repetition={repetition} stay={stay} />
                            </div>
                        </div>
                </div>
                {children}
            </div>
        )
    }
}
export default Plank;
