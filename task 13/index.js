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
    localStorage.setItem('userDetail',JSON.stringify(obj))
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

 }
 