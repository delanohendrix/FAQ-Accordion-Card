var accordionHeadings = document.querySelectorAll(".accordion-heading");

accordionHeadings.forEach((accordionHeading) => {
  accordionHeading.addEventListener("click", () => {
    if (accordionHeading.classList.contains("active")) {
      accordionHeading.classList.remove("active");
    } else {
      let accordionHeadingsWithActive = document.querySelectorAll(".active");
      accordionHeadingsWithActive.forEach((accordionHeadingWithActive) => {
        accordionHeadingWithActive.classList.remove("active");
      });
      accordionHeading.classList.add("active");
    }
  });
});
