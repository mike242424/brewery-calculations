// Function to convert Specific Gravity to Plato
var convertSpecificGravityToPlato = function(specificGravityNumber) {
  platoNumber = (-1 * 616.868) + (1111.14 * specificGravityNumber) - (630.272 * (specificGravityNumber * specificGravityNumber)) + (135.997 * (specificGravityNumber * specificGravityNumber * specificGravityNumber));
  return platoNumber;
};

var calcSpecificGravityToPlato = document.querySelector('#button-gravity-to-plato');
calcSpecificGravityToPlato.addEventListener('click', function(e) {
  var input = document.querySelector('#input-gravity-to-plato');
  input.value = convertSpecificGravityToPlato(input.value);
});

// Function to convert Plato to Specific Gravity
var convertPlatoToSpecificGravity = function(platoNumber) {
  var specificGravityNumber = 1 + (platoNumber / (258.6 - ((platoNumber/258.2) * 227.1)));
  return specificGravityNumber;
};

var calcPlatoToSpecificGravity = document.querySelector('#button-plato-to-gravity');
calcPlatoToSpecificGravity.addEventListener('click', function(e) {
  var input = document.querySelector('#input-plato-to-gravity');
  input.value = convertPlatoToSpecificGravity(input.value);
});

// Function to beer mbarrels to convert sixteen ounce cases
var convertSixteenOunceCasesToBeerBarrels = function(sixteenOunceCases){
  var beerBarrels = sixteenOunceCases * 0.09677;
  return beerBarrels;
};

var calcSixteenOunceCasesToBeerBarrels = document.querySelector('#button-beer-barrels-to-16oz-case');
calcSixteenOunceCasesToBeerBarrels.addEventListener('click', function() {
  var input = document.querySelector('#input-beer-barrels-to-16oz-case');
  input.value = convertSixteenOunceCasesToBeerBarrels(input.value);
});

// Function to convert beer barrels to twelve ounce cases
var convertTwelveOunceCasesToBeerBarrels = function(twelveOunceCases){
  var beerBarrels = twelveOunceCases * 0.07258;
  return beerBarrels;
};

var calcTwelveOunceCasesToBeerBarrels = document.querySelector('#button-beer-barrels-to-12oz-case');
calcTwelveOunceCasesToBeerBarrels.addEventListener('click', function() {
  var input = document.querySelector('#input-beer-barrels-to-12oz-case');
  input.value = convertTwelveOunceCasesToBeerBarrels(input.value);
});

// Function to convert beer barrels to sixth barrel kegs
var convertSixthBarrelKegsToBeerBarrels = function(sixthBarrelKegs){
  var beerBarrels = sixthBarrelKegs * 0.1667742;
  return beerBarrels;
};

var calcSixthBarrelKegsToBeerBarrels = document.querySelector('#button-beer-barrels-to-sixth-barrel-kegs');
calcSixthBarrelKegsToBeerBarrels.addEventListener('click', function() {
  var input = document.querySelector('#input-beer-barrels-to-sixth-barrel-kegs');
  input.value = convertSixthBarrelKegsToBeerBarrels(input.value);
});

// Function to convert beer barrels to half barrel kegs
var convertHalfBarrelKegsToBeerBarrels = function(halfBarrelKegs){
  var beerBarrels = halfBarrelKegs * 0.5;
  return beerBarrels;
};

var calcHalfBarrelKegsToBeerBarrels = document.querySelector('#button-beer-barrels-to-half-barrel-kegs');
calcHalfBarrelKegsToBeerBarrels.addEventListener('click', function() {
  var input = document.querySelector('#input-beer-barrels-to-half-barrel-kegs');
  input.value = convertHalfBarrelKegsToBeerBarrels(input.value);
});