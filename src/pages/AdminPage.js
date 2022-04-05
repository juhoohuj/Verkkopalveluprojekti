import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import '../styles/AdminPage.css';

const URL = 'http://localhost/store/';

function AdminPage () {


    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get(URL + 'getorders.php')
          .then((response) => {
            const json = response.data;
            setOrders(json);
          }).catch(error => {
          alert(error.response === undefined ? error : error.response. data.error);
          })
          }, [])

    useEffect(() => {
    axios.get(URL + 'getcustomers.php')
        .then((response) => {
        const json = response.data;
        setCustomers(json);
        }).catch(error => {
        alert(error.response === undefined ? error : error.response. data.error);
        })
        }, [])


return (
    <div className='container'>
        <div className='Orderlist'>
        <h2>Tilaukset</h2>
        {orders?.map(order => (
            <div className='Order'>
                <p>Tilausnumero: {order.order_id}</p>
                <p>Asiakasnumero: {order.customer_id}</p>
                <p>Tilauspäivämäärä: {order.orderdate}</p>

            </div>
        ))}
        </div>
    </div>
  );
}

export default AdminPage;
