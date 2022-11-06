function mostrarSenha() {
  var temp = document.getElementById("inputSenha");
  if (temp.type === "password") {
    temp.type = "text";
  } else {
    temp.type = "password";
  }
}
