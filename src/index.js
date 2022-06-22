module.exports = function reverse(n) {
    // let absNum = Math.abs(n)
    // const str = absNum.toString();
    // let newNum = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newNum += str[i];
    // }
    // return Number(newNum);
    // let absNum = Math.abs(n)
    // return Number(absNum.toString().split('').reverse().join(''))
    let str = n.toString();
    let newStr = '';
    if (str[0] === '-') {
        for (let i = 1; i <= str.length - 1; i++) {
            newStr = str[i] + newStr;
        }
    } else {
        for (let i = 0; i <= str.length - 1; i++) {
            newStr = str[i] + newStr;
        }
    }
    return Number(newStr);
};


