import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

import '../styles/Products.css';

export default function Products() {
const [categoryName, setCategoryName] = useState('');
const [products, setProducts] = useState([]);


let params = useParams();
const URL = 'http://localhost/store/';


useEffect(() => {
  console.log(params)
  console.log(URL + 'getproducts.php/' + params.categoryId)
  axios.get(URL + 'getproducts.php/' + params.categoryId)
    .then((response) => {
      const json = response.data;
      setCategoryName(json.category);
      setProducts (json.products);
    }).catch(error => {
    alert(error.response === undefined ? error : error.response. data.error);
    })
    }, [params])
  return (
    <div className='Products'>
    <Header />
      <NavBar />
        <div className='container'>
          <h1 className='categoryName'>{categoryName}</h1>
            <div className='ProductGrid'>
              {products.map(product => (
                  <div className='ProductCard' key={product.id}>
                      <img src={require("../images/"+product.image+".jpg")} alt="" />
                          <p className='Name'>{product.name}</p>
                          <p className='Price'>{product.price}</p>
                  </div>
              ))}
       </div>
    </div>
  </div>
  )
}