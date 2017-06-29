// Fundamental principle of software engineering
// 1.  Make it general (being able to deal with other scenarios) vs making no changes
// 2.  na


'use strict';

var tweeps = ["@waxy", "@fzero", "@mozilla"]
tweeps.push("wired");

// function display(array) {
//   console.log(array);
// }

// display(tweeps);


function iterateArray (array, whateverWeDo) {  // WhateverWeDo is a callback
  for (var i = 0; i < array.length; i++) {
    whateverWeDo(array[i],i);
  }
} // high order function


// In order to expand the function display, console.log() is not enough. Preparing for the future.


// var displayStrategies = {
//   consoleDisplay : function(array) {
//     console.log(array);
//   },
//   verticalDisplay : function(array) {
//     // for (i = 0; i < array.length; i++) {
//     iterarateArray(array, function (item) {
//       console.log("- ",item)
//     }
//   },
//   numberedDisplay : function(array) {
//     for (i = 0; i < array.length; i++) {
//       console.log((i+1) + ". " + array[i])
//     }
//   },
//   testVertical: function(array) {
//     iterarateArray(array, function (item) {
//       console.log("- ", item)
//     })};
//   }
// }

//  Refactoring => common thing


var displayStrategies = {
  consoleDisplay : function(item) {
    console.log(item)
  },
  consoleDisplay2 : function(item) {
    console.log("Nothing")
  },
  verticalDisplay : function(item) {
    // for (i = 0; i < array.length; i++) {
    // iterarateArray(array, function (item) {
      console.log("- ",item)
    },
  orderedDisplay: function (item, num) {
    console.log((num+1) + ".)" +item)
  },
  numberedDisplay : function(item) {
    // for (i = 0; i < array.length; i++) {
      console.log(("#" + item))
    }
  }
  // testVertical: function(array) {
  //   iterarateArray(array, function (item) {
  //     console.log("- ", item)
  //   })};


module.exports = displayStrategies; //library

// In another file, you can call the library itself in the folder


iterateArray(tweeps, function(item) {console.log(item)})
iterateArray(tweeps, displayStrategies.consoleDisplay)
iterateArray(tweeps, displayStrategies.verticalDisplay)
iterateArray(tweeps, displayStrategies.numberedDisplay)
iterateArray(tweeps, displayStrategies.orderedDisplay)

iterateArray(tweeps, displayStrategies.consoleDisplay2)


// displayStrategies.consoleDisplay(tweeps);

// displayStrategies.verticalDisplay(tweeps);

// displayStrategies.numberedDisplay(tweeps)

// displayStrategies.testVertical(tweeps)

// Q. How do we manage a larger number of parameters in the callback function? (some of them used/not used)
// A. If you know a function will take a dynamic set of parameters, we pack object

// These codes are open for expansion by expanding strategies(library) ,
// but I won't have change the iterateArray () but closed
