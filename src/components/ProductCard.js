import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductDetails from '../pages/ProductPage';


const URL = 'http://localhost/store/';

function ProductCard() {
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
        name={productInfo.name}
        price={productInfo.price}
        description={productInfo.description}
        image={productInfo.image}
        back={back}
        
        />
      } else {
        return (
          <div className='container'>
          <div className='ProductGrid'>
              {items?.map(item => (
                  <div className='ProductCard' key={item.id}>
                      <img src={'http://localhost/store/images/'+item.image+".jpg"} alt="" />
                          <p className='Name'>{item.name}</p>
                          <p className='Price'>{item.price}</p>
                          <button type="button" className="btn btn-primary" onClick={e=> setProductInfo(item)}>Lisätietoja</button>

                  </div>
              ))}
                </div>
          </div>
        )
      }
      }



export default ProductCard