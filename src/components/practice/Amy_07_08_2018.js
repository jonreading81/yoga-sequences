import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {
    Vajrasana,
    Chakravakasana,
    ThreadTheNeedle,
    ScapulaRetraction,
    LateralArmRaises,
    DviPadaPitham,
    JatharaParvritti,
    AdhoMukhaSvanasana,
    Plank,
    Vasisthasana,
    Dolphin,
    Bhujangasana,
    BhujangasanaSacrumAdaption,
    UrdhvaPrasaritaPadasana,
    Pascimatanasana,

} from '../asana';

function Amy_07_08_2018(props) {
    return (
    <div>
        <h1>Amy 07/08/2018</h1>
        <h2>Overview</h2>
        <p>Build strength in upper back, shoulders and musculature sorounding sacrum</p>
        <ListGroup className="asana-list">
            <ListGroupItem href="#vajrasana">Vajrasana</ListGroupItem>
           <ListGroupItem href="#scapula-retraction">Scapula retraction</ListGroupItem>
           <ListGroupItem href="#lateral-arm-raise">Lateral Arm Raised</ListGroupItem>
           <ListGroupItem href="#dvi-pada-pitham">Dvi Pada Pitham</ListGroupItem>
           <ListGroupItem href="#jathara-parvritti">Jathara Parvritti</ListGroupItem>
           <ListGroupItem href="#thread-the-needle">Thread the needle</ListGroupItem>
           <ListGroupItem href="#adho-mukha-svanasana">AdhoMukhaSvanasana</ListGroupItem>
           <ListGroupItem href="#plank">Plank</ListGroupItem>
           <ListGroupItem href="#plank">Vasisthasana</ListGroupItem>
           <ListGroupItem href="#dolphin">Dolphin</ListGroupItem>
           <ListGroupItem href="#bhujangasana">Bhujangasana</ListGroupItem>
           <ListGroupItem href="#bhujangasana">Bhujangasana Sacrum Adaption</ListGroupItem>
           <ListGroupItem href="#chakravakasana">Chakravakasana</ListGroupItem>
           <ListGroupItem href="#urdhva-prasarita-padasana">Urdhva Prasarita Padasana</ListGroupItem>
           <ListGroupItem href="#pascimatanasana">Pascimatanasana</ListGroupItem>



         </ListGroup>

        <h2 className="display-4">Asanas</h2>
        <section className="page-section__content">
            <Vajrasana  description="To warm up body, mobilising shoulders, arms and providing in internal and external rotation of humorous" repetition={8} />
            <ScapulaRetraction />
            <LateralArmRaises />
            <DviPadaPitham />
            <JatharaParvritti />
            <ThreadTheNeedle/>
            <AdhoMukhaSvanasana />
            <Plank />
            <Vasisthasana />
            <Dolphin />
            <Bhujangasana description="To strengthen musculature around sacrum" stay={false}>
                <p>On Inhale pull back with hands and lift chest keeping head inline with spine
                </p>
                <p>On exhale lower back down</p>
                <p>First 2 repetitions feet together</p>
                <p>Second 2 repetitions feet hip wifth apart</p>
                <p>Final 2 repetitions feet wide apart</p>
            </Bhujangasana>
            <BhujangasanaSacrumAdaption />
            <Chakravakasana/>
            <UrdhvaPrasaritaPadasana />
            <Pascimatanasana />


        </section>
    </div>
    );
}
export default Amy_07_08_2018;
