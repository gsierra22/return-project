import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";

function NewPlayer(props){
    // const[name, setName]= useState(null);
    const[newPlayer, setNewPlayer]= useState({
        name:'',
        position: '',
        bio:''
    });

    const addPlayer = () =>{
        console.log('in addplayer');
        axios.post ('/players', newPlayer).then((response)=>{
            console.log('post', response.data);
        }).catch((err)=>{
            console.log(err);
            alert('error')
        })
    }

    const updateNewPlayer=(event)=>{
        setNewPlayer({...newPlayer, name: event.target.value})
    }
    return(
        <div>
            <h1>Add a new player</h1>
            <input type="text" placeholder="name" onChange={(event)=>updateNewPlayer(event)}></input>
            <button onClick={addPlayer}> Add player</button>
            <p>{JSON.stringify(newPlayer)}</p>
        </div>
    )
}

export default NewPlayer