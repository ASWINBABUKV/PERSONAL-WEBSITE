function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["Web Developer", "Problem Solver", "Student @ Amrita"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
document
  .getElementById("scroll-arrow")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the current section ID
    const currentSection = window.location.hash;

    // Find the next section ID
    const sections = document.querySelectorAll("section");
    let nextSection = null;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id === currentSection.slice(1)) {
        if (i < sections.length - 1) {
          nextSection = sections[i + 1].id;
        }
        break;
      }
    }

    // Scroll to the next section if found
    if (nextSection) {
      window.location.href = "#" + nextSection;
    }
  });
