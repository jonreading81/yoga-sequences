import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGLateralArmRaiseA from '../../assets/svg/lateral-arm-raise-a-01.svg';
import SVGLateralArmRaiseB from '../../assets/svg/lateral-arm-raise-b-01.svg';
import InEx from './breath/InEx';
import Count from './Count';

class LateralArmRaises extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Build strength and stability in shoulders and rotarcuffs",
        repetition: "8",
        stay: "8",
        elementId: 'lateral-arm-raise',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale raise arms, keeping shoulders back and down bringing external rotation to humorous
                </p>
                <p>On exhale lower arms
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--lateral-arm-raise">
                <h3>Lateral Arm Raises</h3>
                <p>{description}</p>
                <div className="container">
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGLateralArmRaiseA} alt="Lateral Arm Raises start"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGLateralArmRaiseB}  alt="Lateral Arm Raises end"/>
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
export default LateralArmRaises;
