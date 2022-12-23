module.exports = function toReadable(number) {
    let digit1 = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let digit2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let digit3 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let res = "";

    let start = number.toString().slice(0, 1);
    let center = number.toString().slice(1, 3);
    let end = number.toString().slice(2, 4);

    if (number === 0) {
        res += "zero";
    } else if (number < 10) {
        res += digit1[number - 1];
    } else if (number < 20) {
        res += digit2[number - 10];
    } else if (number < 100) {
        res += `${digit3[+start - 2]} ${
            +center !== 0 ? digit1[+center - 1] : ""
        }`;
    } else if (number < 1000 && +center == 0) {
        res += `${digit1[+start - 1]} hundred`;
    } else if (number < 1000 && +center < 10) {
        res += `${digit1[+start - 1]} hundred ${digit1[+end - 1]}`;
    } else if (number < 1000 && +center < 20) {
        res += `${digit1[+start - 1]} hundred ${digit2[+center - 10]}`;
    } else if (number < 1000 && +end === 0) {
        res += `${digit1[+start - 1]} hundred ${
            digit3[+center.slice(0, 1) - 2]
        }`;
    } else if (number < 1000 && +end !== 0) {
        res += `${digit1[+start - 1]} hundred ${
            digit3[+center.slice(0, 1) - 2]
        } ${digit1[+end - 1]}`;
    }

    return res.trim();
};
