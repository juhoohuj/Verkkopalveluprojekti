import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react'


const URL = 'http://localhost/store/';

function NavBar() {
  const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(URL+"getcategories.php")
          .then((response) => {
            setItems(response.data)
          }).catch(error => {
            alert(error.response ? error.response.data.error : error)
          });
      }, [])
  return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategoriat
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {items?.map(item => (
              <li className='dropdown-item' key={item.id}>
                <p className='Name'>{item.name}</p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default NavBar