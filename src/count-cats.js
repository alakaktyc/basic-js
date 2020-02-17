module.exports = function countCats(matrix) {
    let result = [].concat(...matrix);
    let sum = 0;
    for (let i = 0; i < result.length; i++){
        if (result[i] === "^^") {
            sum += 1
        }
    }
    return sum;
};
