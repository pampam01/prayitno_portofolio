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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "developer dan maintain aplikasi berbasis reactjs. baik di aplikasi web, maupun di native di android dan IOS",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
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
