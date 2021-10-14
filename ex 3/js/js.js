function valider() {
  console.log(document.form1.text.value);
  if(document.form1.text.value !== "") {
    alert('formulaire valide, vous avez saissez: '+document.form1.text.value);
  }
  else {
    alert("Erreur !");
  }
}
