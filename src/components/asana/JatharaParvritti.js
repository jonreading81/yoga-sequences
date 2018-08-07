import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/jathara-parvritti-a-01.svg';
import SVGPositionB from '../../assets/svg/jathara-parvritti-b-01.svg';
import ExIn from './breath/ExIn';
import Count from './Count';

class JatharaParvritti extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Twist spine",
        repetition: "4/4",
        elementId: 'jathara-parvritti',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On exhale lower legs to the side keeping shoulders grounded</p>
                <p>On inhale bring legs to center</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--jathar-parvritti">
                <h3>Jathara Parvritti</h3>
                <p>{description}</p>
                <div className="container">
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA}  alt="Jathara Parvritti start"/>
                            </div>
                            <div className="col-sm-1">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Jathara Parvritti end"/>
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
export default JatharaParvritti;
