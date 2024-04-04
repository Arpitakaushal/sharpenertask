function handleFormSubmit(event){
    event.preventDefault()
    let name=event.target.username.value
    let email=event.target.email.value
    let phone=event.target.phone.value
    
    let obj={
       name,
       email,
       phone
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showUserOnScreen(obj)
    
 }
 function showUserOnScreen(obj)
 {
    let parenItem=document.getElementById('list of item')
    // parenItem.innerHTML= parenItem.innerHTML+`<li>${obj.name}-${obj.email}-${obj.phone}</li>`
  let childItem=document.createElement('li')
  childItem.textContent=obj.name +' - '+obj.email+' -'+obj.phone
  let deletebtn=document.createElement('input')
  deletebtn.type='button'
  deletebtn.value='Delete'
deletebtn.onclick=()=>{
 localStorage.removeItem(obj.email)
 parenItem.removeChild(childItem)
}
childItem.appendChild(deletebtn)
parenItem.appendChild(childItem)

let Editbtn=document.createElement('input')
 Editbtn.type='button'
 Editbtn.value='Edit'
 Editbtn.onclick=()=>{
    localStorage.removeItem(obj.email)
    parenItem.removeChild(childItem)
    document.getElementById('usernameInputtag').value=obj.name
    document.getElementById('emailInputtag').value=obj.email
    document.getElementById('phoneInputtag').value=obj.phone
   }
 
childItem.appendChild(deletebtn)
childItem.appendChild(Editbtn)
parenItem.appendChild(childItem)

 }
 