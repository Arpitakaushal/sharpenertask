let heading=document.querySelector('#main-heading')
heading.style.textAlign='right'
let basketheading=document.querySelector("#basket-heading")
basketheading.style.color='brown'
let fruits= document.querySelector('.fruits')
fruits.style.backgroundColor = 'gray';
fruits.style.padding= '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius= '5px';
fruits.style.listStyleType = 'none';
basketheading= document.querySelector('h2')
basketheading.style.marginleft = '30px'
const fruitItems = document.querySelectorAll('.fruit');
for(let i=0; i<fruitItems.length; i++)
  {
    fruitItems[i].style.backgroundColor = 'white'
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius='5px';
  }
let OddfruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0; i<OddfruitItems.length; i++)
  {
    OddfruitItems[i].style.backgroundColor = 'brown'
    OddfruitItems[i].style.color='white'
    
    }
       
              