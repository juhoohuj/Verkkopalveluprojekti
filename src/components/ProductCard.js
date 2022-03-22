import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const URL = 'http://localhost/store/';

function ProductCard() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(URL)
          .then((response) => {
            setItems(response.data)
          }).catch(error => {
            alert(error.response ? error.response.data.error : error)
          });
      }, [])
  return (
        <>
        {items?.map(item => (
            <div className='ProductCard' key={item.id}>
                <img src={require("../images/"+item.image+".jpg")} alt="" />
                    <p className='Name'>{item.name}</p>
                    <p className='Price'>{item.price}</p>
            </div>
        ))}
    </>
  )
}

export default ProductCard