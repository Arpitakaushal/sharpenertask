let li=document.querySelectorAll('.fruit')

for(let i=0;i<li.length;i++)
{
 let edit=document.createElement("button")
 let bt=document.createTextNode("Edit")
 edit.appendChild(bt)
 edit.className='edit-btn'
 li[i].appendChild(edit)
}
let form=document.querySelector('form')
let fruits=document.querySelector('.fruits')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
let fruittoAdd=document.querySelector('#fruit-to-add')

let newli=document.createElement('li')
newli.innerHTML=fruittoAdd.value+'<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'

fruits.appendChild(newli)

})
fruits.addEventListener('click',(event)=>{
    if(event.target.classList.contains('delete-btn'))
    {
        let fruittodelete=event.target.parentElement
        fruits.removeChild(fruittodelete)
    }
})
let clss=document.querySelectorAll('.fruit')
let btn=document.createElement('button')
clss.appendChild(btn)



