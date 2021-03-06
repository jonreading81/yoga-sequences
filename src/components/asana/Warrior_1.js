import React, {Component } from 'react';
import PropTypes from 'prop-types';
import imageA from '../../assets/images/warrior-1.jpg';
import Count from './Count';

class Warrior_1 extends Component {

    static propTypes = {
        description: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Balance the actions of the hips, stretch the back leg hip flexor and open the thoracic spine",
        stay: "10",
        elementId: 'warrior_1',
    };

    getDefaultChildren() {
        return (
            <div className="asana__details">
                <p>Turn the back foot out 30 degrees and the front foot 90 degrees</p>
                <p>Turn the hips to face forwards</p>
                <p>Raise the arms, keep the shoulders down and the chest open</p>
                <p>Bend the front knee, keeping the knee aligned over the ankle</p>
                <p>Keep both side of both feet in contact with the ground</p>
                <p>Press through the feet  and lift through the torso equally</p>
            </div>
        )
    }

    render() {
        const children = this.props.children ? this.props.children : this.getDefaultChildren();
        const {description, stay, elementId} = this.props;
        return (
            <div id={elementId} className="asana asana--warrior-2">
                <h3>Warrior 1</h3>
                <p>{description}</p>
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-6">
                              <img className="asana__image" {...imageA}  alt="Warrior 1"/>
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

export default Warrior_1;
