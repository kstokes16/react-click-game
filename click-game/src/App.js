import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";
import players from "./players.json";
import PlayerCard from "./components/PlayerCard";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  // perform all JS logic before the render function
  state = {
    players: players,
    guess: null,
    score: 0,
    topScore: 0,
    currentClicks: []
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
    this.shuffle(players);
  };

  shuffle = (cards) => {
    let currentIndex = cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return cards;
  }

  // update score on click of card

  // map through the PlayersCard component and render cards for each
  render() {
    return (
      <Container>
      <Header />
      <div className="container">
      <div className="row">
      {this.state.players.map(player => (
      <PlayerCard 
      score={this.state.score}
      handleIncrement={this.handleIncrement}  
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
