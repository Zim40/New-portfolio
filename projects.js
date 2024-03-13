document.addEventListener("DOMContentLoaded", function () {
  displayProjects();
  displayLandingPage();
  displayText();
  closeNavbar();
  // displayLandingPage();
  // displayFooter();
  // revealItems();
});
document.addEventListener("scroll", revealItems);

const projects = [
  {
    name: "HC-Managment System",
    description:
      "HC-Management System is a user-friendly application designed to streamline time tracking and employee management processes. Whether you're an employee or an administrator, our platform offers intuitive features to enhance efficiency and productivity in your workplace.",
    image: "./assets/HCManagement.png",
    link: "https://github.com/Zim40/HC-Management-SYS",
  },
  {
    name: "Rural Tech Admin Dashboard",
    description:
      "Rural tech is a template e-commerce website that demonstrates the possibility of creating a tool for business owners to handle inventory tasks.",
    image: "./assets/ruralTech.png",
    link: "https://github.com/Zim40/RuralTech-Ecommerce-",
  },
  {
    name: "Fetch Event",
    description:
      "Fetch Event allows users to search events in specific areas in different genres using the ticketmaster API.",
    image: "./assets/fetchEvent.png",
    link: "https://github.com/Zim40/FetchEvent",
  },
  {
    name: "Wordle Replica",
    description:
      "Wordle is a word puzzle game where you try to guess a secret five-letter word in as few attempts as possible. You get feedback after each guess to help you figure out the word. It's like a fun challenge to test your word skills and problem-solving abilities.",
    image: "./assets/wordleReplica.png",
    link: "https://github.com/Zim40/Wordle-Replica",
  },
];

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  var footer = document.querySelector("footer").offsetHeight;

  var viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var minvisibleHeight = rect.height * 0.5;
  return (
    rect.top + minvisibleHeight >= 0 &&
    rect.left >= 0 &&
    rect.bottom - minvisibleHeight <= viewportHeight - footer &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function revealItems() {
  var items = document.querySelectorAll(".item");

  items.forEach((item) => {
    if (isElementInViewport(item) === false) {
      item.classList.add("item");
      item.classList.remove("visible");
      console.log("false");
    } else {
      item.classList.add("visible");
      console.log(item, "True");
    }
  });
}

function closeNavbar() {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(function(navItem) {
    navItem.addEventListener("click", function() {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }})
  })

  
}

function displayProjects() {
  const container = document.getElementById("projects--container");

  projects.forEach((project) => {
    const projectEl = document.createElement("div");
    projectEl.classList.add("project", "item");

    // PROJECT IMAGE
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("div--image");
    const projectImage = document.createElement("img");
    projectImage.classList.add("project--image");
    projectImage.src = project.image;
    projectImage.alt = project.name;

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("project--content", "item");

    const projectName = document.createElement("h2");
    projectName.classList.add("project--name");

    projectName.textContent = project.name;

    const projectDesc = document.createElement("p");
    projectDesc.classList.add("project--description");

    projectDesc.textContent = project.description;

    const projectLink = document.createElement("a");
    projectLink.classList.add("project--link");

    projectLink.textContent = "View Code";
    projectLink.href = project.link;
    projectLink.target = "_blank";

    imgDiv.appendChild(projectImage);
    contentContainer.appendChild(projectName);
    contentContainer.appendChild(imgDiv);

    contentContainer.appendChild(projectDesc);
    contentContainer.appendChild(projectLink);

    container.append(contentContainer);

    if (isElementInViewport(container)) {
      container.classList.add("visible");
    }
  });
}

function displayText() {
  const container = document.getElementById("landing--container");

  const div = document.createElement("div");
  div.classList.add("quote--container");

  const textLine1 = document.createElement("p");
  textLine1.classList.add("textLine1", "textLineHidden");
  textLine1.textContent = "Every line of code - ";

  const textLine2 = document.createElement("p");
  textLine2.classList.add("textLine2", "textLineHidden");
  textLine2.textContent = "is a step towards a future more exciting";
  div.appendChild(textLine1);
  div.appendChild(textLine2);
  container.append(div);

  function scatterText() {
    setTimeout(function () {
      textLine1.classList.add("textLineVisible");
    }, 3000);

    setTimeout(function () {
      textLine2.classList.add("textLineVisible");
    }, 4000);

    // div.classList.add("textLineVisible");
  }
  scatterText();
}

function displayLandingPage() {
  const container = document.getElementById("landing--container");

  const content = document.createElement("div");
  content.classList.add("div--landing");

  const title = document.createElement("h1");
  title.classList.add("title--landing");
  title.textContent = "Michael Monaghan";

  const titlePara = document.createElement("p");
  titlePara.classList.add("p--landing");
  titlePara.textContent = "Fullstack Web Developer";

  container.append(content);
  setTimeout(function () {
    if (title && titlePara) {
      content.appendChild(title);
      content.appendChild(titlePara);

      content.classList.add("landing--container--visible");
    }
  }, 1000);
}

// window.onload = function() {
//     displayProjects();
// };

// Every line of code is a step towards a future more exciting
