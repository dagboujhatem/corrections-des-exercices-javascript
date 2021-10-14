//var impots = 0.18, assurance=0.07, pensions=0.05, bonus=100 , allocation=150;
//var f=2;

var b_submit= document.getElementById("b_submit");
b_submit.addEventListener('click',valider);

function valider(){
var nom= document.getElementById("nom");
var nom_value=nom.value;
console.log(nom_value);

var prenom= document.getElementById("prenom");
var prenom_value = prenom.value;
console.log(prenom_value);

var sexe= document.getElementById("sexe");
var sexe_value = prenom.value;
console.log(sexe_value);

var sexe= document.getElementById("sexe");
var sexe_value = sexe.value;
console.log(sexe_value);

var salaire_base= document.getElementById("salaire_base");
var salaire_base_value = salaire_base.value;
console.log(salaire_base_value);

var nb= document.getElementById("nb");
var nb_value = nb.value;
console.log(nb_value);

var bonus= document.getElementById("bonus");
var bonus_value = bonus.value;
console.log(bonus_value);
console.log(typeof(bonus_value));

var allocation= document.getElementById("allocation");
var allocation_value = allocation.value;
console.log(allocation_value);

var reduction_impots=0;
if(sexe_value=='F') {reduction_impots=reduction_impots+0.02; console.log(reduction_impots);}
if(nb_value=='3') {reduction_impots=reduction_impots+0.01; console.log(reduction_impots);}
else if (nb_value=='4') {reduction_impots=reduction_impots+0.02; console.log(reduction_impots);}

var impots = reduction_impots+0.18;console.log(impots);
var frais=impots+0.07+0.05;console.log(frais);
var salaire= salaire_base_value- (salaire_base_value*frais);console.log(salaire);

if (bonus_value=='true'){salaire = salaire+100; console.log('bonus'+salaire);}
if (allocation_value=="true"){salaire = salaire+150;console.log('allocation:'+salaire);}
alert('Salaire: '+salaire);
}
