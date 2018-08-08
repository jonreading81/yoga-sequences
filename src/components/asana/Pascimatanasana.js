import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/pascimatanasana-a-01.svg';
import SVGPositionB from '../../assets/svg/pascimatanasana-b-01.svg';
import ExIn from './breath/ExIn';
import Count from './Count';

class Pascimatanasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "To stretch the entire back body",
        repetition: "6",
        stay : "6",
        elementId: 'pascimatanasana',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale raise arms  and lengthen spine</p>
                <p>On exhale fold forward squeezing the lower belly</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--pascimatanasana">
                <h3>Pascimatanasana</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA}  alt="Pascimatanasana start"/>
                            </div>
                            <div className="col-sm-1">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Pascimatanasana end"/>
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
export default Pascimatanasana;
