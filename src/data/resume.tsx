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
        url: "mailto:matt@doubleangels.com",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
