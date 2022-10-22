import './App.css';
import Body from './components/Body/Body';
import axios from 'axios';
import {useEffect} from 'react';
function App() {

  useEffect(()=>{
    getName();
},[]);

  const getName =()=>{
    console.log('in getName');
  }

  return (
    <div className="App">
      <div>Willkommen!</div>
      <Body test={3*9}/>
    </div>
  );
}

export default App;
