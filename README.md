# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anniekao/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: given two arrays, prints out a string indicating if they are equal
* `assertEqual(...)`: compares two values and  prints out a string indicating if they are equal
* `assertObjectsEqual(...)`: given two objects, prints out a string indicating if they are equal
* `countLetters(...)`: given a string, returns an object containing a count of each letter in the string
* `countOnly(...)`: given an array and an object of keys and booleans as values, returns a count of those objects in the array with a value of true in the given object 
* `eqArrays(...)`: given two arrays, returns a boolean indicating if they are equal
* `eqObjects(...)`: given two objects, returns a boolean indicating if they are equal
* `findKey(...)`: given an object and a callback, returns the key where the callback evaluates to true
* `findKeyByValue(...)`: given an object and a value, returns the key in the object based on the value
* `flatten(...)`: takes a nested array and returns a new array without nested arrays
* `head(...)`: takes an array and returns the first element of the array
* `lettersPositions(...)`: takes a string and returns an object containing an array for each letter containing their index in the string
* `map(...)`: takes an array and a callback function and returns a new array based on the given callback
* `middle(...)`: takes an array and returns a new array containing the middle element, if the array contains an odd number of items. Otherwise it returns a new array containing the middle two elements (if the array contains an even number of item)