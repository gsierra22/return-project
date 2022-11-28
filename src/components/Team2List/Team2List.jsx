import { useEffect, useState } from "react";
import react from "react";
import Team2 from "../Team2/Team2";

function Team2List(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>Team 2 List</h1>
            {
                props.players.map( player =>(
                    <Team2 player={player} getName={props.getName}/>
                ))
            }
        </div>
    )
}

export default Team2List