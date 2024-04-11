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
  
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showUserOnScreen(obj)
  }
  function showUserOnScreen(obj)
  {
     let ui=document.getElementById('list of item')
     let li=document.createElement('li')
     li.textContent=obj.name+' - '+obj.email +' - '+obj.phone
     let delbtn=document.createElement('input')
     delbtn.type='button'
     delbtn.value='Delete'
     let editbtn=document.createElement('input')
     editbtn.type='button'
     editbtn.value='Edit'

     delbtn.onclick=()=>{
      localStorage.removeItem(obj.email)
      ui.removeChild(li)
  
     }
     editbtn.onclick=()=>{
        localStorage.removeItem(obj.email)
      ui.removeChild(li)
      document.getElementById('usernameInputTag').value=obj.name
      document.getElementById('emailInputTag').value=obj.email
      document.getElementById('phoneInputTag').value=obj.phone

     }
     li.appendChild(delbtn)
     ui.appendChild(li)

     li.appendChild(editbtn)
     ui.appendChild(li)
  
  }