import React from 'react';

import '../styles/ProductPage.css';

export default function ProductDetails({name, price, product, image, description, back, addToCart}) {
    return (

        <div className="containerbox">
            <div className="otsikko">{name}</div>
            <hr></hr>
            <div className="paakuva" >
                <img src={'http://localhost/store/images/'+image+".jpg"}></img>
            </div>
            <div className="hinta"><p id="hinta">{price} Euroa</p></div>
            <div className="toimitusinfo"><p>Arvioitu toimitusaika on noin yksi viikko.<br></br>Ei palautusoikeutta 30 vuorokauden jälkeen.</p><br></br></div>
            <div className="tuotetiedot"><p id="tuotetietoa">{description}</p></div>
            <div className="nappi">
                <button onClick={back}>Takaisin</button>
                <button onClick={e=> addToCart(product)}>Lisää ostoskoriin</button>
                </div>
                
        </div>
    )
}