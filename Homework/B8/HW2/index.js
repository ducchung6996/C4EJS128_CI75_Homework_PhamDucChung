const number = parseInt(prompt("Enter a positive number:"));
let isPrime = true;

if (number === 1) {
    alert(`${number} is neither prime nor composite number.`);
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(`${number} is a prime number`);
    } else {
        alert(`${number} is a composite number`);
    }
}
else {
    alert(`${number} is not a prime number.`);
}