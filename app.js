// first idea

// function getCard(){
//     const num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
//     const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const pickNum = Math.floor(Math.random * 13) + 1;
//     const pickSuit = Math.floor(Math.random * 4) + 1;
//     const finalNum = num.indexOf[(pickNum)];
//     const finalSuit = suit.indexOf[(pickSuit)];
//     return `${finalNum} of ${finalSuit}`;
// }




// gives String, attempt using first idea and ideas from vid

// function getCard(){
//     const num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
//     const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const pickNum = Math.floor(Math.random() * num.length);
//     const pickSuit = Math.floor(Math.random() * suit.length);
//     return `${num[pickNum]} of ${suit[pickSuit]}`;
// }



// video solution with modified names

// function getCard(){
//     const num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
//     const idx = Math.floor(Math.random() * num.length);
//     const suit = ['clubs', 'spades', 'hearts', 'diamonds']
//     const idy = Math.floor(Math.random() * suit.length);
//     return `${num[idx]} of ${suit[idy]}`;
// }



// return object

// function getCard(){
//     const num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
//     const idx = Math.floor(Math.random() * num.length);
//     const finalNum = num[idx];
//     const suit = ['clubs', 'spades', 'hearts', 'diamonds']
//     const idy = Math.floor(Math.random() * suit.length);
//     const finalSuit = suit[idy];
//     return {value: finalNum, suit: finalSuit}
// }




// reusable function

function pick(arr){
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}

function getCard(){
    const nums = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    const suits = ['clubs', 'spades', 'hearts', 'diamonds']
    return {number: pick(nums), suit: pick(suits)}
}