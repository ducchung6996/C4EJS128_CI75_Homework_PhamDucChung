alert("Muhney spending counter");



let lmao = () => {
    let totalMuhney = parseInt(prompt("Total muhney you have in this month ?"));
    let muhneyForHouse = parseInt(prompt("Muhney for rent your house ?"));
    let muhneyForFood = parseInt(prompt("Muhney for food ?"));
    let otherMuhney = parseInt(prompt("Muhney you need to spend for other thing ?"))

    let totalMuhneySpendCounter = (a, b, c) => {
        return a + b + c;
    }

    let muhneyLeft = (a, b, c, d) => {
        return a - (b + c + d)
    }

    let question = parseInt(prompt("What you want to count ?\n1. Total muhney you will spend\n2. Total muhney you have left"))
    switch (question) {
        case 1:
            alert(`Total muhney you will spend: ${totalMuhneySpendCounter(muhneyForHouse, muhneyForFood, otherMuhney)} vnd`)
            break;

        case 2:
            alert(`Total muhney you have left: ${muhneyLeft(totalMuhney,muhneyForHouse,muhneyForFood,otherMuhney)} vnd`)
            break;

        default:
            alert("Wrong choice")
            break;
    }
}

// while (true) {
//     lmao();
//     let repeat = parseInt(prompt("Do you wanna try again ?\n1. Yep\n2. Nah"));
//     if (repeat != 1) {
//         alert("Later bitch")
//         break;
//     }
// }

for (;;) {
    lmao();
    let repeat = parseInt(prompt("Do you wanna try again ?\n1. Yep\n2. Nah"));
    if (repeat != 1) {
        alert("Bye na");
        break;
    }
}



