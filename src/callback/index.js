//callback

const sum = (num1, num2) => {
    return num2 + num1;
}

const rest = (num1, num2) => {
    return num2 - num1;
}

const calc = (num1, num2, callback) => {
    return callback(num1, num2);
}

console.log(`suma: `, calc(2,2,sum));
console.log(`resta: `, calc(3,2,rest));

const date = (callback) => {
    // console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

const printDate = (dateNow) => {
    console.log(`callback: `, dateNow);
}

date(printDate);
