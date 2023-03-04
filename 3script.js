//pyramid
var number = prompt("give number to make pyramid");
var star = "";

for (var i = 1; i <= number; i++) {

    for (var j = 0; j < number - i; j++) {
        star += " ";
    }
    for (var k = 0; k < i; k++) {
        star += "*";
    }
    star += "\n";
}
alert(star);