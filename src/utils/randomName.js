const {
  uniqueNamesGenerator,
  adjectives,
  colors,
} = require('unique-names-generator');

const improvedAdjectives = [
  ...adjectives,
  'abrasive',
  'brash',
  'callous',
  'daft',
  'eccentric',
  'quilla',
  'worudo',
  'muda',
  'baka',
  'horny',
  'muddy',
];

const nouns = [
  'magician',
  'hermit',
  'star',
  'diamond',
  'rock',
  'big',
  'small',
  'smokey',
  'lightning',
  'war',
  'alabama',
  'child',
  'potato',
  'brocolli',
  'chungus',
  'pepe',
  'prince',
  'cup-holder',
  'pencil',
];

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const dictionaries = [colors, nouns];

const config = {
  dictionaries: [improvedAdjectives, ...shuffle(dictionaries)],
  length: 2,
  separator: ' ',
  style: 'capital',
};

const standName = () => uniqueNamesGenerator(config);

exports.standName = standName;
