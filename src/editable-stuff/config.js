// Navigation Bar SECTION
const navBar = {
  show: true,
  
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shivam",
  middleName: "",
  lastName: "Pandey",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      svg: () => {return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>},
      url: "https://github.com/ShivCodeP"
    },
    {
      image: "fa-facebook",
      svg: () => { return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>},
      url: "https://www.facebook.com/shivamadityapandey"
    },
    {
      image: "fa-instagram",
      svg: () => { return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>},
      url: "https://www.instagram.com/pandey___shiv/"
    },
    {
      image: "fa-linkedin",
      svg: () => { return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>},
      url: "https://www.linkedin.com/in/shivamadityapandey/"
    },
    {
      image: "fa-twitter",
      svg: () => { return <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>},
      url: "https://twitter.com/ShivamAdityaPa2/"
    }
  ]
};

// About Section

const about = {
  show: true,
  heading: "About Me",
  imageLink: "/ShivCodeP",
  image: "https://avatars.githubusercontent.com/u/91545198?v=4",
  imageSize: 375,
  message:
    "I'm a software engineer who is passionate about making contributing to open-source more approachable, creating efficient application to solve people problem, and building community to solve tech related doubt and solve programming problems. Some technologies I enjoy working with include NodeJs, Express as Backend , MongoDB as a NoSQL Database and ReactJs, Javascript, HTML, CSS, Tailwindcss, SCSS as Frontend.",
  resume:
    "https://drive.google.com/file/d/1yj_fudqdRvEvG8bDhWR96lehIGaO9YzJ/view?usp=sharing"
};

// PROJECTS SECTION

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ShivCodeP",
  reposLength: 2,
  specificRepos: [{link:"ShivCodeP/myportfolio",img:require("../assets/myportfolio.png")},{link:"ShivCodeP/suduko-solver",img:require("../assets/sudukosolver.png")},{link:"pummysh/YesStyle",img:require("../assets/yesstyle.png")},{link:"RajP62/Smallcase",img:require("../assets/smallcase.png")}]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/shivam.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/shivam.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    }
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Git Bash", link: {href:"https://www.gnu.org/software/bash/",img:"https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"} },
    { name: "CSS", link: {href:"https://www.w3schools.com/css/",img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"} },
    { name: "Node Js", link: {href:"https://nodejs.org",img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"} },
    { name: "Express Js", link: {href:"https://expressjs.com",img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"} },
    { name: "JavaScript", link: {href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"} },
    { name: "React", link: {href:"https://reactjs.org/",img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"} },
    { name: "HTML", link: {href:"https://www.w3.org/html/",img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"} },
    { name: "Tailwind", link: {href:"https://tailwindcss.com/",img:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"} },
    {name:"redis",link:{href:"https://redis.io",img:"https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg"}},
    {name:"Redux",link:{href:"",img:"data:image/png;base64,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"}},
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Time Management", value: 80 },
    { name: "Creativity", value: 90 }
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Full Stack Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "pshivam762@gmail@gmail.com"
};

// Contact me
const contactMe = {
  show: true,
  mobile: "7011372816",
  social: {
    gmail:"pshivam762@gmail.com",
    github:"https://github.com/ShivCodeP",
    linkedin:"https://www.linkedin.com/in/shivamadityapandey/",
    twitter:"https://twitter.com/ShivamAdityaPa2/"
  }
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch,contactMe };
