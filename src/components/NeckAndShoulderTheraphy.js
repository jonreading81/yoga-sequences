import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Vajrasana} from './asana';

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
           <ListGroupItem href="#vajra">Vajrasana</ListGroupItem>

         </ListGroup>

        <h2 className="display-4">Asanas</h2>
        <section className="page-section__content">
            <Vajrasana elementId="vajra">
                <p>Vajra</p>
            </Vajrasana>
        </section>
    </div>
    );
}
export default neckAndShoulderTheraphy;
