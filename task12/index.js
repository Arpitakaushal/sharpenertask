// const form = document.querySelector('form');
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     const username=  document.getElementById('username').value;
//     const email  =document.getElementById('email').value;
//     const phone= document.getElementById('phone').value;
//     localStorage.setItem('username',username);
//     localStorage.setItem('EMAIL',email);
//     localStorage.setItem('PHONE',phone);
// })
// Write your code below:
function handleFormSubmit(event){
    event.preventDefault()
    let name=event.target.username.value
    let email=event.target.email.value
    let phone=event.target.phone.value
    // localStorage.setItem('name',name)
    // localStorage.setItem('email',email)
    // localStorage.setItem('phone',phone)
    let obj={
       name,
       email,
       phone
    }
    localStorage.setItem('userDetail',JSON.stringify(obj))
    showUserOnScreen(obj)
    // console.log(localStorage)
    // localStorage.setItem('userDetail',obj)
 }
 function showUserOnScreen(obj)
 {
    let parenItem=document.getElementById('list of item')
    parenItem.innerHTML= parenItem.innerHTML+`<li>${obj.name}-${obj.email}-${obj.phone}</li>`
 }
 