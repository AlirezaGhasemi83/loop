//student with average number
var student = prompt("number of student from 0 to 5");
while (student > 5) {
    var student = prompt("number of student from 0 to 5");
}
if (student < 5 ) {
    for (var i = 1; i <= student; i++) {
        var total = 0;
        for (var x = 1; x <= 3; x++) {
            total = Number(prompt("score" + x)) + total;

        }
        var average = total / 3;
        if (total < 10) {
            alert(total + " " + "you are rejected");
        } else {

            alert(total + " " + "you are pass")
        }
    }
}