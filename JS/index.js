const body = document.querySelector('body');
const buttonred = document.getElementById('button-red');
const buttonblack = document.getElementById('button-black')
const buttonblue = document.getElementById('button-blue')
const ahref = document.querySelector('a');



buttonred.addEventListener('click', function(event){
     event.preventDefault();
     body.style.backgroundColor = 'red';
     body.style.color = 'pink';
     
})

buttonblack.addEventListener('click', function(event){
     event.preventDefault();
     body.style.backgroundColor = 'black';
     body.style.color = 'white'
     ahref.style.backgroundColor = 'white'
     ahref.style.color = 'black'

})

buttonblue.addEventListener('click', function(event){
     event.preventDefault();
     body.style.backgroundColor = 'blue';
     body.style.color = 'pink';
})