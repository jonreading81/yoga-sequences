import React, {Component } from 'react';
import PropTypes from 'prop-types';

import SVGPositionA from '../../assets/svg/bhujangasana-01.svg';
import SVGPositionB from '../../assets/svg/bhujangasana-sacrum-a-01.svg';
import SVGPositionC from '../../assets/svg/bhujangasana-sacrum-b-01.svg';
import InEx from './breath/InEx';
import ExIn from './breath/ExIn';
import Count from './Count';

class BhujangasanaSacrumAdaption extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "To strengthen musculature around sacrum",
        repetition: "6",
        elementId: 'bhujangasana-sacrum',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale pull back with hands and lift chest, lifting legs and spreading apart
                </p>
                <p>On exhale keep legs raised brining feet together</p>
                <p>On inhale spread legs</p>
                <p>On exhale return to starting position</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--bhujangasana">
                <h3>Bhujangasana Sacrum Adaption</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-3">
                              <img src={SVGPositionA} alt="Bhujangasana start"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-3">
                              <img src={SVGPositionB} alt="Bhujangasana"/>
                            </div>
                            <div className="col-sm-1">
                                <ExIn />
                            </div>
                            <div className="col-sm-3">
                              <img src={SVGPositionC} alt="Bhujangasana"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Bhujangasana"/>
                            </div>
                            <div className="col-sm-2">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionA} alt="Bhujangasana"/>
                            </div>

                        </div>
                        <div className="col-sm-2">
                            <Count repetition={repetition} stay={stay} />
                        </div>
                </div>
                {children}
            </div>
        )
    }
}
export default BhujangasanaSacrumAdaption;
