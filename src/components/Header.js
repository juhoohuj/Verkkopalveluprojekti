import React from 'react';
import logo from "../images/kauppax.png";

function Header() {
  return (
    <>
        <header>
          <img src={logo} alt="" />
            <a className='Login' href="#">Kirjaudu sisään</a>
            <a href="#">Rekisteröidy</a>
        </header>
    </>
  )
}

export default Header