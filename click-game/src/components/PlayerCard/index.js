import React from "react";
import "./style.css";


function PlayerCard (props) {
    return (
      <div className="col-lg-2 col-md-3 col-sm-6" id="player-card">
          <img className="img-fluid img-thumbnail" src={props.image} id="player-pic" alt={props.id} onClick={props.handleIncrement}/>
          <div className="card-body">
            <h5 className="card-title text-center" id="player-name">{props.name}</h5>
            <h5 className="card-title text-center" id="player-position">{props.position}</h5>
          </div>
      </div>
    )
}

export default PlayerCard;