import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiLeetcode,
  SiCodeforces,
  SiCoursera,
  SiHackerrank,
  SiLinkedin,
  SiGithub,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";
import tShirts from "../../public/t-shirts.png";
import chat from "../../public/chat.png";
import buddy from "../../public/buddy.png";
import tic from "../../public/tic.png";
import more from "../../public/more-coming.png";

export const skills = [
  { name: "Html", icon: <SiHtml5 /> },
  { name: "Css", icon: <SiCss3 /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Github", icon: <SiGithub /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MUI", icon: <SiMui /> },
  { name: "React", icon: <SiReact /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
];

export const part1 = [
  {
    title: "Linkedin",
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/mehedi-hassan-rauf-9b9aa426a",
    description:
      "For connecting with professionals of similar fields, growing networks and sharing professional carrier activities Linkedin plays a great role. Here I have an well briefed profile highlighting my education, work experience, skills and accomplishments",
  },
  {
    title: "Github",
    icon: <SiGithub />,
    link: "",
    description:
      "A developer platform that allows developers to create, store, manage and share their code.Storing and sharing code is awesome with github. Check out my github profile to see my contributions and some repositories.",
  },
  {
    title: "Leetcode",
    icon: <SiLeetcode />,
    link: "",
    description:
      "Along with the importance of web development skills, problem solving skills are also necessary. Where LeetCode plays a vital role. I have solved problems using Data structures and algorithms that are widely used during technical interviews at companies like Facebook, Amazon, Hulu and Google",
  },
  {
    title: "Codeforces",
    icon: <SiCodeforces />,
    link: "",
    description:
      "I have also solved many problems and participated in contests in this platform. Theses problems are slightly different from the ones I have seen on LeetCode. But codeforces also helped me in improving some of my problem solving skills",
  },
];

export const part2 = [
  {
    title: "Meta Front-End Developer",
    icon: <SiCoursera />,
    link: "https://drive.google.com/file/d/1-DpgyNMDXnF2QgnFTxHOnIOvcAYN90RN/view?usp=drive_link",
    description:
      "For connecting with professionals of similar fields, growing networks and sharing professional carrier activities Linkedin plays a great role. Here I have an well briefed profile highlighting my education, work experience, skills and accomplishments",
  },
  {
    title: "Problem Solving",
    icon: <SiHackerrank />,
    link: "https://www.hackerrank.com/certificates/1574b76ec942",
    description:
      "This exam contained 3 problems (Easy,Medium and Hard) which has to be solved with Data structures. Here I have scored All of the questions and passed the exam.",
  },
  {
    title: "Back End Development and APIs",
    icon: <FaFreeCodeCamp />,
    link: "https://www.freecodecamp.org/certification/Rauf_/back-end-development-and-apis",
    description:
      "A great documentary course for learning back-end. I learnt about node and express along with managing APIs,using mongodb to store data through mongoose. Completed the course with hands on short task projects and ended the course with 5 good first projects.",
  },
  {
    title: "Version Control",
    icon: <SiCoursera />,
    link: "https://drive.google.com/file/d/11ABhS7dRI7NeNY4IO18qPnwPYZUoWDH1/view?usp=drive_link",
    description:
      "In software engineering, version control is a class of systems responsible for managing changes to computer programs, documents, large web sites, or other collections of information. So I did this course and learnt how to use github properly in order to manage source control.",
  },
];

export const projects = [
  {
    title: "Buddy",
    description:
      "Buddy is a community full of your trustworthy friends. You can freely share your problems here and have responses from others. We believe some responses might help you. You also can take part in others' problems and give them your response to help them. Hope you'll enjoy the community!",
    link: "https://buddy49.netlify.app",
    source: "https://github.com/Mehedi-Hassan-Rauf/buddy",
    pic: buddy,
    tags: [
      "Typescript",
      "NextJs",
      "ReactJs",
      "NextAuth",
      "JWT",
      "NodeJs",
      "Mongoose",
      "MongoDB",
    ],
  },
  {
    title: "T-Shirts Ecommerce Website",
    description:
      "An Ecommerce website where you can find awesome t-shirts. Please do sign up for better user experience. Add products to cart and then pay the price through stripe.",
    link: "https://t-shirts-rauf.vercel.app",
    source: "https://github.com/Mehedi-Hassan-Rauf/T-Shirts",
    pic: tShirts,
    tags: [
      "Typescript",
      "NextJs",
      "ReactJs",
      "NextAuth",
      "JWT",
      "Zustand",
      "NodeJs",
      "Prisma",
      "MongoDB",
      "Stripe",
    ],
  },
  {
    title: "Tic-Tac-Toe with Chats",
    description:
      "This is a very simplified game with the opportunity to talk with an opponent while playing. You can play as much as you want by clicking play again. Have fun!",
    link: "https://tic-tac-toee-xfis.onrender.com",
    source: "https://github.com/Mehedi-Hassan-Rauf/tic-tac-toee",
    pic: tic,
    tags: [
      "Typescript",
      "ReactJs",
      "Zustand",
      "NodeJs",
      "Express",
      "Socket Io",
    ],
  },
  {
    title: "Chat Application",
    description:
      "This is a MERN chat application where users can sign in and chat with other users. Every user can chat with every user. Also, it has fully real-time chat system with the help of Socket.io",
    link: "https://chat-app-7nqr.onrender.com",
    source: "https://github.com/Mehedi-Hassan-Rauf/chat-app",
    pic: chat,
    tags: [
      "Javascript",
      "ReactJs",
      "Zustand",
      "NodeJs",
      "Express",
      "JWT",
      "Mongoose",
      "MongoDB",
      "Socket Io",
    ],
  },
  {
    title: "",
    description: "",
    link: "",
    pic: more,
    tags: [],
  },
];
