// function getCard(){
//     const num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
//     const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const pickNum = Math.floor(Math.random * 13) + 1;
//     const pickSuit = Math.floor(Math.random * 4) + 1;
//     const finalNum = num.indexOf[(pickNum)];
//     const finalSuit = suit.indexOf[(pickSuit)];
//     return `${finalNum} of ${finalSuit}`;
// }

function getCard(){
    const num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    const pickNum = Math.floor(Math.random() * num.length);
    const pickSuit = Math.floor(Math.random() * suit.length);
    return `${num[pickNum]} of ${suit[pickSuit]}`;
}

// function getCard(){
//     const num = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
//     const idx = Math.floor(Math.random() * num.length);
//     const suit = ['clubs', 'spades', 'hearts', 'diamonds']
//     const idy = Math.floor(Math.random() * suit.length);
//     return `${num[idx]} of ${suit[idy]}`;
// }

