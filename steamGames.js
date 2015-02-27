 // Daniel Davis , steamGames, mountains like code but instead using list of owned games on steam

var games = [ // creates dataset of games with titles, hours played, and owner of that game
  {title = 'Total War: SHOGUN 2', hoursPlayed = 38, owner = 'SexyZombie'}, 
  {title = 'From Dust', hoursPlayed = 25, owner = 'SexyZombie'}, 
  {title = 'Fire Fall', hoursPlayed = 19.8, owner = 'SexyZombie'}, 
  {title = 'The Forest', hoursPlayed = 6.2, owner = 'SexyZombie'}, 
  {title = 'Gode Mode', hoursPlayed = 4, owner = 'SexyZombie'}, 
  {title = 'Crisis', hoursPlayed = 2.7, owner = 'SexyZombie'},
  {title = 'Crisis 2 Maximum Edition', hoursPlayed = 1, owner = 'SexyZombie'},
  {title = 'Garrys Mod', hoursPlayed = .3, owner = 'SexyZombie'}, 
  {title = 'Crisis Wars', hoursPlayed = 0,owner = 'SexyZombie'}
] // end of genres

if (typeof module != "undefined" && module.exports) // allows exporting of the code 
  module.exports = steamGames; // end of export
