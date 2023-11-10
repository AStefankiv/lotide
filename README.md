# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stefankiv/lotide`

**Require it:**

`const _ = require('@stefankiv/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head - this function returns the first element of the array
* tail - this function returns the last element of the array
* middle - this function returns the middle element of the array
* assertArraysEqual - this function compares two arrays and returns true or false based on a perfect match
* assertEqual - this function compares two primitives and returns true or false based on a perfect match
* assertObjectsEqual - this function compares two objects and returns true or false based on a perfect match
* countLetters - this function returns an object with a count of each letter in a string
* countOnly - this function returns an object with a count of each specified item in an array
* eqArrays - this function compares two arrays and returns true or false based on a perfect match
* eqObjects - this function compares two objects and returns true or false based on a perfect match
* findKey - this function returns the key of an object based on a callback function
* findKeyByValue - this function returns the key of an object based on a value
* flatten - this function returns a flattened array
* letterPositions - this function returns an object with the index of each letter in a string
* takeUntil - this function returns a slice of an array until a specified value
* without - this function returns an array without specified values