import { useEffect, useState } from "react";
import react from "react";
import PlayerList from "../PlayerList/PlayerList";

function Body(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>Body</h1>
            <h3>{JSON.stringify(props)}</h3>
            <PlayerList players={props.players} />
        </div>
    )
}

export default Body