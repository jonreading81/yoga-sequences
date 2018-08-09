import React, {Component } from 'react';
import PropTypes from 'prop-types';

import SVGPositionA from '../../assets/svg/eka-pada-ustrasana-a-01.svg';
import SVGPositionB from '../../assets/svg/eka-pada-ustrasana-b-01.svg';
import SVGPositionC from '../../assets/svg/eka-pada-ustrasana-c-01.svg';
import InEx from './breath/InEx';
import Count from './Count';

class EkaPadaUstrasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Stretch front of body , and hip flexors",
        repetition: "4",
        elementId: 'eka-pada-ustrasana',
    };


    render() {
        const {description, repetition, stay, elementId ,children} = this.props;
        return (
            <div id={elementId} className="asana asana--adho-mukha-svanasana">
                <h3>Eka Pada Ustrasana</h3>
                <p>{description}</p>
                <div className="row">
                    <div class="asana__instructions">
                        <div className="col-sm-1">
                          <h4>A)</h4>
                        </div>
                        <div className="col-sm-4">
                          <img src={SVGPositionA}  alt="Eka Pada ustrasana"/>
                        </div>
                        <div className="col-sm-2">
                            <InEx />
                        </div>
                        <div className="col-sm-4">
                          <img src={SVGPositionB} alt="Eka Pada ustrasana"/>
                        </div>
                        <div className="col-sm-1">
                            <Count repetition={repetition} stay={stay} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm-12">
                        <div className="asana__details">
                            <p>On Inhale bend front leg, while maintaining neutral pelvis,
                            allow back leg to externally rotate bring stretch to inner thigh
                            </p>
                        </div>
                </div>
                </div>
                <div className="row">
                    <div class="asana__instructions">
                        <div className="col-sm-1">
                          <h4>A)</h4>
                        </div>
                        <div className="col-sm-4">
                          <img src={SVGPositionB}  alt="Eka Pada ustrasana"/>
                        </div>
                        <div className="col-sm-2">
                            <InEx />
                        </div>
                        <div className="col-sm-4">
                          <img src={SVGPositionC} alt="Eka Pada ustrasana"/>
                        </div>
                        <div className="col-sm-1">
                            <Count repetition={repetition} stay={stay} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div class="col-sm-12">
                        <p>On raise arm bringing stretch into the front of the torso
                        </p>
                    </div>
                </div>
                {children}
            </div>
        )
    }
}
export default EkaPadaUstrasana;
