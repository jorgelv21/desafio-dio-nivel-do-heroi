let heroi = {
  nome: "Jorge",
  exp: 5000,
};

if (heroi.exp <= 1000) {
  var nivel = "Ferro";
} else if (heroi.exp > 1000 && heroi.exp <= 2000) {
  nivel = "Bronze";
} else if (heroi.exp > 2000 && heroi.exp <= 5000) {
  nivel = "Prata";
} else if (heroi.exp > 5000 && heroi.exp <= 7000) {
  nivel = "Ouro";
} else if (heroi.exp > 7000 && heroi.exp <= 8000) {
  nivel = "Platina";
} else if (heroi.exp > 8000 && heroi.exp <= 9000) {
  nivel = "Ascendente";
} else if (heroi.exp > 9000 && heroi.exp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

/* Há um erro no exercício onde no nível prata está entre 2001 e 5000 e no nível ouro entre 6001 e 7000 
então caso o Heroi tenha entre 5001 a 5999 de exp o nível retornaria undefined. alterei o nivel ouro entre 5001 a 7000 */

console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
