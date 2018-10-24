import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/dvi-pada-pitham-a-01.svg';
import Count from './Count';

class SacrumRocking extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Create awarness and release tension in the sacrum",
        repetition: "10",
        elementId: 'sacrum-rocking',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>Inhale into the belly, then exhale and gently push the knees forward,
                  keeping the hips grounded, feel the sacrum lifting.
                </p>
                <p>Then breathe into the belly and on the exhale slowly return to the
                  starting position.
                </p>
                <p>Once the rocking feeling is felt try one side at a time, spending more time on the stiff side
                </p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, repetition, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--sacrum-rocking">
                <h3>Sacrum Rocking</h3>
                <p>{description}</p>
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-9">
                              <img src={SVGPositionA}  alt="Sacrum rocking"/>
                            </div>
                            <div className="col-sm-3">
                                <Count repetition={repetition} />
                            </div>
                        </div>
                    </div>
                {children}
            </div>
        )
    }
}
export default SacrumRocking;
