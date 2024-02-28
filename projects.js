document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.querySelector('.hamburger--menu');
    var navUl = document.querySelector('.nav--ul');

    menuBtn.addEventListener('click', function () {
        navUl.classList.toggle('show');
        menuBtn.classList.toggle('marginBtn');
    });
    displayProjects();
    displayFooter();
    // revealItems();
});
document.addEventListener("scroll", revealItems);





const projects = [
    {
        name: "HC-Managment System",
        description: "",
        image: "",
        link: "",
    },
    {
        name: "Rural Tech Admin Dashboard",
        description: "",
        image: "",
        link: "",
    },
    {
        name: "Fetch Event",
        description: "",
        image: "",
        link: "",
    },
    {
        name: "Wordle Replica",
        description: "",
        image: "",
        link: "",
    }
];


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    // console.log(rect)
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

}
function revealItems() {
    var items = document.querySelectorAll(".item");
    
    items.forEach(item => {
        
        if(isElementInViewport(item) === false) {
            item.classList.add("item");
            item.classList.remove("visible");
            console.log("false")
        } else {
            item.classList.add("visible");
            console.log(item, "True")
        }
        
    });
};


function displayProjects() {

    const container = document.getElementById("projects--container");
    

    projects.forEach(project => {
        const projectEl = document.createElement("div");
        projectEl.classList.add("project", "item");
        
        

        const projectName = document.createElement("h2");
        projectName.classList.add("project--name");
        
        projectName.textContent = project.name

        const projectDesc = document.createElement("p");
        projectDesc.classList.add("project--description");
        
        projectDesc.textContent = project.description

        const projectImage = document.createElement("img");
        projectImage.classList.add("project--image");
        
        projectImage.src = project.image;
        projectImage.alt = project.name;

        const projectLink = document.createElement("a");
        projectLink.classList.add("project--link");
        
        projectLink.textContent = "View Project";
        projectLink.href = project.link;
        projectLink.target = "_blank";
      

        projectEl.appendChild(projectImage);
        projectEl.appendChild(projectName);
        projectEl.appendChild(projectDesc);
        projectEl.appendChild(projectLink);

        container.append(projectEl);
        if(isElementInViewport(projectEl)) {
            projectEl.classList.add("visible");
        }
    });
    // const footerSection = document.getElementById("footer");
    
    // const div = document.createElement("div");
    // div.classList.add("div--footer", "item");

    // const span = document.createElement("span");
    // span.classList.add("footer--span");

    // const pTag1 = document.createElement("p");
    // pTag1.classList.add("pTag1");
    // pTag1.textContent = "Michael Monaghan";

    // const pTag2 = document.createElement("p");
    // pTag2.classList.add("pTag2");
    // pTag2.textContent = "Made with ❤️";


    // div.appendChild(span);
    // div.appendChild(pTag1);
    // div.appendChild(pTag2);
    
    // footerSection.append(div);
    // if(isElementInViewport(div)) {
    //     div.classList.add("visible");
    // } 
    
};

function displayFooter() {
    const container = document.getElementById("footer");
    
    const div = document.createElement("div");
    div.classList.add("div--footer", "item");

    const span = document.createElement("span");
    span.classList.add("footer--span");

    const pTag1 = document.createElement("p");
    pTag1.classList.add("pTag1");
    pTag1.textContent = "Michael Monaghan";

    const pTag2 = document.createElement("p");
    pTag2.classList.add("pTag2");
    pTag2.textContent = "Made with ❤️";


    div.appendChild(span);
    div.appendChild(pTag1);
    div.appendChild(pTag2);
    
    container.append(div);
    if(isElementInViewport(div)) {
        div.classList.add("visible");
    }
}

// window.onload = function() {
//     displayProjects();
// }; 



