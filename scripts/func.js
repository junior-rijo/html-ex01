var myImage = document.querySelector('img')

myImage.onclick = function() {
   var mySrc = myImage.getAttribute('src');//criou um atributo para manipular a img
   if(mySrc === 'imagens/01.jpg') {
       myImage.setAttribute('src','imagens/Luz_verm.jpg');
   } else{
       myImage.setAttribute('src','imagens/01.jpg');
   }
}
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName() {
    var myName = prompt('Por Favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Seja bem vindo padwam', + myName;
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
      }
}myButton.onclick = function() {
    setUserName();
  }