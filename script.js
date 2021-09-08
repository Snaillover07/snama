var randomNumber;
var xSpawn;
var ySpawn;
const coordinatesHTML = document.getElementById('coordinates')
var coordinates;
var coordinates1st;

function randomNumberGenerator() {
    randomNumber = Math.random();
    randomNumber *= 100;
    randomNumber = Math.round(randomNumber);
}

function spawnPointGenerator() {
    randomNumberGenerator();
    xSpawn = randomNumber;
    randomNumberGenerator();
    ySpawn = randomNumber;
}

spawnPointGenerator();
console.log('playerspawn: ' + xSpawn + ', ' + ySpawn);
coordinates1st = xSpawn + ', ';
coordinates = coordinates1st + ySpawn;
coordinatesHTML.innerHTML = 'Coordinates: ' + coordinates;