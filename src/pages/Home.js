import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductDetails from './ProductPage';
import Carousel from '../components/Carousel';
const URL = 'http://localhost/store/';

export default function Home({addToCart}) {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [productInfo, setProductInfo] = useState(null);

  
  useEffect(() => {
      axios.get(URL)
        .then((response) => {
          setItems(response.data)
          setLoading(false);
        }).catch(error => {
          alert(error.response ? error.response.data.error : error)
        });
    }, [])
    function back(){
      setProductInfo(null);
    }

    if (productInfo !=null) {
      return <ProductDetails
      product={productInfo}
      addToCart={addToCart}
      name={productInfo.name}
      price={productInfo.price}
      description={productInfo.description}
      image={productInfo.image}
      back={back}
      
      />
    } else {

  return (
  <div className='container'>
    <Carousel />
    
    <div className='ProductGrid'>
        {items?.map(item => (
            <div className='ProductCard' key={item.id}>
                <img src={'http://localhost/store/images/'+item.image+".jpg"} alt="" />
                    <p className='Name'>{item.name}</p>
                    <p className='Price'>{item.price}</p>
                    <button type="button" className="btn btn-primary" onClick={e=> setProductInfo(item)}>Lisätietoja</button>
                    <button type="button" className="btn btn-primary" onClick={e=> addToCart(item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                            </svg>
                          </button>
                      </div>
                    ))}
                </div>
          </div>)
  }
}