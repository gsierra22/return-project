import { useEffect, useState } from "react";
import react from "react";
import Player from "../Player/Player";

function PlayerList(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>PlayerList</h1>
            <h3>{JSON.stringify(props)}</h3>
            <Player/>
        </div>
    )
}

export default PlayerList