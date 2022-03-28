import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ProductGrid from '../components/ProductGrid';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';

const URL = 'http://localhost/store/';

export default function Home() {


  return (
        <>
          <Carousel />
          <ProductGrid />
    </>
  )
}