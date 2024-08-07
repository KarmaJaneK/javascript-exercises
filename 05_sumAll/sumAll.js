const sumAll = function(firstInt,lastInt) {
    var sum = 0;
    if (firstInt < 0 || lastInt < 0){
        return 'ERROR'
    } else if 
    (!Number.isInteger(firstInt) || !Number.isInteger(lastInt)){
            return 'ERROR'
    } else if (Number.isNaN(firstInt) || Number.isNaN(lastInt)){ 
        return 'Error'
    } else if (firstInt < lastInt){
        for (let i = firstInt; i <= lastInt; i++){
            sum = sum + i;
        }
    } else if (lastInt < firstInt){
        for (let i = lastInt; i <= firstInt; i++){
            sum = sum + i;
        }
    }
return sum;
};
console.log(sumAll(1,5));

// Do not edit below this line
module.exports = sumAll;
