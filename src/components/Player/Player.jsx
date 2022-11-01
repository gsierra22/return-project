import { useEffect, useState } from "react";
import react from "react";

function Player(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>{props.player.name}</h1>
            <p>{props.player.position}</p>
        </div>
    )
}

export default Player