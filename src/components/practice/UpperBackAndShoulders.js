import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {Vajrasana, Chakravakasana, ThreadTheNeedle} from '../asana';

function UpperBackAndShoulders(props) {
    return (
    <div>
        <h1>Upper back and shoulders</h1>
        <h2>Overview</h2>
        <ListGroup className="asana-list">
           <ListGroupItem href="#vajra">Vajrasana</ListGroupItem>
           <ListGroupItem href="#chakravakasana">Chakravakasana</ListGroupItem>
           <ListGroupItem href="#thread-the-needle">Thread the needle</ListGroupItem>
         </ListGroup>

        <h2 className="display-4">Asanas</h2>
        <section className="page-section__content">
            <Vajrasana />
            <Chakravakasana description="Amys special" repetition={8} stay={4}>
                <p>Amy is the best</p>
                <p>I love amy</p>
            </Chakravakasana>
            <ThreadTheNeedle />
        </section>
    </div>
    );
}
export default UpperBackAndShoulders;
