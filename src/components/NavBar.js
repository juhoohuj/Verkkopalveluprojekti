import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link, Router, Route } from 'react-router-dom';

import Cart from './Cart';

const URL = 'http://localhost/store/';

function NavBar({URL ,cart}) {
    const [categories, setCategories] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        axios.get(URL+"getcategories.php")
          .then((response) => {
            const json = response.data;
            setCategories(json);
            // console.log(json);
          }).catch(error => {
            alert(error.response === undefined ? error.response.data.error : error)
          });
      }, [])
  return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <Link className="nav-link" to={'/'} >Etusivu</Link>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Kategoriat
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    {categories?.map(category => (
                      <li key={category.id}>
                      <Link 
                        className='dropdown-item'
                          to={'/Products/' +category.id}>{category.name}
                        </Link>
                        
                        </li>
                      ))}
                    </ul>
                    
                  </li>
                  <Link className="nav-link" to={'AboutUs'} >Tietoa meistä</Link>
                  <Link className='nav-link' to={'AdminPage'}>AdminPage demo</Link>

                </ul>
            </div>
            </div>
              <input className="form-control mr-sm-2" name='keyword' type="search" 
                placeholder="Etsi tuotetta" aria-label="Search" onChange={e => setKeyword(e.target.value)}/>
                <Link 
                  className='btn btn-outline-success'
                    to={'/search/' +keyword}>Hae
                </Link>
                <Cart cart={cart}/>
                <p className='ProductsInCart'>{cart.length}</p>
          </nav>
        </div>
          
  )
}
export default NavBar;