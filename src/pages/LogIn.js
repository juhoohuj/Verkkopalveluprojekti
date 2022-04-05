
import { useEffect, useState } from 'react';
import axios from 'axios'
import { v4 as uuid } from 'uuid';
import '../styles/Register.css';


const URL = 'http://localhost/store/customer/';

function Login() {

  const [errors, setErrors] = useState([])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')


  function SendLoginForm(e) {
    e.preventDefault();
    const json = JSON.stringify({email:email,password:password});
    // console.log(json)
    axios.post(URL + 'handleLogin.php',json, {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => {
      console.log(response)
      if(response.data.length == 0) {
        setErrors(['Kirjautuminen onnistui'])
      }else{
        setErrors(response.data);
      }
      // console.log(errors)
    }).catch(error => {
      alert(error.response ? error.response.data.error : error)
    })
  }

  

  return (
    <div className='UserLogin'>
      <h3>Kirjaudu</h3>
        <form className='LoginForm' onSubmit={SendLoginForm}>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Sähköposti'/>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Salasana'/>
          <button>Kirjaudu</button>
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

export default Login;