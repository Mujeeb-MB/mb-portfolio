import project1 from "../assets/projects/Farm.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import internshalaWeb from "../assets/Internshala-cer.png";
import gitHubFoundation from "../assets/github-foundations.png";

// Calculate experience dynamically based on joining date
const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  const diffInMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  // Example: "2.5 years" or "1 year 3 months"
  const experience =
    months >= 6
      ? `${years}.${1} years` // show half year for 6+ months
      : `${years} years`;

  return experience;
};

const experienceYears = calculateExperience("2023-08-24");

export const HERO_CONTENT = `I'm a frontend developer who loves turning ideas into interactive, user-friendly web apps. I work mainly with React, JavaScript, HTML, and CSS — building fast, clean, and responsive designs that actually feel good to use. I enjoy solving real problems through code and always look for ways to make the web a bit more beautiful and simple.`;

export const ABOUT_TEXT = `Hey, I'm Mujeeb — a frontend developer with ${experienceYears} of experience, currently working at Tata Consultancy Services (TCS). I focus on building clean, responsive, and user-friendly web interfaces using React, JavaScript, HTML, and CSS. I’ve also worked with frameworks like Tailwind and Bootstrap to speed up development without compromising on design. I’m passionate about learning new tech, improving performance, and creating smooth user experiences that make an impact.`;

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
