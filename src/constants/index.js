import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  asahPdf,
  robot1Pdf,
  robot2Pdf,
  dicoding123,
  dicoding184,
  dicoding185,
  dicoding237,
  dicoding256,
  dicoding302,
  dicoding315,
  dicoding317,
  dicoding51,
  dicoding653,
  dicoding713,
  dicoding80,
  dicoding86,
} from "../assets/certificates";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  laravel,
  yolo,
  python,
  arduino,
  pytorch,
  tensorflow, 
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: yolo,
    name: "YOLO",
    type: "AI",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "AI",
  },
  {
    imageUrl: arduino,
    name: "Arduino",
    type: "AI",
  },
  {
    imageUrl:tensorflow,
    name:"Tensorflow",
    type:"AI"
  },
  {
    imageUrl: pytorch,
    name: "PyTorch",
    type: "AI",
  }
];

export const experiences = [
  {
    title: "Store Cashier, Convenience Store",
    company_name: "Convenience Store",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "Feb 2020 - Nov 2021",
    points: [
      "Handled customer transactions accurately and efficiently while providing friendly customer service.",
      "Managed cash payments, maintained accurate daily sales records, and balanced the cash register at the end of each shift.",
      "Assisted in organizing merchandise and ensuring the store remained clean and well-stocked.",
    ],
  },
  {
    title: "Sorter, Shopee Warehouse",
    company_name: "Shopee Warehouse",
    icon: shopify,
    iconBg: "#fbc3bc",
    date: "Dec 2021 - Mar 2022",
    points: [
      "Sorted incoming and outgoing goods based on shipment categories and delivery destinations.",
      "Ensured order accuracy and supported warehouse operations to maintain efficient logistics processes.",
      "Worked effectively in a fast-paced environment while following operational procedures and safety standards.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "University",
    icon: meta,
    iconBg: "#b7e4c7",
    date: "Agus 2022 - Dec 2024",
    points: [
      "Assisted lecturers with teaching materials, assignments, and various academic tasks.",
      "Supported classroom activities and completed administrative and academic duties assigned by lecturers.",
      "Helped students understand course materials and provided assistance when needed.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Freelance",
    icon: react,
    iconBg: "#a2d2ff",
    date: "Mei 2022 - Present",
    points: [
      "Developed web, Android, and machine learning projects based on client requirements.",
      "Communicated with clients to understand project needs and deliver suitable technical solutions.",
      "Managed multiple freelance projects independently while maintaining quality and meeting deadlines.",
    ],
  },
  {
    title: "Laboratory Assistant",
    company_name: "University",
    icon: python,
    iconBg: "#e6e6fa",
    date: "Jan 2024 - Present",
    points: [
      "Assisted in managing laboratory activities and supporting students during practical sessions.",
      "Prepared laboratory equipment, materials, and technical guidance for experiments and academic activities.",
      "Maintained the readiness, cleanliness, and organization of laboratory facilities and tools.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/pampam01",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/prayitno-b29842398/",
  },
];

export const projects = [
  {
    iconUrl: starbucks,
    theme: "btn-back-blue",
    name: "Catfish Farming Automation",
    description:
      "Created an IoT-based monitoring and control system for catfish farming. Utilized sensors to monitor water quality (pH, temperature) and water levels. Implemented an automatic control system for water pumps, including a manual override during sensor disruptions. Developed a mobile application to monitor and control the ponds remotely.",
    link: "https://github.com/Prayitno",
  },
  {
    iconUrl: tesla,
    theme: "btn-back-red",
    name: "AI Palm Oil Fruit Quality Detection",
    description:
      "Developed a machine learning model using an image dataset to evaluate and classify the quality of palm oil fruits. Integrated the machine learning model into an interactive web application, allowing users to easily determine fruit quality.",
    link: "https://github.com/Prayitno",
  },
  {
    iconUrl: shopify,
    theme: "btn-back-green",
    name: "Bathin Village Religious Court Website",
    description:
      "Built a website for the Bathin Village Religious Court using Laravel and related technologies. Implemented a responsive design to ensure seamless cross-browser compatibility and collaborated with other developers to deliver a high-quality product.",
    link: "https://github.com/Prayitno",
  },
  {
    iconUrl: meta,
    theme: "btn-back-pink",
    name: "Notion Clone",
    description:
      "Created a web application inspired by Notion using React.js and modern web technologies. Focuses on a responsive design, cross-browser compatibility, and an intuitive user interface for seamless note-taking and productivity.",
    link: "https://github.com/Prayitno",
  },
];

export const certificates = [
  {
    theme: "btn-back-black",
    name: "Certificate of Appreciation Asah",
    issuer: "Asah / Organization",
    date: "2024",
    fileUrl: asahPdf,
  },
  {
    theme: "btn-back-red",
    name: "Robot 1 Achievement",
    issuer: "Competition",
    date: "2024",
    fileUrl: robot1Pdf,
  },
  {
    theme: "btn-back-blue",
    name: "Robot 2 Achievement",
    issuer: "Competition",
    date: "2024",
    fileUrl: robot2Pdf,
  },
  {
    theme: "btn-back-green",
    name: "Dicoding Course 123",
    issuer: "Dicoding Indonesia",
    date: "24-04-2024",
    fileUrl: dicoding123,
  },
  {
    theme: "btn-back-yellow",
    name: "Dicoding Course 184",
    issuer: "Dicoding Indonesia",
    date: "26-09-2025",
    fileUrl: dicoding184,
  },
  {
    theme: "btn-back-pink",
    name: "Dicoding Course 185",
    issuer: "Dicoding Indonesia",
    date: "12-10-2025",
    fileUrl: dicoding185,
  },
  {
    theme: "btn-back-red",
    name: "Dicoding Course 237",
    issuer: "Dicoding Indonesia",
    date: "17-08-2025",
    fileUrl: dicoding237,
  },
  {
    theme: "btn-back-black",
    name: "Dicoding Course 256",
    issuer: "Dicoding Indonesia",
    date: "04-05-2024",
    fileUrl: dicoding256,
  },
  {
    theme: "btn-back-blue",
    name: "Dicoding Course 302",
    issuer: "Dicoding Indonesia",
    date: "17-08-2025",
    fileUrl: dicoding302,
  },
  {
    theme: "btn-back-green",
    name: "Dicoding Course 315",
    issuer: "Dicoding Indonesia",
    date: "07-05-2024",
    fileUrl: dicoding315,
  },
  {
    theme: "btn-back-yellow",
    name: "Dicoding Course 317",
    issuer: "Dicoding Indonesia",
    date: "17-08-2025",
    fileUrl: dicoding317,
  },
  {
    theme: "btn-back-pink",
    name: "Dicoding Course 51",
    issuer: "Dicoding Indonesia",
    date: "10-11-2025",
    fileUrl: dicoding51,
  },
  {
    theme: "btn-back-red",
    name: "Dicoding Course 653",
    issuer: "Dicoding Indonesia",
    date: "28-08-2025",
    fileUrl: dicoding653,
  },
  {
    theme: "btn-back-black",
    name: "Dicoding Course 713",
    issuer: "Dicoding Indonesia",
    date: "20-10-2025",
    fileUrl: dicoding713,
  },
  {
    theme: "btn-back-blue",
    name: "Dicoding Course 80",
    issuer: "Dicoding Indonesia",
    date: "10-11-2025",
    fileUrl: dicoding80,
  },
  {
    theme: "btn-back-green",
    name: "Dicoding Course 86",
    issuer: "Dicoding Indonesia",
    date: "09-09-2025",
    fileUrl: dicoding86,
  },
];
