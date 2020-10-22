module.exports = function check(expression, config) {
    let pairsArray = config.map(subarray => subarray[0] + subarray[1]);

    for (let j = 0; j < pairsArray.length * 2; j++) {
        for (let i = 0; i < pairsArray.length; i++) {
            while (expression.includes(pairsArray[i])) {
                expression = expression.replace(pairsArray[i], "");
            }
        }
    }

    return expression.length == 0;
}