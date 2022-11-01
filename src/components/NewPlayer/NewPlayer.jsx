import { useEffect, useState } from "react";
import react from "react";

function NewPlayer(props){
    // const[name, setName]= useState(null);
    const[newPlayer, setNewPlayer]= useState({
        name:'',
        position: '',
        bio:''
    });

    const updateNewPlayer=(event)=>{
        console.log('in updateplayer', event.target.value);
    }
    return(
        <div>
            <h1>Add a new player</h1>
            <input type="text" placeholder="name" onChange={(event)=>updateNewPlayer(event)}></input>
        </div>
    )
}

export default NewPlayer