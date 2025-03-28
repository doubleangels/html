import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Matt VerLee",
  initials: "MV",
  url: "https://doubleangels.com",
  location: "Denver, CO",
  locationLink: "https://www.google.com/maps/place/denver",
  description:
    "I'm a developer and cybersecurity professional. I make things happen with bits and bytes.",
  summary:
    "",
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "matt@doubleangels.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/doubleangels-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/doubleangels-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contact@doubleangels.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Open Raven",
      href: "https://openraven.com",
      badges: [],
      location: "Remote",
      title: "Cybersecurity Analyst",
      start: "Apr 2022",
      end: "Mar 2025",
      description:
        "Assisted clients in identifying and mitigating security vulnerabilities, ensuring compliance with industry standards. Conducted security assessments, penetration tests, and audits to identify and address security risks.",
    },
        {
      company: "American Civil Liberties Union (ACLU)",
      href: "https://www.aclu.org",
      badges: [],
      location: "Denver, CO",
      title: "Technical Support Analyst III",
      start: "Apr 2022",
      end: "Jan 2022",
      description:
        "Collaborated with cross-functional teams to resolve complex technical challenges, ensuring seamless operations. Created comprehensive technical documentation to streamline support processes and promote user self-help. Analyzed escalated technical issues, identified root causes, and implemented solutions to minimize downtime and optimize system performance.",
    },
    {
      company: "Conifer Products, Inc",
      href: "https://www.coniferproducts.com/",
      badges: [],
      location: "Grand Junction, CO",
      title: "Warehouse Worker",
      start: "Apr 2019",
      end: "Mar 2020",
      description:
        "Managed high-volume production machinery, ensuring efficiency and quality. Picked & fulfilled orders accurately and promptly, prioritizing customer satisfaction.",
    },
    {
      company: "DoubleAngels",
      href: "https://doubleangels.com",
      badges: [],
      location: "Remote",
      title: "Freelance Developer",
      start: "Nov 2016",
      end: "Present",
      description:
        "Designed custom software solutions tailored to user needs, enhancing functionality and user experience. Developed a privacy-focused, Java-based Android app with 4+ star rating and 250K+ downloads, demonstrating user satisfaction and market success. Prototyped, tested, and deployed a C#-based, real-time file-sharing system across multiple locations, boosting collaboration and efficiency.",
    },
  ],
  education: [
    {
      school: "Cisco",
      href: "https://www.cisco.com",
      degree: "CCNA Certification",
      start: "2025",
      end: "Present",
    },
    {
      school: "Southern New Hampshire University",
      href: "https://www.snhu.edu",
      degree: "Bachelor of Science in Cybersecurity",
      start: "2020",
      end: "2024",
    },
    {
      school: "CompTIA",
      href: "https://www.comptia.org",
      degree: "Server+ Certification",
      start: "2020",
      end: "2020",
    },
    {
      school: "CompTIA",
      href: "https://www.comptia.org",
      degree: "Network+ Certification",
      start: "2020",
      end: "2020",
    },
    {
      school: "CompTIA",
      href: "https://www.comptia.org",
      degree: "A+ Certification",
      start: "2020",
      end: "2020",
    },
    {
      school: "Federal Emergency Management Agency (FEMA)",
      href: "https://www.fema.gov",
      degree: "Emergency Management Certification",
      start: "2018",
      end: "2018",
    },
    {
      school: "Massachusetts Institute of Technology",
      href: "https://www.mit.edu",
      degree: "Python Certification",
      start: "2018",
      end: "2018",
    },
    {
      school: "Linux Professional Institute",
      href: "https://www.lpi.org/our-certifications/linux-essentials-overview",
      degree: "Linux Essentials Certification",
      start: "2017",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Redact",
      href: "https://github.com/doubleangels/redact",
      dates: "Mar 2025 - Present",
      active: true,
      description:
        "Protect your privacy with Redact - the powerful yet simple app that removes all EXIF metadata from photos and videos before sharing online. Prevent location tracking, hide device information, and secure your personal data when posting on social media platforms.",
      technologies: [
        "Android",
        "Java",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/doubleangels/redact",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/doubleangels/redact/blob/main/icons/web/icon.png?raw=true",
      video: "",
    },
    {
      title: "NextDNS Manager",
      href: "https://github.com/doubleangels/nextdnsmanager",
      dates: "Mar 2021 - Present",
      active: true,
      description:
        "NextDNS Manager is an Android application that simplifies managing your NextDNS configuration. NextDNS is a cloud-based DNS filter and firewall designed to protect your home, family, and online privacy. With NextDNS Manager, you can effortlessly control your NextDNS settings to ensure a safer and more secure digital experience.",
      technologies: [
        "Android",
        "Java",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/doubleangels/nextdnsmanager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/doubleangels/nextdnsmanager/blob/main/icons/web/icon-512-maskable.png?raw=true",
      video: "",
    },
  ],
} as const;
