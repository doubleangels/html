import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faGraduationCap,
  faBuildingColumns,
  faAward,
  faBug,
} from '@fortawesome/free-solid-svg-icons';
import GithubRepoCount from './GithubRepoCount';


export const data = {
    introData: {
        intro: "Hello, World.",
        introDescription: "I make things happen with bits and bytes.",
        name: "Matt Verlee",
        firstName: "Matt",
        introButtonText: "Meet Me!",
    },
    profileData: {
        profileTitle: "Profile",
        profileDescription: "Let me introduce myself by highlighting what I bring to the table:",
    },
    certificationsData: {
        certificationsTitle: "Certifications",
        certifications: [
            "LPI Linux Essentials (June 2017)",
            "MIT Python Certification (January 2018)",
            "FEMA Certification (July 2018)",
            "CompTIA A+ (January 2020)",
            "CompTIA Network+ (April 2020)",
            "CompTIA Server+ (September 2020)",
            "Cisco CCNA (Expected 2024)"
        ],
    },
    skillsData: {
        skillsTitle: "Skills",
        skillsDescription: "Throughout my career, I have proactively sought opportunities to acquire valuable skills through continuous learning and professional development. Here are some highlights.",
        skills: [
            {
                "text": "Problem Solving",
                "percent": 99 
            },
            { 
                "text": "Communication Skills",
                "percent": 99
            },
            { 
                "text": "Adaptability",
                "percent": 99
            },
            { 
                "text": "Technical Proficiency",
                "percent": 99
            },
            { 
                "text": "Security Practices",
                "percent": 99
            },
            { 
                "text": "Network Architecture",
                "percent": 85
            },
            { 
                "text": "Virtualization",
                "percent": 75
            },
            { 
                "text": "Full Stack Development",
                "percent": 75
            }
        ],
    },
    statsData: {
        stats: [
            { icon: faHeart, text: 'Passion', content: 1 },
            { icon: faGraduationCap, text: 'Degree', content: 1 },
            { icon: faBuildingColumns, text: 'Learning', content: <span>&#8734;</span> },
            { icon: faGithub, text: 'Repos', content: <GithubRepoCount /> },
            { icon: faAward, text: 'Certs', content: 7 },
            { icon: faBug, text: 'Bugs', content: 0 },
        ],
    },
    contactData: {
        contactTitle: "Contact",
        contactDescription: "I would love to hear from you!",
        contactLead: "Please don't hesitate to reach out!",
        contactButtonText: "Contact Me",
        contactInformation: [
            {
                "id": "location",
                "type": "Location",
                "text": "Denver, CO",
                "link": "https://wikipedia.org/wiki/Denver"
            },
            {
                "id": "email",
                "type": "Email",
                "text": "matt@doubleangels.com",
                "link": "mailto:matt@doubleangels.com"
            },
            { 
                "id": "phone",
                "type": "Call/Text",
                "text": "720-295-0463",
                "link": "tel:7202950463"
            }
        ],
    },
    projectData: {
        projects: [
            {
                "title": "NextDNS Manager",
                "description": "A lightweight mobile app for Android that allows you to manage your NextDNS settings on the go!",
                "link": "https://github.com/mtverlee/NextDNSManager",
                "label": "Check out my NextDNS Manager project"
            },
            {
                "title": "gradientLines",
                "description": "A simple, animated graphic using only HTML canvases, JS, and CSS.",
                "link": "https://github.com/mtverlee/gradientLines",
                "label": "Check out my gradientLines project"
            },
            {
                "title": "J3Copy",
                "description": "A custom file synchronization program for J3 Engineering Consultants, Inc",
                "link": "https://github.com/mtverlee/j3Copy",
                "label": "Check out my j3Copy project"
            }
        ],
    },
    resumeData: {
        resumeTitle: "Resume",
        resumeDescription: "I have a diverse background in technical support, software development, and cybersecurity. My experience includes roles as a Technical Support Analyst, Cyber Security Analyst, and Freelance Developer. I am passionate about leveraging technology to solve complex problems and enhance user experiences. I am currently pursuing a CCNA certification to further enhance my skills in network architecture and security practices.",
        resume: [
            {
                "job": "Cyber Security Analyst",
                "date": "April 2022 - Mar 2025",
                "company": "Open Raven (Los Angeles, CA, USA)",
                "responsibilities": [
                    "Collaborated with cross-functional teams to resolve complex technical challenges, ensuring seamless operations.",
                    "Created comprehensive technical documentation to streamline support processes and promote user self-help.",
                    "Analyzed escalated technical issues, identified root causes, and implemented solutions to minimize downtime and optimize system performance."
                ]
            },
            {
                "job": "Technical Support Analyst III",
                "date": "January 2022 - April 2022",
                "company": "ACLU (Denver, CO, USA)",
                "responsibilities": [
                    "Collaborated with cross-functional teams to resolve complex technical challenges, ensuring seamless operations.",
                    "Created comprehensive technical documentation (FAQs, knowledge base, troubleshooting guides) to streamline support processes and promote user self-help.",
                    "Analyzed escalated technical issues, identified root causes, and implemented solutions to minimize downtime and optimize system performance."
                ]
            },
            {
                "job": "Warehouse Worker",
                "date": "April 2019 - March 2020",
                "company": "Conifer Properties (Grand Junction, CO, USA)",
                "responsibilities": [
                    "Managed high-volume production machinery, ensuring efficiency and quality.",
                    "Picked & fulfilled orders accurately and promptly, prioritizing customer satisfaction."
                ]
            },
            {
                "job": "Freelance Developer",
                "date": "November 2016 - Present",
                "company": "Self-Employed (CO, USA)",
                "responsibilities": [
                    "Designed custom software solutions tailored to user needs, enhancing functionality and user experience.",
                    "Developed a privacy-focused Android app with 4+ star rating and 125K+ downloads, demonstrating user satisfaction and market success.",
                    "Prototyped, tested, and deployed a real-time file-sharing system across multiple locations, boosting collaboration and efficiency."
                ]
            }
        ],
    },
    socialData: {
        socials: [
            {
                "id": "github",
                "link": "https://github.com/doubleangels",
                "label": "View my Github profile"
            },
            {
                "id": "phone",
                "link": "#contact",
                "label": "Contact me by phone"
            },
            {
                "id": "email",
                "link": "#contact",
                "label": "Contact me by email"
            }
        ],
    },
    portfolioData: {
        portfolioTitle: "Portfolio",
        portfolioDescription: "Here are a few examples of my work.",
    }
};