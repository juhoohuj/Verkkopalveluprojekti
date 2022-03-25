import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ProductGrid from '../components/ProductGrid';
import Carousel from '../components/Carousel';

const URL = 'http://localhost/store/';

export default function Home() {
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
        <>
          <Carousel />
          <ProductGrid />
    </>
  )
}