import React, {Component } from 'react';
import PropTypes from 'prop-types';
import SVGPositionA from '../../assets/svg/thread-the-needle.svg';
import SVGPositionB from '../../assets/svg/thread-the-needle-b.svg';
import ExIn from './breath/ExIn';
import Count from './Count';

class ThreadTheNeedle extends Component {

    static propTypes = {
        description: PropTypes.string,
        repetition: PropTypes.string,
        stay: PropTypes.string,
        elementId: PropTypes.string,
    }

    static defaultProps = {
        description: "Stretch shoulders and thoracic spine",
        repetition: "4/4",
        elementId: 'thread-the-needle',
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
            <div id={elementId} className="asana asana--thread-needle">
                <h3>Thread the needle</h3>
                <p>{description}</p>
                <div className="container">
                    <div className="row">
                        <div class="asana__instructions">
                            <div className="col-sm-4">
                              <img src={SVGPositionA}  alt="Thread the needle start"/>
                            </div>
                            <div className="col-sm-1">
                                <ExIn />
                            </div>
                            <div className="col-sm-4">
                              <img src={SVGPositionB} alt="Thread the needle  end"/>
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
export default ThreadTheNeedle ;
