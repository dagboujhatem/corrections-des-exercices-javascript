var nb= Math.random()*1000;

var i=0;
do {
  var x= prompt ('Essayez de trouver le nombre aléatoire !');
  x = parseInt(x);
  if (x==nb) { alert ('Félicitations! Vous avez trouvez le nombre aléatoire en ' +i+ ' coups');}
  else if (x>nb) { alert ('Réessayer encore une fois! Le nombre que vous cherchez est plus petit '); i++; }
  else { alert ('Réessayer encore une fois! Le nombre que vous cherchez est plus grand '); i++; }
} while (x!==nb)
