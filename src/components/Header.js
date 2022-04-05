import React from 'react';
import logo from "../images/kauppax.png";
import { Link, Router, Route } from 'react-router-dom';

function Header() {
  return (
    <>
        <header>
          <img src={logo} alt="" />
            <Link className="Login" to={'/LogIn'} >Kirjaudu sisään</Link>
            <Link className="" to={'/Register'} >Rekisteröidy</Link>
        </header>
    </>
  )
}

export default Header