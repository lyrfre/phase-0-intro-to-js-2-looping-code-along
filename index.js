// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

//const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
    
//     return gifts;
// }

//wrapGifts(gifts);
//const cardText = []
//const names = []

function writeCards(names, event) {
    const cardText = [];
    //let names = []
    for (let i = 0; i < names.length; i++) {
        cardText.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    return cardText;
}

writeCards(['Charlie', 'Samip', 'Ali'], "birthday")

function wrapGifts(gifts) {
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    
    return gifts
}

//wrapGifts(gifts);

let i 

function countDown(num){
    i = num;
    while (i >= 0) {
        console.log(i);
        i--;
    }

    return num;
}

//countDown(10);