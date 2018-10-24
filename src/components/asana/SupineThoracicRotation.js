import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/chakravakasana-a.svg';
import SVGPositionB from '../../assets/svg/balasana.svg';
import ExIn from './breath/ExIn';
import Count from './Count';

class SupineThoracicRotation extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Extend and rotate the thoracic spine",
        repetition: "6",
        stay: "4",
        elementId: 'supine-thoracic-rotation',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale open the chest and extend and twist through the upper back.</p>
                <p>On exhale reverse the motion and bring the hands together.</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--thoracic-rotataion">
                <h3>Supine Thoracic Rotation</h3>
                <p>{description}</p>
                <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA}  alt="Supine Thoracic Rotation start"/>
                            </div>
                            <div className="col-sm-1">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Supine Thoracic Rotation end"/>
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
export default SupineThoracicRotation;
