// e.preventDefault()
//localStorage.setItem()

let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')

let email = document.querySelector("#email")
let password = document.querySelector("#password")

let get_started = document.querySelector("#get_started")

get_started.addEventListener("click",(e)=>{
    e.preventDefault()
    if(firstName.value==''||email.value==''||password.value==''||lastName==''){
        alert('please fill data')
    }else{
        let fullName = firstName.value+" "+lastName.value

        localStorage.setItem("fullname",fullName)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout(()=>{
            window.location="../login.html"
        },1500)
    }
})
