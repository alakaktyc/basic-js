module.exports = function transform(arr) {

    const simple = arr.every(function(elem){
        return elem % 1 === 0;
    });

    if (simple){
        return arr;
    }

    arr.forEach(function(item, i, arr) {
        if (item === '--discard-next' && i === arr.length - 1){
            arr.splice(i,1);
            return arr;
        }else  if (item === '--discard-next'){
            arr.splice(i,2);
            return arr;
        }

        if (item === '--discard-prev' && i === 0){
            arr.splice(i,1);
            return arr;
        } else if (item === '--discard-prev') {
            arr.splice(i - 1, 2);
            return arr;
        }

        if (item === '--double-next' && i === arr.length - 1){
            arr.splice(i, 1);
            return arr;
        } else if (item === '--double-next'){
            arr.splice(i, 1, i + 1);
            return arr;
        }
        if (item === '--double-prev' && i === 0) {
            arr.splice(i, 1);
            return arr;
        } else if (item === '--double-prev'){
            arr.splice(i-1, 2, i, i );
            return arr;
        }
    });
};
