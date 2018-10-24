import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/dvi-pada-pitham-a-01.svg';
import Count from './Count';

class Warrior_2 extends Component {

    static propTypes = {
        description: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Open the front of the hips",
        stay: "10",
        elementId: 'warrior_2',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>Turn the back foot out 10 degrees and the front foot 90 degrees</p>
                <p>Bend the front knee, keeping the knee aligned over the ankle</p>
                <p>Externally rotate both thighs to open the front of the hips</p>
                <p>Raise the arms arms palms up keeping the shoulders back and down</p>
                <p>Turn the palms to face down keeping the shoulders back and down
                and the chest open</p>
                <p>Press through the feet and lift through the torso equally</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--warrior-2">
                <h3>Warrior 2</h3>
                <p>{description}</p>
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-9">
                              <img src={SVGPositionA}  alt="Warrior 2"/>
                            </div>
                            <div className="col-sm-3">
                                <Count stay={stay} />
                            </div>
                        </div>
                    </div>
                {children}
            </div>
        )
    }
}

export default Warrior_2;
