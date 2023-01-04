// Exemple: node main.js

let array = [0x11,0xb0,0x12,0x0a,0x09,0x0a,0x0a,0x01,0x08,0x01,0x01,0x02,0x02,0x0a,0x0a,0x02,0x0a,0x01]

function calcXor(array) {
    let res = 0
    for (let index = 0; index < array.length; index++) {
        res = res ^ array[index];
    }
    return res
}

const res = calcXor(array)
console.log ("RESS: "+res)
let aux = "0x"+res
const check = res ^ 0xff

console.log("Resultado hexadecimal: " + res.toString(16),"Resultado checksum: " + check)