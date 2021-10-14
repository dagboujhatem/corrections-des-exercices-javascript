function sum(array) {
  var i;
  var sum = 0;
  for(i = 0; i < array.length; ++i) {
    sum += array[i];
  }
  return sum;
}

var tab = [12, 15 , 43, 50 , 100];
tab.push(15);
tab.push(120); // insertion d'un element dans le tab
alert('La somme est :' +sum(tab));
