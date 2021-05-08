const container = document.querySelector('#container');
const redp = document.createElement('p');
const heading3 = document.createElement('h3')
const body = document.querySelector('body')
const div2 = document.createElement('div')
const heading4  = document.createElement('h3')
const p = document.createElement('p');
const buttons =  document.querySelectorAll('button')

redp.style.color = 'red'
redp.textContent = 'Hey I’m red!';

heading3.style.color = 'blue';
heading3.textContent = 'I’m a blue h3!'

div2.style.cssText = 'border :solid 5px black; background-color: pink'


heading4.textContent  = `I'm in div`;
p.textContent = 'Me Too!'

container.appendChild(redp);
body.appendChild(heading3);
body.appendChild(div2);
div2.appendChild(heading4);
div2.appendChild(p);

buttons.forEach((button) =>{
    button.addEventListener('click', function(e){
        e.target.style.background = 'blue'
    })
})