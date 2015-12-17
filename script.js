import DECK from './deck.js';

(function launchApp() {
  $('#playerCar1').text(function() {
    return DECK[Math.floor(Math.random() * DECK.length)];
  });
})();


console.log(DECK);
