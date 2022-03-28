import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../styles/AboutUs.css';
import maksutavat from "../images/verkkokaupan-maksutavat.png";


export default function AboutUs() {

    return (
        <div className="AboutUs">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1> Yhteystiedot </h1>
                        <br></br>
                        <p>Elektroniikkatie 5</p>
                        <p>90410 Oulu</p>
                        <p>Finland</p>
                        <br></br>
                        <p>Sähköposti: info@kauppax.com</p>
                        <p>Puh: 01111000</p>
                    </div>
                    <div className="col-sm" id='tekijat'>
                        <h1> Verkkokaupan kehittäjät </h1>
                        <br></br>
                        <p>Jussi Kujala</p>
                        <p>Nino Rahikkala</p>
                        <p>Niko Louhela</p>
                        <p>Siiri Poropudas</p>
                        <p>Juho Ahonen</p>
                    </div>
                    <div className="col-sm">
                        <h1> Maksutavat </h1>
                        <br></br>
                        <img className="maksutapa" src={maksutavat}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}