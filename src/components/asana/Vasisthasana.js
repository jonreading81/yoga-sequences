import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/vasisthasana-01.svg';
import Count from './Count';

class Vasisthasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Strenghten lateral torso and abductors",
        stay: "10",
        elementId: 'vasisthasana',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details"></div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--vasisthasana">
                <h3>Vasisthasana</h3>
                <p>{description}</p>
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-9">
                              <img src={SVGPositionA}  alt="Vasisthasana"/>
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
export default Vasisthasana ;
