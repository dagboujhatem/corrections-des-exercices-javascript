// var msg= function(x){
  //alert('Vous avez réussi votre excercice !' +
//'\nVous avez entré: ' +x);
///};

//var y= prompt('Entrer un texte');
//msg(y);



//alert('hello');
var b_submit= document.getElementById("b_submit");
//console.log(b_submit);
b_submit.addEventListener('click',valider);

var form = document.getElementsByTagName('form');
//console.log(form);

var myform = form[0];
//console.log(myform);

function valider(){
  var text= document.getElementById("text");
  var text_value = text.value;
  //console.log(text_value);
  if (text_value=="") {alert('Erreur !');}
  else {
    alert('Vous avez réussi votre excercice !');
    myform.submit();
  }
}
