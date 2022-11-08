import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function NewPlayer(props){
    const[newPlayer, setNewPlayer]= useState({
        name:'',
        position: 'wing',
        bio:'test'
    });

    const addPlayer = () =>{
        axios.post ('/players', newPlayer).then((response)=>{
            props.getName();
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
            <Button onClick={addPlayer}> Add player</Button>
        </div>
    )
}

export default NewPlayer