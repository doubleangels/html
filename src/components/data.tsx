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
        introButtonText: "Meet Me",
    },
    socialData: {
        socials: [
            {
                "id": "github",
                "link": "https://github.com/doubleangels",
            },
            {
                "id": "phone",
                "link": "#contact",
            },
            {
                "id": "email",
                "link": "#contact",
            }
        ],
    },
    statsData: {
        statsTitle: "Stats",
        stats: [
            { icon: faHeart, text: 'Passion', content: 1 },
            { icon: faGraduationCap, text: 'Degree', content: 1 },
            { icon: faBuildingColumns, text: 'Learning', content: <span>&#8734;</span> },
            { icon: faGithub, text: 'Repos', content: <GithubRepoCount /> },
            { icon: faAward, text: 'Certs', content: 7 },
            { icon: faBug, text: 'Bugs', content: 0 },
        ],
    },
    profileData: {
        profileTitle: "Profile",
        profileDescription: "Cybersecurity analyst and developer with a passion for building secure, efficient solutions:",
    },
    educationData: {
        educationTitle: "Education",
        education: [
            {
                "degree": "Bachelor of Science in Computer Science",
                "institution": "Colorado Mesa University",
                "year": "2018"
            },
            {
                "degree": "Bachelor of Science in Cybersecurity",
                "institution": "Southern New Hampshire University",
                "year": "2024"
            }
        ],
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
            "Cisco CCNA (Expected 2025)"
        ],
    },
    skillsData: {
        skillsTitle: "Skills",
        skillsDescription: "My expertise spans multiple technical domains, continuously refined through hands-on experience and dedicated professional development. There's always more to learn!",
        skills: [
            {
                "text": "Problem Solving",
            },
            { 
                "text": "Communication Skills",
            },
            { 
                "text": "Adaptability",
            },
            { 
                "text": "Technical Proficiency",
            },
            { 
                "text": "Security Practices",
            },
            { 
                "text": "Network Architecture",
            },
            { 
                "text": "Virtualization",
            },
            { 
                "text": "Full Stack Development",
            }
        ],
    },
    resumeData: {
        resumeTitle: "Experience",
        resumeDescription: "My career journey has equipped me with diverse technical expertise across cybersecurity, support, and development domains.",
        resume: [
            {
                "job": "Cyber Security Analyst",
                "date": "April 2022 - Mar 2025",
                "company": "Open Raven (Los Angeles, CA, USA)",
                "responsibilities": [
                    "Orchestrated cross-functional security initiatives that strengthened system protection while maintaining operational efficiency.",
                    "Developed comprehensive technical documentation that elevated self-service success rates by standardizing security protocols.",
                    "Conducted root cause analysis of critical security incidents, implementing preventative measures that reduced vulnerability exposure."
                ]
            },
            {
                "job": "Technical Support Analyst III",
                "date": "January 2022 - April 2022",
                "company": "ACLU (Denver, CO, USA)",
                "responsibilities": [
                    "Led resolution of mission-critical technical issues affecting civil liberties advocacy operations nationwide.",
                    "Authored intuitive knowledge base articles that decreased support ticket volume and empowered user independence.",
                    "Engineered targeted technical solutions for complex organizational challenges, minimizing disruption to advocacy work."
                ]
            },
            {
                "job": "Warehouse Worker",
                "date": "April 2019 - March 2020",
                "company": "Conifer Properties (Grand Junction, CO, USA)",
                "responsibilities": [
                    "Optimized production machinery operations to exceed quality benchmarks while maintaining efficiency standards.",
                    "Executed precise order fulfillment processes with exceptional attention to detail and customer-first prioritization."
                ]
            },
            {
                "job": "Freelance Developer",
                "date": "November 2016 - Present",
                "company": "Self-Employed (CO, USA)",
                "responsibilities": [
                    "Architected and tailored software solutions that transform client requirements into intuitive, high-performance applications.",
                    "Created a privacy-centric Android application achieving 4+ star rating with 250k+ downloads in a competitive marketplace.",
                    "Engineered and deployed a distributed file-sharing platform that utilized multi-location collaboration workflows."
                ]
            }
        ],
    },
    portfolioData: {
        portfolioTitle: "Portfolio",
        portfolioDescription: "Explore my technical projects showcasing problem-solving capabilities and coding expertise.",
    },
    projectData: {
        projects: [
            {
                "title": "Redact",
                "description": "Powerful tool for redacting sensitive information from media files, ensuring data privacy.",
                "link": "https://github.com/doubleangels/redact",
            },
            {
                "title": "NextDNS Manager",
                "description": "Privacy-focused Android app enabling on-the-go management of NextDNS configurations with 250k+ satisfied users.",
                "link": "https://github.com/doubleangels/nextdnsmanager",
            },
            {
                "title": "J3Copy",
                "description": "Custom real-time file synchronization solution enhancing collaboration across multiple engineering locations.",
                "link": "https://github.com/mtverlee/j3Copy",
            }
        ],
    },
    contactData: {
        contactTitle: "Contact",
        contactLead: "Let's connect and explore how we can work together!",
        contactButtonText: "Reach Out",
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
};
