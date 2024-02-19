//previousElementSibling;
//parentNode;
//classList.add('')
//classList.remove("")

function focus_l(input) {
  let label = input.previousElementSibling
  input.addEventListener('input', function() {
      if(input.value!=''){
    label.classList.add('active')
  }else {
    label.classList.remove("active")
  }
  });
}