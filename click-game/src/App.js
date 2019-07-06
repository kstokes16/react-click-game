import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";
import players from "./players.json";
import PlayerCard from "./components/PlayerCard";

class App extends Component {
  // perform all JS logic before the render function
  state = {
    players
  };

  // map through the PlayersCard component and render cards for each
  render() {
    return (
      <Container>
      <Header />
      <div className="container">
      <div className="row">
      {this.state.players.map(player => (
      <PlayerCard 
      tally={this.tally}  
      id={player.id}
      key={player.id}
      image={player.image}
      name={player.name}
      position={player.position}
      />
      ))}
      </div>
      </div>
      </Container>
    );
  }
}

export default App;
