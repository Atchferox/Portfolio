function handleButtonClick() {

  let navbar = document.getElementById("myLinks")
  let navbarItems = document.querySelectorAll(".nav-item")
  let main = document.querySelector("main")
  let scrollContainer = document.querySelector(".scrolldown")
  navbarItems.forEach(item => {
    if (item.attributes.getNamedItem("data-label").value === 'home') {
      if (!item.classList.contains("active")) {
        item.classList.add("active")
      }
    }
  })

  if (main.style.transform === '') {
    main.style.transform = 'translateX(290px)';
    fadeOut(main);
    scrollContainer.style.visibility = "hidden";
    navbar.style.transform = 'translateX(0%)';
  } else {
    main.style.transform = '';
    navbar.style.transform = 'translateX(-100%)'
    main.style.opacity = '1'
    scrollContainer.style.visibility = "visible";

  }
}


function fadeOut(main) {
  let fadeEffect = setInterval(function () {
    if (!main.style.opacity) {
      main.style.opacity = 1;
    }
    if (main.style.opacity > 0.9) {
      main.style.opacity -= 0.002;
    } else {
      clearInterval(fadeEffect);
    }
  }, 1)
}