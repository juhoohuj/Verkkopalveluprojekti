import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import '../styles/AdminPage.css';

const URL = 'http://localhost/store/';

function AdminPage () {
    const [orders, setOrders] = useState([]);
    const [category, setCategory] = useState("")


    useEffect(() => {
        axios.get(URL + 'getorders.php')
          .then((response) => {
            const json = response.data;
            setOrders(json);
          }).catch(error => {
          alert(error.response === undefined ? error : error.response. data.error);
          })
          }, [])


function remove(order_id) {
  const json = JSON.stringify({order_id:order_id})
  axios.post(URL + 'deleteorder.php', json,{
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then((response) => {
    const newOrderList = orders.filter((order) => order.order_id !== order_id);
    setOrders(newOrderList);
  }).catch (error => {
    alert(error.response ? error.response.data.error : error)
  })
}

function addCategory() {
  if (category==="") {
    alert("Syötä tuoteryhmälle nimi")
    return;
  } else {
  const json = JSON.stringify({name:category})
  axios.post(URL + 'addcategory.php',json,{
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  .then((response) => {
    setCategory(items => [...items,response.data]);
    setCategory("");
  }).catch (error => {
    alert(error.response.data.error)
  });
  }

}

return (
    <div className='container'>
      <div className='categoryForm'>
        <h2>Tuoteryhmän lisäys</h2>
        <form onSubmit={addCategory}>
          <input type="text" value={category} onChange={e=> setCategory(e.target.value)} placeholder="Syötä tuoteryhmä" />
          <button>Lisää tuoteryhmä</button>
        </form>
      </div>
        <div className='Orderlist'>
          <h2>Tilaukset</h2>
          {orders?.map(order => (
            <div className='Order'>
              <div>
                <p>Asiakas: {order.firstname} {order.lastname}</p>
                <p>Tilausnumero: {order.order_id}</p>
                <p>Asiakasnumero: {order.customer_id}</p>
                <p>Tilauspäivämäärä: {order.orderdate}</p>
                <p>Tuotteet: {order.name}</p>
                <p>Määrä: {order.amount}</p>
                <a href="#" className='delete' onClick={() => remove(order.order_id)}>
                  Poista
                </a>
              </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default AdminPage;
