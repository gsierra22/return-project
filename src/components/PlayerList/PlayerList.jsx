import { useEffect, useState } from "react";
import react from "react";
import Player from "../Player/Player";

function PlayerList(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>List of Players on Team 1</h1>
            {
                props.players.map( player =>(
                    <Player player={player} getName={props.getName}/>
                ))
            }
        </div>
    )
}

export default PlayerList