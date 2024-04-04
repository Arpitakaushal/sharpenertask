let input=document.createElement('input')
input.type="text"
input.id="description"
input.fontweight="italic"
let form=document.querySelector('form')
let btn=document.querySelector('button')
form.insertBefore(input,btn)
console.log(input)

let fruit=document.querySelector(".fruits")
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  let li=document.createElement('li')
  fruitadd=document.querySelector('#fruit-to-add')
  li.className="fruit"
  li.innerHTML=fruitadd.value+`<p style='font-style:italic;'>${input.value}</p><button class="delete-btn">x</button>`
 fruit.appendChild(li)

})
let filter=document.querySelector('#filter')

filter.addEventListener('keyup',(event)=>{
 let textenter=event.target.value.toLowerCase()
 let fruit=document.querySelectorAll('.fruit')
 for(let i=0;i<fruit.length;i++)
 {
  let currfruit=fruit[i].firstChild.textContent.toLowerCase()
  if(currfruit.indexOf(textenter)===-1)
  {
     fruit[i].style.display="none"
  }
  else{
    fruit[i].style.display="flex"
  }
 }
})