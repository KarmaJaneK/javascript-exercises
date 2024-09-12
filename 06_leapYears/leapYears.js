const leapYears = function(year) {
//divisible by 4
//not divisible by 100 unless..
//divisible by 400
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)){
    return true;
}else {
    return false;
}


};
console.log(leapYears)
// Do not edit below this line
module.exports = leapYears;
