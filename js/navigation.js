function navigation() {

  const sections = document.querySelectorAll('.section');

  const width = document.querySelector("main").offsetWidth;

  if (width >= 1200) {
    const observer = new IntersectionObserver(
      entries => {

        document.querySelectorAll('.nav-item').forEach(link => {
          link.classList.remove('active');
        })

        const visibleSection = entries.filter(entry => entry.isIntersecting)[0];
        if (visibleSection) {
          document.querySelector(`.nav-item[data-label=${visibleSection.target.id}]`).classList.add("active")
        }
      }, { threshold: 1 })

    sections.forEach(section => {
      observer.observe(section)
    })
  } else if (width < 1200) {
    const observer = new IntersectionObserver(
      entries => {

        document.querySelectorAll('.nav-item').forEach(link => {
          link.classList.remove('active');
        })

        const visibleSection = entries.filter(entry => entry.isIntersecting)[0];
        if (visibleSection) {
          document.querySelector(`.nav-item[data-label=${visibleSection.target.id}]`).classList.add("active")
        }
      }, { threshold: 0.5 })
    sections.forEach(section => {
      observer.observe(section)
    })
  }
}




function navigateToProjects() {
  window.location.href = "#projects"

}



navigation()
