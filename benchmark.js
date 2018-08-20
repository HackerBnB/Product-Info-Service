const siege = require('siege');

let stress = siege().on(3003).concurrent(15);

const randomRoomId = function (min, max) {
  return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
}

for (let i=1; i < 100000; i++) {
  const roomId = randomRoomId(1, 10000000);
  stress = stress.for(1).times.get(`/api/rooms/${roomId}/roomInfo`)
}

stress.attack();