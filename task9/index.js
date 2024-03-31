let filter=document.querySelector('#filter')

filter.addEventListener('keyup',(e)=>{
    let text=e.target.value.toLowerCase()
    let fruititem=document.querySelectorAll('.fruit')
   for(let i=0;i<fruititem.length;i++)
   {
    let curr=(fruititem[i].firstChild.textContent.toLowerCase())
    if(curr.indexOf(text)==-1)
    {
        fruititem[i].style.display='none'
    }
    else{
        fruititem[i].style.display='flex'
    }
   }
})