const assert = require('chai').assert;
const map = require('../map');

const words = [
  "ground",
  "control",
  "to",
  "major",
  "tom",
  "arschgeige",
  "feigling",
  "schamhaar",
  "abartig"
];

describe('#map', () => {
  it("returns a new array containing the first letter of each word in the variable words", () => {
    const expectedOutput = ["g", "c", "t", "m", "t", "a", "f", "s", "a"];

    assert.deepEqual(map(words, word => word[0]), expectedOutput);
  });

  it("returns a new array with the word 'yippee' appended to each word in words", () => {
    const expectedOutput = [
      "ground yippee",
      "control yippee",
      "to yippee",
      "major yippee",
      "tom yippee",
      "arschgeige yippee",
      "feigling yippee",
      "schamhaar yippee",
      "abartig yippee"
    ];

    assert.deepEqual(map(words, word => word + ' yippee'), expectedOutput);
  });

  it("returns a new array containing all the words starting at the second letter", () => {
    const expectedOutput = [
      "round",
      "ontrol",
      "o",
      "ajor",
      "om",
      "rschgeige",
      "eigling",
      "chamhaar",
      "bartig"
    ];

    assert.deepEqual(map(words, word => word.slice(1)), expectedOutput);
  });

  it("returns a new array containing the length of each word in words", () => {
    const expectedOutput = [6, 7, 2, 5, 3, 10, 8, 9, 7];

    assert.deepEqual(map(words, word => word.length), expectedOutput);
  });
});
