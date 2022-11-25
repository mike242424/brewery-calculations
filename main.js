// Function to convert Specific Gravity to Plato
var convertSpecificGravityToPlato = function(specificGravityNumber) {
  platoNumber = (-1 * 616.868) + (1111.14 * specificGravityNumber) - (630.272 * (specificGravityNumber * specificGravityNumber)) + (135.997 * (specificGravityNumber * specificGravityNumber * specificGravityNumber));
  return platoNumber.toFixed(1);
};

var calcSpecificGravityToPlato = document.querySelector('#button-gravity-to-plato');
calcSpecificGravityToPlato.addEventListener('click', function(e) {
  var input = document.querySelector('#input-gravity-to-plato');
  input.value = convertSpecificGravityToPlato(input.value);
});

// Function to convert Plato to Specific Gravity
var convertPlatoToSpecificGravity = function(platoNumber) {
  var specificGravityNumber = 1 + (platoNumber / (258.6 - ((platoNumber/258.2) * 227.1)));
  return specificGravityNumber.toFixed(3);
};

var calcPlatoToSpecificGravity = document.querySelector('#button-plato-to-gravity');
calcPlatoToSpecificGravity.addEventListener('click', function(e) {
  var input = document.querySelector('#input-plato-to-gravity');
  input.value = convertPlatoToSpecificGravity(input.value);
});

// Function to convert sixteen ounce bottle cases to beer barrels
var convertSixteenOunceCasesToBeerBarrels = function(sixteenOunceCases){
  var beerBarrels = sixteenOunceCases * 0.09677;
  return beerBarrels.toFixed(2);
};

var calcSixteenOunceCasesToBeerBarrels = document.querySelector('#button-sixteen-cases-to-beer-barrels');
calcSixteenOunceCasesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-sixteen-cases-to-beer-barrels');
  input.value = convertSixteenOunceCasesToBeerBarrels(input.value);
});

// Function to convert twelve ounce bottle cases to beer barrels
var convertTwelveOunceCasesToBeerBarrels = function(twelveOunceCases){
  var beerBarrels = twelveOunceCases * 0.07258;
  return beerBarrels.toFixed(2);
};

var calcTwelveOunceCasesToBeerBarrels = document.querySelector('#button-twelve-cases-to-beer-barrels');
calcTwelveOunceCasesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-twelve-cases-to-beer-barrels');
  input.value = convertTwelveOunceCasesToBeerBarrels(input.value);
});

// Function to convert sixth barrel kegs to beer barrels
var convertSixthBarrelKegsToBeerBarrels = function(sixthBarrelKegs){
  var beerBarrels = sixthBarrelKegs * 0.1667742;
  return beerBarrels.toFixed(2);
};

var calcSixthBarrelKegsToBeerBarrels = document.querySelector('#button-sixth-barrel-kegs-to-beer-barrels');
calcSixthBarrelKegsToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-sixth-barrel-kegs-to-beer-barrels');
  input.value = convertSixthBarrelKegsToBeerBarrels(input.value);
});

// Function to convert half barrel kegs to beer barrels
var convertHalfBarrelKegsToBeerBarrels = function(halfBarrelKegs){
  var beerBarrels = halfBarrelKegs * 0.5;
  return beerBarrels.toFixed(2);
};

var calcHalfBarrelKegsToBeerBarrels = document.querySelector('#button-half-barrel-kegs-to-beer-barrels');
calcHalfBarrelKegsToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-half-barrel-kegs-to-beer-barrels');
  input.value = convertHalfBarrelKegsToBeerBarrels(input.value);
});

// Function to convert 20L key kegs to beer barrels
var convertTwentyLiterLKeyKegsToBeerBarrels = function(twentyLiterKeyKegs){
  var beerBarrels = twentyLiterKeyKegs * 0.171;
  return beerBarrels.toFixed(2);
};

var calcTwentyLiterKeyKegsToBeerBarrels = document.querySelector('#button-twenty-liter-key-kegs-to-beer-barrels');
calcTwentyLiterKeyKegsToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-twenty-liter-key-kegs-to-beer-barrels');
  input.value = convertTwentyLiterLKeyKegsToBeerBarrels(input.value);
});

// Function to convert 375mL bottles to beer barrels
var convert375mLBottlesToBeerBarrels = function(_375mLBottles){
  var beerBarrels = _375mLBottles * 0.038407;
  return beerBarrels.toFixed(2);
};

var calc375mLBottlesToBeerBarrels = document.querySelector('#button-375mL-bottles-to-beer-barrels');
calc375mLBottlesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-375mL-bottles-to-beer-barrels');
  input.value = convert375mLBottlesToBeerBarrels(input.value);
});

// Function to convert 500mL bottles to beer barrels
var convert500mLBottlesToBeerBarrels = function(_500mLBottles){
  var beerBarrels = _500mLBottles * 0.051109;
  return beerBarrels.toFixed(2);
};

var calc500mLBottlesToBeerBarrels = document.querySelector('#button-500mL-bottles-to-beer-barrels');
calc500mLBottlesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-500mL-bottles-to-beer-barrels');
  input.value = convert500mLBottlesToBeerBarrels(input.value);
});

// Function to convert 22oz bottles to beer barrels
var convert22ozBottlesToBeerBarrels = function(_22ozBottles){
  var beerBarrels = _22ozBottles * 0.06653;
  return beerBarrels.toFixed(2);
};

var calc22ozBottlesToBeerBarrels = document.querySelector('#button-22oz-bottles-to-beer-barrels');
calc22ozBottlesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-22oz-bottles-to-beer-barrels');
  input.value = convert22ozBottlesToBeerBarrels(input.value);
});

// Function to convert 750mL bottles to beer barrels
var convert750mLBottlesToBeerBarrels = function(_750mLBottles){
  var beerBarrels = _750mLBottles * 0.076814516;
  return beerBarrels.toFixed(2);
};

var calc750mLBottlesToBeerBarrels = document.querySelector('#button-750mL-bottles-to-beer-barrels');
calc750mLBottlesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-750mL-bottles-to-beer-barrels');
  input.value = convert750mLBottlesToBeerBarrels(input.value);
});