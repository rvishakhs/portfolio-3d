import {
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
    news,
    ai,
} from "../assets";
import fullstack from "../assets/full-stack.png";
import devops from "../assets/agile.png";
import python from "../assets/python.svg";
import linux from "../assets/linux.png";
import net from "../assets/net.svg";
import kubernetes from "../assets/kubernetes.svg";
import aws from "../assets/aws.svg";
import django from "../assets/django.svg";
import sql from "../assets/sql.svg";
import bez from "../assets/bez.jpg";
import theo from "../assets/theo.jpg";
import sooraj from "../assets/sooraj.jpg";
import parpella from "../assets/parpella.png";
import gama from "../assets/gama.png";
import eshoppers from "../assets/fullstack.png";
import jordanstore from "../assets/jordanstore.png";
import adminpanel from "../assets/adminpanel.png";
import docker from "../assets/docker.png";


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
        title: "React Developer",
        icon: reactjs,
    },
    {
        title: "Python Developer",
        icon: python,
    },
    {
        title: "Full Stack Developer",
        icon: fullstack,
    },
    {
        title: "Devops engineer",
        icon: devops,
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "MySql",
        icon: sql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "React Developer",
        company_name: "Gama Security Solutions",
        icon: gama,
        iconBg: "#383E56",
        date: "Jan 2023 - present",
        points: [
            `Developed intuitive UI with React.js and Recoil, reducing 
            bounce rate by 25% and increasing customer satisfaction.`,
            `Improved website performance by optimizing database 
            and query efficiency, resulting in 20% faster 
            loading and better user experience.`,
            `Optimized front-end performance by integrating caching
             mechanisms, leading to an increase in page load speed by an average of 50%.
            `,
            `Designed a flexible routing system using React and Next.js, 
            allowing for easy navigation between different pages and sections 
            of the application, leading to a decrease in bounce rate by 20%.
            `,
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Parpella Pvt Ltd",
        icon: parpella,
        iconBg: "#383E56",
        date: "February 2018 - june 2020",
        points: [
            `Built and deployed responsive, cross-browser compatible
            web applications using, HTML, and Css and JavaScript`,
            `Collaborated with senior developers to learn and
            implement best practices and coding standards in
            JavaScript development
            `,
            `Developed new features and optimized existing
           functionality on web applications using JavaScript
           frameworks`,
            `Participated in code reviews and implemented feedback
            from senior developers to improve code quality and
            maintainability
            `,
        ],
    },
];

const testimonials = [
    {
        testimonial: "You work extremely hard and I really appreciate it, so Thank you.                             ",
        name: "Besert Etemi",
        designation: "Manager",
        company: "Pret A Manger",
        image: bez,
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Theo Nebel",
        designation: "Asst Manager",
        company: "Pret A Manger",
        image: theo,
    },
    {
        testimonial: "Working with him was a joy; his exceptional time management and insatiable curiosity for new tech made him stand out.",
        name: "Sooraj ",
        designation: "Senior Dev",
        company: "Gama Security Systems",
        image: sooraj,
    },
];

const projects = [
    {
        name: "Full Stack Ecommerce ",
        description: `Overall, I am proud of my contributions in designing the database schema, leading the MERN project, developing the backend API, and implementing user authentication and authorization features. I developed the backend RESTful API using Express and Node.js. This ensured that data could be transmitted efficiently and accurately.`,
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
                name: "node.js",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: eshoppers,
        source_code_link: "https://eshoppersedu.netlify.app/",
        github_code_link: "https://github.com/rvishakhs/Ecommerce-build",
    },
    {
        name: "Live News",
        description: `Live News integrates API to categorize news articles by topic and region, with performance optimization via database and query optimization. As a reliable source of up-to-date news information, Live News offers an enhanced user experience with faster loading times.Also Users can easily access news articles from multiple sources and conveniently search for specific topics.

            `,
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
        image: news,
        source_code_link: "https://news-app-rsoorajs.vercel.app/",
        github_code_link: "https://github.com/rvishakhs/news-app.git",
    },
    {
        name: "AI Image Generator",
        description: `Utilizing DALL-E API and Node.js, an AI image generator tool increases user engagement by 40% through personalized images. Researching and implementing the latest AI and image generation techniques has resulted in a 20% website performance increase and 15% user engagement increase, maintaining the tool's functionality while innovating.`,
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
        image: ai,
        source_code_link: "https://github.com/",
        github_code_link: "https://github.com/",
    },
    {
        name: "Jordan Store",
        description: ` The combination of React, Next.js, Stripe Payment gateway, and sanity CMS resulted in a highly functional and user-friendly application that delivered a flawless user experience and streamlined product updates. To enhance the e-commerce functionality, I integrated the Stripe Payment gateway, enabling seamless and secure online transactions for customers.`,
        tags: [
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "strapi",
                color: "green-text-gradient",
            },
            {
                name: "stripe",
                color: "pink-text-gradient",
            },
            {
                name: "nextjs",
                color: "blue-text-gradient",
            }
        ],
        image: jordanstore,
        source_code_link: "jordan-store-final-build-mf48fch0z-srvishakh-gmailcom.vercel.app",
        github_code_link: "https://github.com/rvishakhs/JordanStore-Final-Build.git",
    },
    {
        name: "Eshoppers Admin Panel ",
        description: `The admin dashboard designed and implemented the database schema using MongoDB, ensuring efficient data storage and retrieval for our application. It was important to optimize the schema to handle our data effectively. Developed the backend RESTful API using Express and Node.js, enabling seamless communication between the client and server.`,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
            {
                name: "Ant-charts",
                color: "green-text-gradient",
            },
            {
                name: "formik",
                color: "pink-text-gradient",
            },
        ],
        image: adminpanel,
        source_code_link: "https://github.com/",
        github_code_link: "https://github.com/rvishakhs/ecommerce-admin.git",
    },
    {
        name: "Containerization of Microservices",
        description: `I have gained expertise in container orchestration using Kubernetes. I have designed and installed Kubernetes clusters, effectively managing resources and optimizing workload distribution. I have also utilized Kubernetes for running jobs and deploying pods, ensuring efficient execution and scaling of containerized applications.`,
        tags: [
            {
                name: "Docker",
                color: "blue-text-gradient",
            },
            {
                name: "AWS",
                color: "pink-text-gradient",
            },
            {
                name: "Kubernetes",
                color: "green-text-gradient",
            },
            {
                name: "Jenkins",
                color: "pink-text-gradient",
            },
        ],
        image: docker,
        source_code_link: "https://github.com/",
        github_code_link: "https://github.com/rvishakhs/vprofile-project.git",
    },
];

export { services, technologies, experiences, testimonials, projects };
