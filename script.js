let totalAllumettes = 50;
let joueurCourant = 1;
let nombreJoueurs = Number(prompt("Combien de joueurs êtes vous ?"));

const retireAllumettes = (oterQuantite) => {
  totalAllumettes = totalAllumettes - oterQuantite;
};

const choixValide = (nombre) => {
  return nombre >= 1 && nombre <= 6;
};

const changerJoueur = () => {
  if (joueurCourant === nombreJoueurs) {
    joueurCourant = 1 ;
  } else {
    joueurCourant++;
  }
};

const jouer = () => {
  while (totalAllumettes >= 1) {
    const combienAllumettes = Number(
      prompt(`Joueur ${joueurCourant}, combien d'allumettes veux-tu retirer ?`),
    );
    if (choixValide(combienAllumettes)) {
      retireAllumettes(combienAllumettes);
      if(totalAllumettes>=1){
      changerJoueur();
      }
      
    }
    else  {
      alert(`Attention,tu dois choisir entre 1 et 6 allumettes à la fois!`);

    } 
  }

  alert(`Victoire ! Joeur ${joueurCourant} ,tu as gagné !`);


}

jouer();
