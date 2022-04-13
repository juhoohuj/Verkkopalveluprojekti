import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductDetails from './ProductPage';

import '../styles/Products.css';

export default function Products({URL ,addToCart}) {
const [categoryName, setCategoryName] = useState('');
const [products, setProducts] = useState([]);
const [productInfo, setProductInfo] = useState(null);

let params = useParams();

useEffect(() => {
  axios.get(URL + 'getproducts.php/' + params.categoryId)
    .then((response) => {
      const json = response.data;
      setCategoryName(json.category);
      setProducts (json.products);
    }).catch(error => {
    alert(error.response === undefined ? error : error.response. data.error);
    })
    }, [params])

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
    <div className='Products'>
        <div className='container'>
          <h1 className='categoryName'>{categoryName}</h1>
            <div className='ProductGrid'>
              {products.map(product => (
                  <div className='ProductCard' key={product.id}>
                      <img src={'http://localhost/store/images/'+product.image+".jpg"} alt="" />
                          <p className='Name'>{product.name}</p>
                          <p className='Price'>{product.price}</p>
                          <button type="button" className="btn btn-primary" onClick={e=> setProductInfo(product)}>Lisätietoja</button>
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
}