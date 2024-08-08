const convertToCelsius = function(tempF) {
    var tempC = ((tempF -32) * 5/9);
    var tempCRounded = Math.round((tempC + Number.EPSILON)* 10) / 10;
    return tempCRounded;
   };

const convertToFahrenheit = function(tempC) {
  var tempF = ((tempC * 9/5) + 32);
  var tempFRounded = Math.round((tempF + Number.EPSILON)* 10) / 10;
  return tempFRounded;
};

console.log(convertToCelsius());
console.log(convertToFahrenheit());
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
