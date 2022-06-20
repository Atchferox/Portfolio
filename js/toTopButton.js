const scrollPx = 100;
const backToTopButton = document.querySelector('.go-to-top');

const scrollContainer = () => {
  return document.documentElement || document.body;
};


document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > scrollPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};