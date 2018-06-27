import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import SVGSvanasanAadaptionA from '../assets/svg/savasana_adaption_a.svg';
import SVGSvanasanAadaptionB from '../assets/svg/savasana_adaption_b.svg';

function neckAndShoulderTheraphy(props) {
    return (
    <div>
        <h1> Neck and Shoulder Theraphy</h1>
        <h2>Overview</h2>
        <ListGroup className="asana-list">
           <ListGroupItem href="#asana-1">Seated urdhva hastasana</ListGroupItem>
           <ListGroupItem href="#asana-2">Seated chest opening</ListGroupItem>
           <ListGroupItem href="#asana-3">Seated chin tuck</ListGroupItem>
           <ListGroupItem href="#asana-4">Seated lateral head tilt</ListGroupItem>
           <ListGroupItem href="#asana-5">Vajrasana asymetrical adaption</ListGroupItem>
           <ListGroupItem href="#asana-6">Supta urdhva hastasana</ListGroupItem>
           <ListGroupItem href="#asana-7">Dvi pada pitham adaption</ListGroupItem>
           <ListGroupItem href="#asana-8">Apanasana</ListGroupItem>
           <ListGroupItem href="#asana-9">Jathara parvritti</ListGroupItem>
         </ListGroup>

        <h2 className="display-4">Asanas</h2>
        <section className="page-section__content">
            <div id="asana-1" className="card card--asana">
                <div className="card-body">
                    <h3 className="card-title">Savasana Adaption</h3>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <h3 className="card-title">a)</h3>
                    <div className="container">
                        <div className="row">
                            <div class="card--asana__instructions">
                                <div className="col-sm-4">
                                  <img src={SVGSvanasanAadaptionA} alt="Savasana Adaption" />
                                </div>
                                <div className="col-sm-1">
                                    <div className="card--asana__breath">
                                        In
                                        <div className="glyphicon glyphicon-arrow-right card--asana__breath__icon" aria-hidden="true" />
                                    </div>
                                    <div className="card--asana__breath">
                                        <div className="glyphicon glyphicon-arrow-left card--asana__breath__icon" aria-hidden="true" />
                                        Ex
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                  <img src={SVGSvanasanAadaptionB} alt="Savasana Adaption" />
                                </div>
                                <div className="col-sm-3">
                                    <div className="card--asana__count">R 4/4</div>
                                    <div className="card--asana__count">S 4</div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="card--asana__breath--full">
                                        <div className="glyphicon glyphicon-arrow-left card--asana__breath__icon" aria-hidden="true" />
                                        Ex
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="card-text card--asana__details">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </section>
    </div>
    );
}
export default neckAndShoulderTheraphy;
