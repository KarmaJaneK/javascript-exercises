const repeatString = function(string, repeats) {

if(repeats < 0 || !Number.isInteger(repeats)){
    return "ERROR";
}
    let result = "";
   
for (let i = 0; i < repeats; i++){
result += string;}
return result;
};

console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
