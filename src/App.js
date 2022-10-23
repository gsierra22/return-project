import './App.css';
import Body from './components/Body/Body';
import axios from 'axios';
import {useEffect, useState} from 'react';
function App() {
  const[players, setPlayers]=useState([])

  useEffect(()=>{
    getName();
},[]);

  const getName =()=>{
    console.log('in getName');
    axios.get('/players').then((response)=>{
      console.log(response.data)
      setPlayers(response.data)
    }).catch((err)=>{
      alert('error!');
      console.log(err);
    })
  }

  return (
    <div className="App">
      <div>Willkommen!</div>
      <Body players={players}/>
    </div>
  );
}

export default App;
