///////////////////////////////////////////////////////////
// Smooth scrolling animation

const sectionHomeEl = document.querySelector(".section-home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      // console.log(ent);
      console.log("intersecting");

      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      /// console.log(ent);
      console.log("not intersecting");

      document.body.classList.remove("sticky");
    }
  },
  {
    // In the ViewPoint
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHomeEl);

///////////////////////////////////////////////////////////
// Make Mobile navigation Work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll(".a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //  Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close Navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
