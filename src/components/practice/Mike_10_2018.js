import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {
    Vajrasana,
    SacrumRocking,
    Tadasana,
    Warrior_2,
    Warrior_1,
    Chakravakasana,
    ThoracicRotation,
    SupineThoracicRotation,

} from '../asana';

function Mike_10_2018(props) {
    return (
    <div>
        <h1>Mike October 2018</h1>
        <h2 className="section-heading">Overview</h2>
        <p className="overview">Create balance in the hips and open thoracic spine.</p>
        <h2 className="section-heading">Asanas</h2>
        <ListGroup className="asana-list">
            <ListGroupItem href="#vajrasana">Vajrasana</ListGroupItem>
            <ListGroupItem href="#sacrum-rocking">Sacrum Rocking</ListGroupItem>
            <ListGroupItem href="#tadasana">Tadasana</ListGroupItem>
            <ListGroupItem href="#warrior_2">Warrior 2</ListGroupItem>
            <ListGroupItem href="#warrior_1">Warrior 1</ListGroupItem>
            <ListGroupItem href="#chakravakasana">Chakravakasana</ListGroupItem>
            <ListGroupItem href="#thoracic-rotation">Thoracic Rotation</ListGroupItem>
            <ListGroupItem href="#supine-thoracic-rotation">Supine Thoracic Rotation</ListGroupItem>
         </ListGroup>

        <section className="page-section__content">
            <Vajrasana  description="To warm up body, mobilising shoulders and back" repetition={8} />
            <SacrumRocking />
            <Tadasana />
            <Warrior_2 stay={5} />
            <Warrior_1 stay={5} />
            <Chakravakasana />
            <ThoracicRotation />
            <SupineThoracicRotation />
        </section>
    </div>
    );
}
export default Mike_10_2018;
