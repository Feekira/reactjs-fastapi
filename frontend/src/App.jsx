import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { useState, useEffect} from 'react'


function App() {

  const [ body, setBoddy ] = useState('')

  useEffect( ()=> {
    axios.get("http://localhost:8000/get")
    .then( (response) => {
      const data = response.data
      setBoddy(data['body'])
    })
    .catch( (e) => {
      console.log(e)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {body}
      </header>
    </div>
  );
}

export default App;
