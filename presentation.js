//Creating the deck suits and values.
var v = '2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace';
var s = ' of diamonds, of clubs, of hearts, of spades';
var values = v.split(',');
var suits = s.split(',');

//Function to build deck.
deckMaker = function(val, suit) {
  var deck = [];
  for (var i = 0; i < suit.length; i += 1) {
    for (var j= 0; j < values.length; j += 1) {
      deck.push(val[j] + suit[i]);
    }
  }
  return deck;
}

//Create deck.
var builtDeck = deckMaker(values, suits);

//The key here is that we are not reshuffling numbers
//The last array element is swapped with a random array index
function fisherYatesShuffleArray(array) {

  //Make a copy of our deck so as to not modify original.
  copy = array.slice(0);

  //The shuffle.
  for (var i = copy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

//switch comments out to show shuffled vs ordered deck.

//console.log(builtDeck)
//console.log(fisherYatesShuffleArray(builtDeck))
//console.log(builtDeck)

