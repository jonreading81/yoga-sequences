import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/urdhva-prasarita-padasana-a-01.svg';
import SVGPositionB from '../../assets/svg/urdhva-prasarita-padasana-b-01.svg';
import InEx from './breath/InEx';
import Count from './Count';

class UrdhvaPrasaritaPadasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "To stretch the back and shoulders and provide axial extension",
        repetition: "6",
        elementId: 'urdhva-prasarita-padasana',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale raise arms and straighten legs pressing lower back into floor
                </p>
                <p>On exhale lower arms and bend legs
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--urdhva-prasarita-padasana">
                <h3>Urdhva Prasarita Padasana</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA}  alt="Urdhva Prasarita Padasana start"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Urdhva Prasarita Padasana end"/>
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
export default UrdhvaPrasaritaPadasana;
