import React, {Component } from 'react';
import PropTypes from 'prop-types';
import imageA from '../../assets/images/tadasana.jpg';
import Count from './Count';

class Tadasana extends Component {

    static propTypes = {
        description: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Develop awarness and balance within the body",
        stay: "10",
        elementId: 'tadasana',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>Feel the soles of both feet, rock from side to side until the
                  weight feels equally balanced between the feet.
                </p>
                <p>Rock on to the balls of the then to the heels until the weight feels equally
                balanced between the front and back.
                </p>
                <p>Press through the big toe side of the foot, then through the little toe side
                and feel the whole base of the foot in contact with the ground.
                </p>
                <p>Engage the lower belly to 20% exersion</p>
                <p>Roll the shoulders back and down and feel the upper back broaden and the
                chest open.</p>
                <p>Look straight ahead and feel the head balanced on top of the spine</p>
                <p>Press through the feet and lift through the spine to release and create space</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--Tadasana">
                <h3>Tadasana</h3>
                <p>{description}</p>
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-6">
                              <img className="asana__image" {...imageA}  alt="Tadasana"/>
                            </div>
                            <div className="col-sm-6 asana__instructions__details">
                                <Count stay={stay} />
                            </div>
                          </div>
                    </div>
                {children}
            </div>
        )
    }
}

export default Tadasana;
