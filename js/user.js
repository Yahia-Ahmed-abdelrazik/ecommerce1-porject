let user_info = document.getElementById("user_info")
let login = document.getElementById("login")
let logout = document.getElementById("logout")

if(localStorage.getItem("fullname")){
    login.remove()
    user_info.innerHTML=localStorage.getItem("fullname").split(" ")[0]
    user_info.style.color="red"
    logout.style.display="block"
}

logout.addEventListener('click',()=>{
    localStorage.clear()
    setTimeout(()=>{
        window.location="../login.html"
    },1500)
})