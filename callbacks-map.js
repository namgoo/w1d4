var words = ["ground", "control", "to", "major", "tom"];


function map (array,whatWeDo) {
  var countedList = []
  for (var i = 0; i < array.length; i++) {
    countedList.push(whatWeDo(array[i]))
  }
  console.log(countedList)
}


map(words, function(word) {
  return word.length;
});

console.log(words.map(function (x) {
  return x.length
}))





// function map(array, function(word)) {
//   var wlength = []
//   for (var i = 0, i < array.length) {

//   }
//   return word.length;
// };

// function letterCount(word) {
//   var count = 0;
//   count = word.length
//   return count
// }

