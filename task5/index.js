//create element
// let para=document.createElement('p')
// //create text Node
// let paraText=document.createTextNode('Total fruits: 4')
// console.log(para)
// let divs=document.getElementsByTagName('div')
// let SecondDiv=divs[1]
let heading=document.createElement("h3")
heading.innerHTML='<i>Buy high quality organic fruits online</i>'

console.log(heading)
// let divs=document.querySelector("div")
// divs.appendChild(heading)

 let para=document.createElement("p")
 para.innerHTML="Total fruits: 4"

let dives=document.querySelectorAll("div")
// let seconddiv=dives[1]
// seconddiv.appendChild(para)
let fruit=document.querySelector(".fruits")
dives[1].insertBefore(para,fruit)
dives[0].appendChild(heading)
para.id="fruits-total"
console.log(para)