import { useEffect, useState } from "react";
import react from "react";
import PlayerList from "../PlayerList/PlayerList";
import NewPlayer from "../NewPlayer/NewPlayer";

function Body(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>Rugby</h1>
            <h2>Team 1 vs Team 2</h2>
            <NewPlayer getName={props.getName}/>
            <PlayerList players={props.players} getName={props.getName} />
        </div>
    )
}

export default Body