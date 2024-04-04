
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
    
    parenItem.innerHTML= parenItem.innerHTML+`<li>${obj.name}-${obj.email}-${obj.phone}</li>`
   
 }
 