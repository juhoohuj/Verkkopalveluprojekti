import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import '../styles/ProductPage.css';

export default function Grid () {
  
    return (
  
        <div className="containerbox">
            <div className="otsikko">Tietokone X V4 Gen1 14" Kannettava </div>
            <hr></hr>
            <div className="paakuva"></div>
            <div className="sivukuva1"></div>
            <div className="sivukuva2"></div>
            <div className="sivukuva3"></div>
            <div className="hinta"><p id="hinta">Hinta</p></div>
            <div className="toimitusinfo"><p>Arvioitu toimitusaika on noin yksi viikko.<br></br>Ei palautusoikeutta 30 vuorokauden jälkeen.</p><br></br></div>
            <div className="tuotetiedot"><p id="tuotetietoa">Tietoa tuotteesta tänne</p></div>
            <div className="nappi"><button>Lisää ostoskoriin</button></div>
        </div>
    )
}