import project1 from "../assets/projects/Farm.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import internshalaWeb from "../assets/Internshala-cer.png";
import gitHubFoundation from "../assets/github-foundations.png";

export const HERO_CONTENT = `I'm a dedicated Frontend Developer with a knack for creating visually appealing and highly functional web applications. With expertise in HTML, CSS, JavaScript, and React, I bring ideas to life on the web. My passion lies in crafting seamless user experiences and delivering high-quality, responsive designs.`;

export const ABOUT_TEXT = `I'm Mujeeb, a frontend developer with 1.5 years of experience. Currently working at Tata Consultancy Services (TCS), I specialize in HTML, CSS, JavaScript, and React, crafting responsive, user-friendly web experiences. Proficient in CSS frameworks like Bootstrap and Tailwind CSS, I focus on clean, efficient code. Let's connect and create something amazing together!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Tata Consultancy Services (TCS)",
    description: `As a frontend developer at TCS, I specialized in crafting responsive and user-friendly web experiences using HTML, CSS, JavaScript, and React. My responsibilities included collaborating with the team to implement designs, writing clean and efficient code, and continuously learning and adapting to new technologies and best practices`,
    technologies: ["HTML", "CSS", "Javascript", "React.js"],
  },
];

export const PROJECTS = [
  {
    title: "FarmFolio Website",
    image: project1,
    description:
      "A smart farm management tool with expense tracking, farm management, analytics, multi-language support, and AI-powered farming assistance.",
    technologies: [
      "HTML",
      "CSS",
      "React + Vite",
      "Material-UI",
      "Recharts",
      "i18next",
      "Hugging Face AI",
      "Node.js",
      "Firebase",
    ],
    url: "https://farmerfolio.netlify.app/",
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CERTIFICATES = [
  {
    title: "WEB DEVELOPMENT",
    organization: "Internshala",
    image: internshalaWeb,
    outputs: ["HTML", "CSS", "Bootstrap", "JavaScript", "SQL", "PHP"],
    link: "https://trainings.internshala.com/view_certificate/5BC96DCA-5736-6B48-1956-6C5C6FB76DB5/729D173B-DE7D-23E1-8EA9-AF786CAE508B/",
  },
  {
    title: "GITHUB FOUNDATION",
    organization: "GitHub",
    image: gitHubFoundation,
    outputs: ["GitHub", "Git", "Version Control"],
    link: "https://www.credly.com/badges/5700e2e9-04bc-4f86-af3e-cb81535b1870/public_url",
  },
];

export const CONTACT = {
  address: "1-20/2, Veerapur, Hyderabad, TS ",
  phoneNo: "+91 9010320330",
  email: "md.mujeeb5577@gmail.com",
};
