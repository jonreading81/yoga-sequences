import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGScapulaRetraction from '../../assets/svg/scapula-retraction-01.svg';
import SVGScapulaProtraction from '../../assets/svg/scapula-protraction-01.svg';
import InEx from './breath/InEx';
import Count from './Count';

class ScapulaRetraction extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Mobilise scapula, bring awarness to mid traps and romboids",
        repetition: "8",
        elementId: 'scapula-retraction',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>On Inhale bring arms back, opening chest and retracting scapula
                </p>
                <p>On exhale bring arms together, protracting scapula
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--chakravakasana">
                <h3>Scapula Retraction</h3>
                <p>{description}</p>
                <div className="container">
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGScapulaProtraction} alt="Scapula Protraction"/>
                            </div>
                            <div className="col-sm-1">
                                <InEx />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGScapulaRetraction}  alt="Scapula Retraction"/>
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
export default ScapulaRetraction;
