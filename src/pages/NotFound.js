import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

import '../styles/NotFound.css';


export default function NotFound() {

  return (
    <div className='NotFound'>
      
        <h1>Sivua ei löytynyt!</h1>
        <Link className="BackToHome" to={'/'} >Etusivu</Link>
        
    </div>

  )
}