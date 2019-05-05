'use strict';

class Contestant {
  private name: string;
  private placement: number;

  constructor(name: string, placement: number = 0) {
    this.name = name;
    this.placement = placement
  }

  setPlacement(value) {
    this.placement += value
  }
  toString() {
    return `${this.name}, has finished on place: ${this.placement}`
  }
}
//-------------------------
class Bet {
  private betId: number;
  private amount: number;
  private player: string;
  private contestant: Contestant;

  constructor(amount: number, player: string, contestant: Contestant) {
    this.betId = Math.floor(Math.random() * 8999) + 1000;
    this.amount = amount;
    this.player = player;
    this.contestant = contestant;
  }
}
//----------------------
class player {
  private name: string;
  private account: number;
  private bets: Bet[];

  makeBet(contestant:Contestant,amoumt:number){
    
  }
}
//-----------------------
class Race {
  private contestant: Contestant[];
  private players: player[];

  constructor(contestant: Contestant[], players: player[]) {
    this.contestant = contestant;
    this.players = players
  }

}