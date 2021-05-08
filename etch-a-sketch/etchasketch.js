const body = document.querySelector('#gridcontainer')
const grid = document.createElement('div')
const PIXELS = 16
const PIXELSIZE = (546 - (PIXELS+1)*2)/PIXELS

var mode = 'classic'

grid.style.cssText = `display:grid; grid-template-columns:repeat(${PIXELS},1fr);grid-template-rows:repeat(${PIXELS},1fr);border:solid 1px black`
var pixels = []

body.appendChild(grid)

for (var i =0; i<PIXELS*PIXELS;i++){
    pixels.push(document.createElement('div'))
    pixels[i].style.cssText = `border:1px solid black;height:${PIXELSIZE}px;width:${PIXELSIZE}px`
    grid.appendChild(pixels[i])    
}

function setclassic(){
    mode = 'classic'
}

function setmodern(){
    mode = 'modern'
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


pixels.forEach( (pixel)=>
{
    pixel.addEventListener('mouseover',(e)=>
    {
        if(mode == 'classic')
        e.target.style.background = '#181818'
        else
        e.target.style.background = getRandomColor()
    })
})

function reset(){
    pixels.forEach( (pixel)=>
    {
        pixel.style.background = 'orange'
    })
}
