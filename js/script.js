function Color() {

  var changeColor = document.querySelector('body');
  //console.log(changeColor);

  switch (changeColor.className) {
    case "body_red":
      changeColor.classList.remove("body_red");
      changeColor.classList.add("body_black");
      break;

    case "body_black":
      changeColor.classList.remove("body_black");
      changeColor.classList.add("body_blue");
      break;

    case "body_blue":
      changeColor.classList.remove("body_blue");
      changeColor.classList.add("body_red");
      break;

    default:
      console.log("Falhou !!");
  }
}

window.onclick = () => {
  const submit = document.querySelector('#colorButton');
  submit.addEventListener('click', Color());
}