import React from "react";
import "./style.css";


function PlayerCard (props) {
    return (
        
        <div className="img-fluid img-thumbnail col-lg-3" id="player-card">
          <img src={props.image} id="player-pic" alt={props.name} onClick={() => props.tally(props.id)}/>
          <div className="card-body">
            <h5 className="card-title" id="player-name">Name: {props.name}</h5>
            <h5 className="card-title" id="player-position">Position: {props.position}</h5>
          </div>
        </div>
    )
}

export default PlayerCard;