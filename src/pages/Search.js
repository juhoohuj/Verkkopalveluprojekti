import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';

import '../styles/Products.css';

export default function Search({URL , addToCart}) {
const [products, setProducts] = useState([]);

let params = useParams();

useEffect(() => {
  axios.get(URL + 'searchproducts.php/' + params.keywords)
    .then((response) => {
      const json = response.data;
      setProducts (json.products);
    }).catch(error => {
    alert(error.response === undefined ? error : error.response. data.error);
    })
    }, [params])

    
    if (products.length <=0) {
      return <h1>Hakusanalla ei löydetty tuotteita</h1>;
    }

  return (
    <div className='Products'>
        <div className='container'>
          <h1 className='categoryName'>Haun tulokset: </h1>
            <div className='ProductGrid'>
              {products.map(product => (
                  <div className='ProductCard' key={product.id}>
                      <img src={require("../images/"+product.image+".jpg")} alt="" />
                          <p className='Name'>{product.name}</p>
                          <p className='Price'>{product.price}</p>
                          <button type="button" className="btn btn-primary" onClick={e=> addToCart(product)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                            </svg>
                          </button>
                  </div>
              ))}
       </div>
    </div>
  </div>
  )
}