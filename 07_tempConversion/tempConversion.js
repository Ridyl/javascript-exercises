const convertToCelsius = function(far) {
  // C = (F - 32) / 1.8 -- fahrenheit to celsius conversion
  let cel = (far - 32) / 1.8;
  return Math.round(cel * 10)/10; //could use toFixed() but would have to convert back to float from string.
                                  

};

const convertToFahrenheit = function(cel) {
  // F = C * 1.8 + 32 -- celsius to fahrenheit conversion
  let far = cel * 1.8 + 32;
  return Math.round(far * 10)/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
