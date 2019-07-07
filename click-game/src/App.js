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
    players,
    score: 0,
    topScore: 0,
    clickedPlayer: []
  };

  handleIncrement = event => {
    const currentPlayer = event.target.alt;
    const playerAlreadyClicked = this.state.clickedPlayer.indexOf(currentPlayer) > -1;

    if (playerAlreadyClicked) {
      this.setState(
        {
        players: this.state.players.sort(function(a, b) {
          return 0.5 - Math.random();
        }
        ),
        clickedPlayer: [],
        score: 0
      });

      alert("You lose. Play again?");

      if (this.state.score > this.state.topScore)
      {
      this.setState({ topScore: this.state.score})
      }
    } 
    else {
      this.setState(
        {
          players: this.state.players.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPlayer: this.state.clickedPlayer.concat(currentPlayer),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12)
          {
            alert("Yay! You Win!");
            this.setState(
              {
              players: this.state.players.sort(function(a, b)
              {
                return 0.5 - Math.random();
              }),
              currentPlayer: [],
              score: 0
            });
          }
        });
    }
  };

  // handleIncrement = id => {
  //   this.setState({ score: this.state.score + 1 });
  //   if (this.state.topScore < this.state.score) {
  //     this.setState({ topScore: this.state.score + 1 })
  //   }
  //   this.shuffle(players);
  // };

  // end of on click function

  // start of card shuffle
  // shuffle = (cards) => {
  //   let currentIndex = cards.length, temporaryValue, randomIndex;
  //   while (0 !== currentIndex) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;
  //     temporaryValue = cards[currentIndex];
  //     cards[currentIndex] = cards[randomIndex];
  //     cards[randomIndex] = temporaryValue;
  //   }
  //   return cards;
  // }

  // run this if a card has been clicked more than once
  // gameOver = () => {
  //   this.setState({ score: 0 });
  //   if (this.state.score > this.state.topScore) {
  //     this.setState({ topScore: this.state.score})
  //   }
  //   this.shuffle(players);
  // }

  // map through the PlayersCard component and render cards for each
  render() {
    return (
      <Container>
      <Header
      score={this.state.score}
      topScore={this.state.topScore}/>
      <div className="container">
      <br/>
      <div className="row">
      {this.state.players.map(player => (
      <PlayerCard 
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
