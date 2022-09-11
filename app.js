const team = {
  _players: 
  [{firstName: 'Pete', lastName: 'Wheeler', age: 56},   {firstName: 'Koo', lastName: 'Nimo', age: 65}, {firstName: 'Hogan', lastName: 'Humpty', age: 66}
  ],
  _games: 
  [{opponent: 'KojoFC', teamPoints: 66, opponentPoints: 56}, {opponent: 'KooFC', teamPoints: 55, opponentPoints: 65},{opponent: 'KwekuFC', teamPoints: 66, opponentPoints: 56}
  ], 
  get players(){
    return this._players;
  }, 
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player);
  },
  addGame (newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game);
  }
};
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Titans', 100, 98);
console.log(team.games);
