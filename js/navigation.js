function navigation() {

  const sections = document.querySelectorAll('.section');

  const width = document.querySelector("main").offsetWidth;

  if (width >= 1200) {
    const observer = new IntersectionObserver(
      entries => {

        const visibleSection = entries.filter(entry => entry.isIntersecting)[0];
        if (visibleSection) {
          let activeLink = document.querySelector('.active');
          let newLink = document.querySelector(`.nav-item[data-label=${visibleSection.target.id}]`)
          if (activeLink !== newLink) {
            activeLink.classList.remove('active');
            newLink.classList.add('active');
          }

        }
      }, { threshold: 0.5 })

    sections.forEach(section => {
      observer.observe(section)
    })
  } else if (width < 1200) {
    const observer = new IntersectionObserver(
      entries => {
        const visibleSection = entries.filter(entry => entry.isIntersecting)[0];
        if (visibleSection) {
          let activeLink = document.querySelector('.active');
          let newLink = document.querySelector(`.nav-item[data-label=${visibleSection.target.id}]`)
          if (activeLink !== newLink) {

            activeLink.classList.remove('active');
            newLink.classList.add('active');
          }

        }
      }, { threshold: 0.2 })
    sections.forEach(section => {
      observer.observe(section)
    })
  }
}




function navigateToProjects() {
  window.location.href = "#projects"

}



navigation()
