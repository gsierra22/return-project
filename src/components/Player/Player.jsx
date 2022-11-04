import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";

function Player(props){
    // const[name, setName]= useState(null);
    const deletePlayer = () =>{
        axios.delete(`/players/${props.player.id}`).then ((response) =>{
            console.log('delete', response);
            props.getName();
        }).catch((err)=>{
            alert('delete error');
            console.log(err);
        })
    }
    return(
        <div>
            <h1>{props.player.name}</h1>
            <p>{props.player.position}</p>
            <button onClick={deletePlayer}>Delete</button>
        </div>
    )
}

export default Player