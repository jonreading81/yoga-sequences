import React, {Component } from 'react';
import PropTypes from 'prop-types';

import SVGPositionA from '../../assets/svg/dolphin-a-01.svg';
import SVGPositionB from '../../assets/svg/dolphin-b-01.svg';
import InEx from './breath/InEx';
import Count from './Count';

class Dolphin extends Component {

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
        elementId: 'dolphin',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale lower forward
                </p>
                <p>On exhale press back through  forarms
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--dolphin">
                <h3>Dolphin</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA} alt="Dolphin start"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Dolphin End"/>
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
export default Dolphin;
