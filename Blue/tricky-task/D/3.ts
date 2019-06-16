'use strict';

class Contestant {
  private name: string;
  private placement: number;

  constructor(name: string, place: number = 0) {
    this.name = name;
    this.placement = place
  }
  setPlacement(placement: number) {
    this.placement = placement
  }
  toString() {
    return `${this.name} has finished on place ${this.placement}`
  }
  getName() {
    return this.name
  }
}

class Bet {
  private betId: number;
  private amount: number;
  private Player: Player;
  private contestant: Contestant;

  constructor(amount: number, player: Player, contestant: Contestant) {
    this.betId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    this.amount = amount;
    this.Player = player;
    this.contestant = contestant;
  }
}

class Player {

  private name: string;
  private account: number;
  private bets: Bet[] = [];

  makeBet(contestant: Contestant, amount: number) {
    if (this.account >= amount) {
      let newBet = new Bet(amount, this, contestant)
      this.bets.push(newBet)
    }
  }
  getName() {
    return this.name
  }
  getBet() {
    return this.bets
  }
}

class Race {
  private players: Player[] = [];
  private contestants: Contestant[] = [];

  startRace() {
    // we need to give placement for every contenstant
    let newList = []
    while (this.contestants.length) {
      let index = this.contestants[Math.floor(Math.random() * this.contestants.length)]
      let contenstant = this.contestants.splice(index, 1);
      contenstant.setPlacement(newList.length + 1)
      newList.push(contenstant)

    }
    this.contestants = newList

    this.contestants.forEach(element => console.log(element.toString()))

    // picks the winner
    let winner = this.contestants[0]
    let findWinner;

    for (let element of this.players) { if (element.getName() === winner.getName()) { findWinner = element } }
    // give them their price 


    // go through every players, and go though his bets, find out whether is a winner bet, and if it a winner bet,
    // then give double amount of bet to that player and write out.

    // make method for the private field to show the player account

    // tell the world who won what 
  }
}





