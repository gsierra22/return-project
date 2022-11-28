import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';

function Team2(props){
    // const[name, setName]= useState(null);
    return(
        <div>
            <h1>Team 2</h1>
            <h3>{JSON.stringify(props)}</h3>
            <h1>{props.player.name}</h1>
            <p>{props.player.position}</p>
            <Button>Change Name</Button>
            <Button variant="primary">Delete</Button>
        </div>
    )
}

export default Team2