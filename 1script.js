//triangele star
var number = prompt("give number to make triangele ");
var star = "";
for (var i = 1; i <= number; i++) {
  for (var j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
alert(star);