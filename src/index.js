const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let fullArr = expr.match(/.{10}/g);

    let spaces = fullArr.map(item => item.replace(/[*]{10}/g, " "));

    let zeros = spaces.map(item => item.replace(/[0&0]{2}/g, ""));

    let dashes = zeros.map(item => item.replace(/[1&1]{2}/g, "-"));

    let dots = dashes.map(item => item.replace(/[1&0]{2}/g, "."));

    //я пытался сделать красиво но не смог(((((( 

    for (let i = 0; i < dots.length; i++) {
        if (dots[i] !== ' ') {
            dots[i] = MORSE_TABLE[dots[i]];
        }
    }

    // я пытался сделать красиво но не смог(((((( 

    let result = dots.join('');

    return result;



    // let lastArr = dots.map(item => {
    //         if (MORSE_TABLE[item] !== undefined) {
    //             item = MORSE_TABLE[item]
    //         } else {
    //             return item;
    //         }
    //     }

    // );

    // let lastArr = dots.map(item => item.replace(item, function() {
    // 	if(MORSE_TABLE.hasOwnProperty(item)){
    // 		for(item in MORSE_TABLE){
    // 			item.replace(MORSE_TABLE[item]);
    // 		}
    // 	}
    // }));

    // for (let j = 0; j < MORSE_TABLE.length; j++) {
    //     for (let i = 0; i < MORSE_TABLE[j].length; i++) {
    //         if (MORSE_TABLE[i] == '.') {
    //             MORSE_TABLE[i].replace('10')
    //         }
    //         if (MORSE_TABLE[i] == '-') {
    //             MORSE_TABLE[i].replace('11')
    //         }
    //     }
    // }




    // write your solution here
}

module.exports = {
    decode
}