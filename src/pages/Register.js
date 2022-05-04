
import { useState } from 'react';
import axios from 'axios'
import { v4 as uuid } from 'uuid';
import '../styles/Register.css';


const URL = 'http://localhost/store/customer/';

function Register() {

  const [errors, setErrors] = useState([])
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [city, setCity] = useState('')

  function SendForm(e) {
    e.preventDefault();
    const json = JSON.stringify({firstname:firstname,lastname:lastname,email:email,password1:password1,password2:password2,address:address,zipcode:zipcode,city:city});
    console.log(json)
    axios.post(URL + 'handleRegister.php',json, {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => {
      if(response.data.length <= 0) {
        setErrors(['Rekisteröinti onnistui'])
      }else{
        setErrors(response.data);
      }
      console.log(response)
      console.log(errors)
      // setAmount(response.data.amount);
      // setItem('');
      // setAmount('');
    }).catch(error => {
      alert(error.response ? error.response.data.error : error)
    })
  }

  

  return (
    <div className='RegisterUser'>
      <h3>Rekisteröidy</h3>

        <form className='RegisterForm' onSubmit={SendForm}>
          <input value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='Etunimi'/>
          <input value={lastname} onChange={e => setLastname(e.target.value)} placeholder='Sukunimi'/>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Sähköposti'/>
          <input type="password" value={password1} onChange={e => setPassword1(e.target.value)} placeholder='Salasana'/>
          <input type="password" value={password2} onChange={e => setPassword2(e.target.value)} placeholder='Vahvista salasana'/>
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder='Osoite'/>
          <input value={zipcode} onChange={e => setZipcode(e.target.value)} placeholder='Postinumero'/>
          <input value={city} onChange={e => setCity(e.target.value)} placeholder='Postitoimipaikka'/>
          <button className='RegisterButton'>Rekisteröidy</button>
        </form>
        <ul className='RegisterError'>
        {errors?.map(error => (
          <li key={uuid() }>
            {error}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Register;