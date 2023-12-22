/////////////////////////////////////////////////////////// Sticky Navigation

const sectionHomeEl = document.querySelector(".section-home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      // console.log(ent);
      console.log("intersecting");

      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      // console.log(ent);
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

// Send  Email

const connectForm = document.querySelector("#connect-form");
const submitBtn = document.querySelector(".btn--form");
const nameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

// Get needed data from EmaiLJS
const publicKey = "IlTw1CnaD5q7rW0ci";
const serviceID = "service_m9xvach";
const templateID = "template_2894wg8";

// Initialize email JS with Public Key
emailjs.init(publicKey);

// Add Submit event to the form
connectForm.addEventListener("submit", (e) => {
  // Prevent form default behaviour
  e.preventDefault();
  // Change button text
  submitBtn.innerText = "Just A Moment...";
  // Get all input field values
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  //  Send the email
  //  (Add Service, template ID and input field values)
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      // Change button text
      submitBtn.innerText = "Message Sent Successfully";
      // Clear out all input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      // Console log the error
      console.log(error);
      // Change button text
      submitBtn.innerText = "Something went wrong";
    }
  );
});
