import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/vajrasana-a.svg';
import SVGPositionB from '../../assets/svg/balasana.svg';
import ExIn from './breath/ExIn';
import Count from './Count';

class Vajrasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Warm up and stretch back, shoulders and arms",
        repetition: "6",
        elementId: 'vajrasana',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale lift chest and arms flattening upper back</p>
                <p>On Exhale bring chest to thighs before buttocks to heels</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--vajrasana">
                <h3>Vajrasana</h3>
                <p>{description}</p>
                <div className="container">
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA}  alt="Vajrasana start"/>
                            </div>
                            <div className="col-sm-1">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Vajrasana end"/>
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
export default Vajrasana;
