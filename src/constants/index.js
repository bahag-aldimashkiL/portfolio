import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer (Part-Time)",
    company_name: "Dleaf - Turkey",
    icon: starbucks,
    iconBg: "#fff",
    date: "June 2016 - June 2018",
    points: [
      "Programming & implementing websites and web applications for the agency customers using different web technologies and platform such as .NET framework, Android., JavaScript, HTML, CSS, Java, Angular 2 and Angular 6.",
      "Supporting the analysis of business requirements, design specifications, development, and technical & user documentation of development report with internal teams.",
      "Building web applications that support different industries such as real estate, health care, education, e-commerce and personal websites.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer.",
    company_name: "Teacherix - Turkey",
    icon: tesla,
    iconBg: "#fff",
    date: "Jul 2018 - Feb 2019",
    points: [
      "DProgramming & producing a smart platform that connecting teachers with schools globally by matching destination suitability.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Contributing towards the back-to-front development, testing, maintenance and integration of applications with help of the newest technologies in the field such as React.js GraphQL, Node.js, Python, HTML5 and CSS3.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Qimia GmbH - Turkey/Germany",
    icon: shopify,
    iconBg: "#fff",
    date: "Apr 2019 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Preparing web art, fixing some front-end bugs, writing an API endpoint using Sprint Boot, dockerizing an application, database design, configuring a unit or ui test library.",
      "Project-focused intensive programing with emphasis on MongoDB, Express.js, React.js, Python, Java and JavaScript (MERN) technical stack.",
      "Hands on experience in AWS provisioning and good knowledge of AWS services like EC2, S3, ECS, RDS, IAM, Route 53, VPC, Cloud Front, Cloud Watch, Cloud Formation, Security Groups",
      "ETL Workflows in Data Pipeline, monitoring and management of ETL pipelines"
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "BAUHAUS - Germany",
    icon: meta,
    iconBg: "#fff",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining E-commerce web application using Next.js, Tailwind, Microfrontend, and other most trending technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Creating CI/CD workflow and managing them  on Github actions.",
      "Managing ETL piplelines and creating Business reports for specific datasets in Bigquery/GCP using Terraform , Looker, and other releated technologies .",
      "Extensive interaction with the stack holders on requirement gathering and estimation on Sprint planning and user stories tracked in JIRA. Took lead to guide the team on implementing the frontend technologies.",
      "Developing commerce components with API integrations for the customers checkout process"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Ahmad Mhaish",
    designation: "CTO",
    company: "Dleaf",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };