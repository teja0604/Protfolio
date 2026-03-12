/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import mathArena from "./assets/images/MathArena.jpg";
import luminaryAward from "./assets/images/LuminaryAward.jpg";
import nptelJava from "./assets/images/NptelJava.jpg";
import oneWeekOneProgram from "./assets/images/OneWeekOneProgram.jpg";
import mathClubLogo from "./assets/images/MathClubLogo.jpeg";
import profileCardImage from "./assets/images/profileCard (1).png";

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Krishna Teja",
  title: "Hi all, I'm Krishna Teja",
  roles: [
    "Java Developer",
    1000,
    "Spring Boot Developer",
    1000,
    "DSA Enthusiast",
    1000,
    "Full Stack Learner",
    1000
  ],
  subTitle:
    "Motivated Computer Science student passionate about Java backend development and problem solving. Experienced in building applications using Spring Boot and React, and actively strengthening algorithmic skills with a 500+ day CodeChef streak.",
  resumeLink:
    "https://drive.google.com/file/d/1fWE0cLTiCJFRBIe-NcVFYjFBCPlYkKC-/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/teja0604",
  linkedin: "https://www.linkedin.com/in/vanama-krishna-teja-1570642a0",
  gmail: "vanamakrishnateja0604@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER PASSIONATE ABOUT EXPLORING NEW TECH STACKS",
  skills: [
    "⚡ Building REST APIs using Spring Boot",
    "⚡ Designing backend systems",
    "⚡ Working with SQL databases",
    "⚡ Data Structures & Algorithms",
    "⚡ React.js & Vite development",
    "⚡ Building responsive web applications with HTML & CSS"
  ],
  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Eclipse",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "NetBeans",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sathyabama University",
      logo: "", // Leaving empty to avoid require errors
      subHeader: "B.E Computer Science Engineering",
      duration: "2023 - 2027",
      desc: "CGPA: 8.65",
      descBullets: []
    },
    {
      schoolName: "Sri Chaitanya Junior College",
      logo: "",
      subHeader: "MPC",
      duration: "2021 - 2023",
      desc: "Score: 84.6%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java",
      progressPercentage: "90%"
    },
    {
      Stack: "Spring Boot",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Structures and Algorithms",
      progressPercentage: "90%"
    },
    {
      Stack: "SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "React",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: false, // Set it to true to show workExperiences Section
  experience: []
};

