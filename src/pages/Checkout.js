import axios from 'axios';
import React from 'react';


export default function Checkout({URL, cart, emptyCart}) {

    function saveOrder() {
      const json = JSON.stringify({
        firstname: "Nikke",
        lastname: "KAOKDA",
        address: "asdas 1",
        zip: "09203",
        city: "Oulu",
        cart: cart,
      });
      console.log(cart)
      console.log(json)
      axios.post(URL + 'order/save.php', json, {
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json'
        }
      })
      .then(() => {
        // emptyCart();
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
    }

  return (
<div className="maincontainer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Ostoskorisi</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                  </div>
                  <span className="text-muted">12€</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Second product</h6>
                  </div>
                  <span className="text-muted">8€</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Third item</h6>
                  </div>
                  <span className="text-muted">5€</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Yhteensä</span>
                  <strong>25€</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Toimitustiedot</h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">Etunimi</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                    <div className="invalid-feedback">
                      Etunimi on pakollinen.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Sukunimi</label>
                    <input type="text" className="form-control" id="lastName" required />
                    <div className="invalid-feedback">
                      Sukunimi on pakollinen.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Sähköposti</label>
                  <input type="email" className="form-control" id="email" />
                  <div className="invalid-feedback">
                    Sähköposti on pakollinen.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Osoite</label>
                  <input type="text" className="form-control" id="address" required />
                  <div className="invalid-feedback">
                    Syötä osoite.
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">Postitoimipaikka</label>
                    <input type="text" className="form-control" id="state" required />
                    <div className="invalid-feedback">
                      Postitoimipaikka on pakollinen.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Postinumero</label>
                    <input type="text" className="form-control" id="zip" required />
                    <div className="invalid-feedback">
                    Postinumero on pakollinen.
                    </div>
                  </div>
                </div>
                <h4 className="mb-3">Maksutapa</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" deafultchecked="true" required />
                    <label className="custom-control-label" htmlFor="credit">Luottokortti</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                    <label className="custom-control-label" htmlFor="debit">Verkkopankki</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                    <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Kortin numero</label>
                    <input type="text" className="form-control" id="cc-number" required />
                    <div className="invalid-feedback">
                      Kortin numero on pakollinen
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Voimassaolo</label>
                    <input type="text" className="form-control" id="cc-expiration" required />
                    <div className="invalid-feedback">
                       Kortin voimassaolo on pakollinen
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" required />
                    <div className="invalid-feedback">
                    Kortin turvakoodi on pakollinen
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="button" onClick={() => saveOrder()}>Maksa ja tilaa</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
