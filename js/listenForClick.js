let navbar = document.getElementById("myLinks")
let main = document.querySelector("main")

let width = document.querySelector("main").offsetWidth;

document.querySelectorAll('.nav-item').forEach(link => {



  link.addEventListener('click', () => {
    let width = document.querySelector("main").offsetWidth;
    if (width < 1200) {
      navbar.style.transform = 'translateX(-100%)'
      main.style.transform = ''
      main.style.opacity = '1'
      document.querySelector(".scrolldown").style.visibility = "visible";
    }
  })
}
)