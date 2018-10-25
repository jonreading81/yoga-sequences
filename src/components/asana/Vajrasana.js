import React, {Component } from 'react';
import PropTypes from 'prop-types';
import imageA from '../../assets/images/vajrasana-a.jpg';
import imageB from '../../assets/images/vajrasana-b.jpg';
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
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img className="asana__image" {...imageA}  alt="Vajrasana start"/>
                            </div>
                            <div className="col-sm-1 asana__instructions__details">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img className="asana__image" {...imageB} alt="Vajrasana end"/>
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
export default Vajrasana;
