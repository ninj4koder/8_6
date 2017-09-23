//Defining variables
var a = 0,
    b = 0,
value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

//Checking value
if (value > 0) {
    console.log('Wynik dodatni.');
} else if (value < 0) {
    console.log('Wynik ujemny.');
} else {
    console.log('Wynik równa się 0.');
}
