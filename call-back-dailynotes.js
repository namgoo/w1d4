// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//        found(i);
//       }   // execute callback
//     }
//   }


// function actionWhenFound(ind) {
//     console.log("Found him at index " + ind );
//   }




// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); // Passing the function as a parameter or an argument, therefore I don't need function() because I am not calling this function on its own.


console.log("ForEach")

function findWaldo(arr, found) {
  arr.forEach(found);
}


function actionWhenFound(element, index, array) {
    if (element === "Waldo") {
      console.log("Found him at index " + index );
    }
  }

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


var numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
var evens = numbers.filter(function(number) {
  return (number % 2 == 0);
});
console.log("Subset of even numbers:", evens);