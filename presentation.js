
//I didn't feel like writing out the deck.

var v = '2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace';
var s = ' of diamonds, of clubs, of hearts, of spades';
var values = v.split(',');
var suits =s.split(',');

deckMaker = function(val, suit){
  var deck = [];
  for (var i = 0; i < suit.length; i += 1){
    for (var j= 0; j < values.length; j += 1){
      deck.push(val[j] + suit[i])
    }
  }
  return deck;
}

var builtDeck = deckMaker(values, suits);

//The key here is that we are not reshuffling numbers
//The last array element is swapped with a random array index

function fisherYatesShuffleArray(array) {
  copy = array.slice(0)

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
console.log(fisherYatesShuffleArray(builtDeck))
console.log(builtDeck)

