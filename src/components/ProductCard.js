import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const URL = 'http://localhost/store/';

function ProductCard() {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(URL)
          .then((response) => {
            setItems(response.data)
            setLoading(false);
          }).catch(error => {
            alert(error.response ? error.response.data.error : error)
          });
      }, [])

      if (isLoading) {
        return <div className="App">Loading...</div>;
      }

  return (
    <div className='container'>
    <div className='ProductGrid'>
        {items?.map(item => (
            <div className='ProductCard' key={item.id}>
                <img src={require("../images/"+item.image+".jpg")} alt="" />
                    <p className='Name'>{item.name}</p>
                    <p className='Price'>{item.price}</p>
            </div>
        ))}
          </div>
    </div>
  )
}

export default ProductCard