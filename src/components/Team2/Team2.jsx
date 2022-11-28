import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';

function Team2(props){
    // const[name, setName]= useState(null);
    const changeName = () =>{
        axios.put(`/players/${props.player.id}`).then ((response) =>{
            props.getName();
        }).catch((err)=>{
            alert('put error');
            console.log(err);
        })
    }
    
    const deletePlayer = () =>{
        axios.delete(`/players/${props.player.id}`).then ((response) =>{
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
            <Button onClick={changeName}>Change Name</Button>
            <Button variant="primary" onClick={deletePlayer}>Delete</Button>
        </div>
    )
}

export default Team2