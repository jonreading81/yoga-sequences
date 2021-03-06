import React, {Component } from 'react';
import PropTypes from 'prop-types';

import SVGPositionA from '../../assets/svg/bhujangasana-01.svg';
import SVGPositionB from '../../assets/svg/bhujangasana-b-01.svg';
import InEx from './breath/InEx';
import Count from './Count';

class Bhujangasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Strenghen back and shoulders, and flatten thoraic curve",
        repetition: "6",
        stay: "6",
        elementId: 'bhujangasana',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale pull back with hands and lift chest keeping head inline with spine
                </p>
                <p>On exhale lower back down
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--bhujangasana">
                <h3>Bhujangasana</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA} alt="Bhujangasana start"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Bhujangasana End"/>
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
export default Bhujangasana;
