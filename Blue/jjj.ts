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
  getContestant() {
    return this.contestant
  }
  getAmount() {
    return this.amount
  }
  getBetId() {
    return this.betId
  }
}

class Player {

  private name: string;
  private account: number;
  private bets: Bet[] = [];

  constructor(name: string, account: number) {
    this.name = name;
    this.account = account
  }

  makeBet(contestant: Contestant, amount: number) {
    if (this.account >= amount) {
      let newBet = new Bet(amount, this, contestant)
      this.account -= amount
      this.bets.push(newBet)
    }
  }
  getName() {
    return this.name
  }
  getBets(): Bet[] {
    return this.bets
  }
}

class Race {
  private players: Player[] = [];
  private contestants: Contestant[] = [];

  constructor(players: Player[], contestants: Contestant[]) {
    this.players = players
    this.contestants = contestants
  }

  startRace() {
    // we need to give placement for every contenstant
    let newList = []
    while(this.contestants.length > 0){
      let choice = Math.floor(Math.random()* this.contestants.length)
      newList.push(this.contestants[choice])
      this.contestants[choice].setPlacement(newList.length)
      this.contestants.splice(choice, 1)
    }
    this.contestants = newList

    this.contestants.forEach(element => console.log(element.toString()))

    // picks the winner
    let winnerContestant = this.contestants[0]

    for (let player of this.players) {

      let playBets: Bet[] = player.getBets()
      for (let bet of playBets) {
        if (winnerContestant === bet.getContestant()) {
          let amountWon = bet.getAmount() * 2
          let nameOfWinner = player.getName()
          let betId = bet.getBetId()

          console.log(`${nameOfWinner} has won ${amountWon}$ with the bet: ${betId}`);

        }
      }
    }
  }
}

let quick = new Contestant('quick')
let slowly = new Contestant('slowly')
let middel = new Contestant('middel')

let joe = new Player('joe', 1000)
let jack = new Player('jack', 800)
let james = new Player('james', 750)

joe.makeBet(quick, 200)
joe.makeBet(middel, 150)

jack.makeBet(slowly, 200)
jack.makeBet(middel, 150)

james.makeBet(quick, 250)

let springRace = new Race([joe, jack, james], [quick, slowly, middel])

springRace.startRace()