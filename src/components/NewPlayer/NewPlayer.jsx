import { useEffect, useState } from "react";
import react from "react";

function NewPlayer(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>NewPlayer</h1>
            <h3>{JSON.stringify(props)}</h3>
        </div>
    )
}

export default NewPlayer