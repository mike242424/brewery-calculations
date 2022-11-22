var convertSpecificGravityToPlato = function(specificGravityNumber) {
  platoNumber = (-1 * 616.868) + (1111.14 * specificGravityNumber) - (630.272 * (specificGravityNumber * specificGravityNumber)) + (135.997 * (specificGravityNumber * specificGravityNumber * specificGravityNumber));
  return platoNumber;
};

var convertPlatoToSpecificGravity = function(platoNumber) {
  var specificGravityNumber = 1 + (platoNumber / (258.6 - ((platoNumber/258.2) * 227.1)));
  return specificGravityNumber;
};

var calcSpecificGravityToPlato = document.querySelector('#button-gravity-to-plato');
calcSpecificGravityToPlato.addEventListener('click', function(e) {
  var input = document.querySelector('#input-gravity-to-plato');
  input.value = convertSpecificGravityToPlato(input.value);
})

var calcPlatoToSpecificGravity = document.querySelector('#button-plato-to-gravity');
calcPlatoToSpecificGravity.addEventListener('click', function(e) {
  var input = document.querySelector('#input-plato-to-gravity');
  input.value = convertPlatoToSpecificGravity(input.value);
})