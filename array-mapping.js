var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj){
  var one = obj.x
  var two = obj.y
  var z = Math.pow((one*one + two*two),(1/2))
  return z
});


console.log(result[0]);
console.log(result[1]);
console.log(result[2]);


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);