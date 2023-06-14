
let passwordListComplete = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '_', '-', '+', '=', ',', ':', ';',
    '<', '>', '.', '?']

let passwordListNoSymb = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


let passOne = document.getElementById("pass1");
let passTwo = document.getElementById("pass2");

let checkbox = document.getElementById("check-symbol")


function generatePass() {

    passOne.textContent = ""
    passTwo.textContent = ""

    for (let i = 0; i < 12; i++) {
        if (checkbox.checked) {
            let randomPassOne = Math.floor(Math.random() * passwordListComplete.length)
            passOne.textContent += passwordListComplete[randomPassOne];
            let randomPassTwo = Math.floor(Math.random() * passwordListComplete.length)
            passTwo.textContent += passwordListComplete[randomPassTwo];
        } else {
            let randomPassOne = Math.floor(Math.random() * passwordListNoSymb.length)
            passOne.textContent += passwordListNoSymb[randomPassOne];
            let randomPassTwo = Math.floor(Math.random() * passwordListNoSymb.length)
            passTwo.textContent += passwordListNoSymb[randomPassTwo];
        }
    }
}

