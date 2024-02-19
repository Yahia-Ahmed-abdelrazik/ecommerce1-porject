let email = document.getElementById("email")
let password = document.getElementById("password")
let login_btn = document.getElementById('login_btn')

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

login_btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (email.value === "" || password.value === "") {
        alert('please fill data')
    }else if(getEmail==email.value.trim()&&getPassword==password.value.trim()){
        setTimeout(() => {
            window.location = "../index.html"
        }, 1500)
    }else{
        alert("username or password is wrong")
    }
})