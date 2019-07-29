const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("returns {Jason: 1, Fang: 2} for input names and search criteria", () => {
    const inputFirstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const output = {Jason: 1, Fang: 2};

    const lookingFor = {
      Jason: true,
      Karima: true,
      Fang: true
    };

    assert.deepEqual(countOnly(inputFirstNames, lookingFor), output);
  });

  it ("returns {cat: 3, rabbit: 2} for the input list and search criteria", () => {
    const inputList = [
      "cat",
      "dog",
      "horse",
      "cat",
      "mollusk",
      "rabbit",
      "squirrel",
      "rabbit",
      "cat"
    ];

    const lookingFor = {
      cat: true,
      rabbit: true,
      chinchilla: true
    };

    const output = {cat: 3, rabbit: 2};

    assert.deepEqual(countOnly(inputList, lookingFor), output);
  });
});

