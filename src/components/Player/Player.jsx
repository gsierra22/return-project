import { useEffect, useState } from "react";
import react from "react";

function Player(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>Player</h1>
            <h3>{JSON.stringify(props)}</h3>
        </div>
    )
}

export default Player