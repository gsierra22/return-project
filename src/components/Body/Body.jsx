import { useEffect, useState } from "react";
import react from "react";
import PlayerList from "../PlayerList/PlayerList";
import NewPlayer from "../NewPlayer/NewPlayer";

function Body(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>Rugby Game!</h1>
            <NewPlayer getName={props.getName}/>
            <PlayerList players={props.players} getName={props.getName} />
        </div>
    )
}

export default Body