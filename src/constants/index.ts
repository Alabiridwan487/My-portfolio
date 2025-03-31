// import todo from '../assets/todo.png';
// import validation from '../assets/validation.png';
import Portfolio from '../assets/portp.png';
import Shopping from '../assets/clothings.png';
import Ecommerce from '../assets/elegance.png';
import Real from '../assets/landing.png'

export const Hero_Content: string = `A detail-oriented web developer with 1+ years experience in creating dynamic and
responsive web applications. Driven by a client-first mindset and result oriented
approach. Skilled in Frontend development, I am exploring new Fulltime roles in order to continue developing my career in
Fullstack domain. Available Immediately.`;

export const About_Content: string = `Hi, I'm a dedicated and detail-oriented Frontend developer with over 1 year of experience crafting dynamic, user-friendly, and responsive web applications. Passionate about building Scalable & Interactive web app. I thrive on turning ideas into functional, visually appealing solutions that address real-world challenges.

With expertise in Frontend development. I have successfully built projects that showcase my skills in creating seamless user experiences. My commitment to continuous learning has enabled me to explore cutting-edge technologies and deliver high-quality solutions.

Beyond coding, I bring a client-first mindset and a results-oriented approach, ensuring every project meets or exceeds expectations. Currently, I’m open to full-time roles that allow me to contribute to innovative teams while continuing to grow as a Frontend Developer.

When I'm not coding, I enjoy sharing knowledge through and mentoring in software development, fostering collaboration, and empowering others in their tech journeys.

Let’s build something great together! 🚀`

export const Experiences = [
    {
        year: "Nov 2024 - Present",
        role: "Software Developer Intern",
        company: "GoMyCode",
        description: `Collaborate on an existing codebase, integrating new technologies and features using React and TypeScript to enhance functionality and performance.`,
        technologies: ["HTML", "CSS", "React.js", "Next.Js"]
    },
    {
        year: "Aug 2024 - Nov 2024",
        role: "Software Development Assistant Trainee",
        company: "GoMyCode",
        description: `Assisted over 30 students, focusing on frontend (React, JavaScript) development across 70+ coding sessions.`,
        technologies: ["JavaScript", "React.js", "Next.js", "Node.js"]
    },
    
]

export const Projects = [
    {
        title: "E-commerce",
        Image: Ecommerce,
        description: `Explore our exquisite collection of handcrafted jewelry designed to elevate your style. Each piece tells a unique story, perfect for any occasion.`,
        technologies: ["JavaScript", "React.js", "Next.js", "Node.js"],
        gitHub: "/",
        live: "https://reactives.vercel.app/"
    },
    {
        title: "Real Estate Website",
        Image: Real,
        description: `A high-performance Real estate website using HTML & CSS, Discover the Best Properties for Sale and Rent. The Ultimate Destination for Buying and Selling Homes.`,
        technologies: ["Bookstrap", "HTML", "CSS"],
        gitHub: "/",
        live: "https://landing-page-bookstrap.vercel.app/"
    },
    {
        title: "Shopping Website",
        Image: Shopping,
        description: `A responsive and user-friendly clothing website that displays real-time digital shopping hub junction, allowing our clients to make their order and get them delivered.`,
        technologies: ["HTML", "CSS"],
        gitHub: "/",
        live: "https://fashion-clothing.vercel.app/"
    },
    {
        title: "Practical portfolio website",
        Image: Portfolio,
        description: `This is like a practical portfolio website i build for myself to showcase my skills.`,
        technologies: ["React.js","Tailwind CSS", "Node.js"],
        gitHub: "/",
        live: "https://web-dev-portfolio-soni-git-main-alabi-ridwans-projects.vercel.app/"
    }
    // {
    //     title: "To-Do List",
    //     Image: todo,
    //     description: `A simple and intuitive to-do list application that allows users to add and delete tasks, helping them stay organized and productive.`,
    //     technologies: ["EJS", "Node.js", "JavaScript"],
    //     gitHub: "https://github.com/OlolaJaco/Backend-TodoList-Angela-Yu.git",
    //     live: "https://backend-todolist-zy16.onrender.com/"
    // },
    // {
    //     title: "Contact Form Validation",
    //     Image: validation,
    //     description: `A contact form with client-side validation that ensures users enter correct information before submitting, reducing errors and improving data quality.`,
    //     technologies: ["HTML", "CSS", "JavaScript"],
    //     gitHub: "https://github.com/OlolaJaco/Validation-Form.git",
    //     live: "https://ololajaco.github.io/Validation-Form/"
    // }
]

export const Contact = {
    address: "Lagos, Nigeria",
    phone: "+234 808 662 3211",
    email: "alabiridolakitan487@gmail.com"
}