"use strict";

if (5) {
    console.log('Ok');
} else {
    console.log('error');
}


// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('Слишком много');
// } else {
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');

const num = 100;

switch(num) {
    case 49:
        console.log('no');
        break;
    case 100:
            console.log('no');
            break;
    case 50:
        console.log('yes');
        break;
    default:
        console.log('nono');
}