// timeline section
const journeyInfo = {
  display: true,
  experiences: [
    {
      title: "Math Club President",
      company: "Sathyabama University",
      company_url: "https://sathyabama.ac.in/",
      logo_path: "mathClubLogo.jpeg",
      duration: "2025 - Present",
      location: "Chennai, India",
      description:
        "Led the Sathyabama Math Club, organizing competitive events, fostering problem-solving skills, and coordinating mathematical activities for students.",
      color: "#ffc107"
    },
    {
      title: "Received Luminary Award",
      company: "Sathyabama University",
      company_url: "https://sathyabama.ac.in/",
      logo_path: "luminaryAward.jpeg",
      duration: "2025",
      location: "Chennai, India",
      description:
        "Received the distinguished Luminary Award for academic excellence, coding achievements, and core contributions to student technical activities.",
      color: "#29b6f6"
    },
    {
      title: "Organized Mind Quest",
      company: "Mind Quest",
      company_url: "#",
      logo_path: "mathArena.jpeg", // utilizing generic club event image
      duration: "2024",
      location: "Chennai, India",
      description:
        "Organized and coordinated Mind Quest, a competitive mathematics and problem-solving event conducted through the university Math Club.",
      color: "#9c27b0"
    },
    {
      title: "Joined Sathyabama University",
      company: "B.E Computer Science",
      company_url: "https://sathyabama.ac.in/",
      logo_path: "sathyabamaLogo.png", // Generic placeholder if missing
      duration: "2023 - 2027",
      location: "Chennai, India",
      description:
        "Enrolled in the B.E Computer Science program with an active CGPA of 8.65.",
      color: "#4caf50"
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "Some of my significant projects",
  projects: [
    {
      image: "",
      projectName: "EduLearn Pro",
      projectDesc:
        "React + Node.js LMS platform with Stripe payment integration.",
      liveLink: "https://lms-sand-one.vercel.app/",
      githubLink: "https://github.com/teja0604/LMS"
    },
    {
      image: "",
      projectName: "BloodCare",
      projectDesc:
        "React + Spring Boot healthcare ecosystem with AI diagnostics.",
      githubLink: "https://github.com/teja0604/BlooddCare"
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Leadership 🏆"),
  subtitle:
    "Awards, certifications, and leadership roles that demonstrate my skills.",
  achievementsCards: [
    {
      title: "Maths Club President",
      subtitle: "📍 Sathyabama University",
      description: "Led the Sathyabama Math Club, organizing competitive events, fostering problem-solving skills, and coordinating mathematical activities for students.",
      image: mathClubLogo,
      imageAlt: "Maths club",
      footer: []
    },
    {
      title: "MathArena",
      subtitle: "📍 Sathyabama University",
      description: "Organized and coordinated MathArena, a competitive mathematics and problem-solving event conducted through the university Math Club.",
      image: mathArena,
      imageAlt: "MathArena",
      footer: []
    },
    {
      title: "Luminary Award",
      subtitle: "📍 Sathyabama University",
      description: "Received the Luminary Award for academic excellence, coding achievements, and contributions to student technical activities.",
      image: luminaryAward,
      imageAlt: "LuminaryAward",
      footer: []
    },
    {
      title: "NPTEL Java Certification",
      subtitle: "📍 NPTEL / SWAYAM",
      description: "Successfully completed the NPTEL Java Programming certification course with strong understanding of Java fundamentals and object-oriented programming.",
      image: nptelJava,
      imageAlt: "NPTEL Java",
      footer: []
    },
    {
      title: "One Week One Program Winner",
      subtitle: "📍 Sathyabama University",
      description: "Won the One Week One Program coding challenge by solving programming problems consistently throughout the competition.",
      image: oneWeekOneProgram,
      imageAlt: "One Week Winner",
      footer: []
    },
    {
      title: "Competitive Coding Achievement",
      subtitle: "📍 Coding Platforms",
      description: "Achieved a milestone of solving 1009 problems with 613 active coding days across major coding platforms including LeetCode, CodeChef, HackerRank, and GeeksforGeeks.",
      image: profileCardImage,
      imageAlt: "Competitive Coding Profile Card",
      footer: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  display: true,
  blogs: [
    {
      route: "/blog/springboot",
      title: "Understanding Spring Boot REST APIs",
      description:
        "Spring Boot has revolutionized the way we build enterprise applications in Java. It allows developers to quickly bootstrap a robust, production-ready backend by minimizing boilerplate configuration."
    },
    {
      route: "/blog/dijkstra",
      title: "Dijkstra Algorithm Explained with Visualization",
      description:
        "Dijkstra's Algorithm is a legendary greedy algorithm conceived by computer scientist Edsger W. Dijkstra in 1956. It solves the single-source shortest path problem for a graph with non-negative edge path costs."
    },
    {
      route: "/blog/java-oop",
      title: "Java OOP Concepts Explained",
      description:
        "Object-Oriented Programming (OOP) in Java relies on 4 fundamental pillars which drastically improve code reusability and scalability."
    },
    {
      route: "/blog/codechef-journey",
      title: "My 500+ Day CodeChef Coding Journey",
      description:
        "Maintaining a competitive programming streak requires discipline, grit, and a continuous willingness to fail math problems on the first try. Over my 500+ Day CodeChef streak, I transformed my approach to logical deduction."
    },
    {
      route: "/blog/react-springboot-fullstack",
      title: "Building Full Stack Apps using React and Spring Boot",
      description:
        "React (Frontend) coupled with Spring Boot (Backend) is widely regarded as an enterprise standard. React offers incredibly fast DOM manipulation and component-heavy modularity."
    }
  ]
};

// Talks Sections
const talkSection = {
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Contact Info Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's Build Something Impactful",
  description: "If you're looking for a dedicated Full Stack Developer focused on clarity, performance, and scalable solutions, I would love to collaborate.",
  email: "vanamakrishnateja0604@gmail.com",
  linkedin: "https://www.linkedin.com/in/vanama-krishna-teja-1570642a0/"
};

// Twitter Section
const twitterDetails = {
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  journeyInfo
};
