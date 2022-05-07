var usuario = parseFloat(prompt("Escolha sua jogada!!\n(1)= Pedra.\n(2)= Papel.\n(3)= Tesoura."));
var computador = Math.random();

if (computador <= 0.33) {
  computador = 1;
} else if (0.33 < computador <= 0.66){
  computador = 2;
}
else{
  computador = 3;
}

if(usuario === 1){
  if (computador === 2) {
    alert("Você jogou pedra e o computador jogou Papel.\nVocê Perdeu!")
  }else if (computador === 3) {
    alert("Você jogou pedra e o computador jogou Tesoura.\nVocê Venceu!")
  }
  else {
    alert("Você jogou pedra e o computador jogou pedra.\nFoi Empate!")
  }
} else if (usuario === 2){
  if (computador === 1) {
    alert("Você jogou Papel e o computador jogou Pedra.\nVocê Venceu.")
  }else if (computador === 3) {
    alert("Você jogou Papel e o computador jogou Tesoura.\nVocê Perdeu!")
  }
  else {
    alert("Você jogou Papel e o computador jogou Papel.\nFoi Empate.")
  }
}
else{
  if (computador === 1) {
    alert("Você jogou Tesoura e o computador jogou Pedra.\nVocê Perdeu!")
  }else if (computador === 2) {
    alert("Você jogou Tesoura e o computador jogou Papel.\nVocê Venceu!")
  }
  else {
    alert("Você jogou Tesoura e o computador jogou Tesoura.\nEmpate! Foi Empate.")
  }
}
