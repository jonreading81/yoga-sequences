import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/dvi-pada-pitham-a-01.svg';
import SVGPositionB from '../../assets/svg/dvi-pada-pitham-b-01.svg';
import InEx from './breath/InEx';
import Count from './Count';

class DviPadaPitham extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Stretch shoulders and chest, bringing awarness to spine",
        repetition: "6/4",
        elementId: 'dvi-pada-pitham',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale press through feet, lifting one vertrbrae at a time
                keeping chin down
                </p>
                <p>On exhale lower body one vertrbrae at a time
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--dvipadapitham">
                <h3>Dvi Pada Pitham</h3>
                <p>{description}</p>
                <div className="container">
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA}  alt="Dvi Pada Pitham start"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Dvi Pada Pitham end"/>
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
export default DviPadaPitham;
