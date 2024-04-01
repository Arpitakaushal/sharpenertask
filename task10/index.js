function handleFormSubmit(event){
   event.preventDefault()
   let name=event.target.username.value
   let email=event.target.email.value
   let phone=event.target.phone.value
   localStorage.setItem('name',name)
   localStorage.setItem('email',email)
   localStorage.setItem('phone',phone)
}