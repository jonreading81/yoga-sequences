import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {
    Vajrasana,
    Chakravakasana,
    ThreadTheNeedle,
    ScapulaRetraction,
    LateralArmRaises,
    DviPadaPitham,
    JatharaParvritti
} from '../asana';

function Amy_07_08_2018(props) {
    return (
    <div>
        <h1>Amy 07/08/2018</h1>
        <h2>Overview</h2>
        <p>Build strength in upper back, shoulders and musculature sorounding sacrum</p>
        <ListGroup className="asana-list">
            <ListGroupItem href="#vajra">Vajrasana</ListGroupItem>
           <ListGroupItem href="#scapula-retraction">Scapula retraction</ListGroupItem>
           <ListGroupItem href="#lateral-arm-raise">Lateral Arm Raised</ListGroupItem>
           <ListGroupItem href="#dvi-pada-pitham">Dvi Pada Pitham</ListGroupItem>
           <ListGroupItem href="#jathara-parvritti">Jathara Parvritti</ListGroupItem>
           <ListGroupItem href="#chakravakasana">Chakravakasana</ListGroupItem>
           <ListGroupItem href="#thread-the-needle">Thread the needle</ListGroupItem>
         </ListGroup>

        <h2 className="display-4">Asanas</h2>
        <section className="page-section__content">
            <Vajrasana  description="To warm up body, mobilising shoulders, arms and providing in internal and external rotation of humorous" repetition={8} />
            <ScapulaRetraction />
            <LateralArmRaises />
            <DviPadaPitham />
            <JatharaParvritti />
            <ThreadTheNeedle repetition= "6/4" />
            <Chakravakasana/>

        </section>
    </div>
    );
}
export default Amy_07_08_2018;
