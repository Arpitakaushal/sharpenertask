function tosavedata(event){
  event.preventDefault()
  let name=event.target.username.value
  let email=event.target.email.value
  let phone=event.target.phoneno.value
  let obj={
     name,
     email,
     phone
  }

  localStorage.setItem('userdetail',JSON.stringify(obj))
  showUserOnScreen(obj)
}
function showUserOnScreen(obj){
  let ul=document.getElementById('list of item')
  ul.innerHTML+=`<li>${obj.name}-${obj.email}-${obj.phone}</li>`
}