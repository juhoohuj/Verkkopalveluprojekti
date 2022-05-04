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
                <button type="button" className="btn btn-primary" onClick={back}>Takaisin</button>
                <p> </p> 
                <button type="button" className="btn btn-primary" onClick={e=> addToCart(product)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                            </svg></button>
                </div>
                
        </div>
    )
}