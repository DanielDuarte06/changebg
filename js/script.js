
function Color() {
 
   if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = 'blue';
   }
   else {
    document.body.style.backgroundColor = 'black';
     console.log("mudou para black");
   }
}

window.onclick = () => {
  const submit = document.querySelector('#colorButton');
  submit.addEventListener('click', Color());
}