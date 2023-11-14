var capitali = new Map();
capitali.set("Parigi", Math.round(Math.random() * 10));
capitali.set("Berlino", Math.round(Math.random() * 10));
capitali.set("Madrid", Math.round(Math.random() * 10));
capitali.set("Roma", Math.round(Math.random() * 10));

console.log(capitali);

function vote(map) {
  let votoInizio = -1;
  let votoPiu;
  map.forEach((voto, capitale) => {
    if (voto > votoInizio) {
      votoInizio = voto;
      votoPiu = capitale;
    }
  });
  return votoPiu;
}

console.log(vote(capitali));

function mediaVoti(map) {
  let totVoti = 0;
  let numeroCapitali = 0;
  map.forEach((item) => {
    totVoti += item;
    numeroCapitali++;
  });
  if (numeroCapitali === 0) {
    return 0;
  }
  var mediaVoti = totVoti / numeroCapitali;
  return mediaVoti;
}

console.log(mediaVoti(capitali));

var ricerca = {
  trovaNazione: function (capitale) {
    const capitaliNazioni = {
      Parigi: "Francia",
      Berlino: "Germania",
      Madrid: "Spagna",
      Roma: "Italia",
    };

    return capitaliNazioni[capitale] || "Nazione non trovata";
  },
};

const nazioni = Array.from(capitali.keys()).map((capitale) =>
  ricerca.trovaNazione(capitale)
);

console.log("Lista delle nazioni:", nazioni);
