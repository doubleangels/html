import ResumeItem from "./ResumeItem";

const resumeItems = [
    {
        jobTitle: "Cyber Security Analyst",
        dateRange: "April 2022 - June 2023",
        companyName: "Open Raven (Los Angeles, CA, USA)",
        responsibilities: [
            "Demonstrated a strong commitment to professional growth by staying abreast of the latest security technologies, trends, and vulnerabilities, continuously enhancing the organization's defense capabilities.",
            "Developed and implemented robust security measures and controls, safeguarding critical systems, networks, and sensitive data against cyber threats.",
            "Led investigations into security incidents and breaches, successfully determining root causes and delivering actionable recommendations for mitigation and prevention.",
            "Conducted regular and comprehensive vulnerability assessments and penetration tests, effectively identifying weaknesses in systems and networks, and implementing targeted security enhancements.",
            "Proactively monitored and analyzed security alerts and events, swiftly identifying potential threats and vulnerabilities to ensure prompt remediation.",
        ]
    },
    {
        jobTitle: "Technical Support Analyst III",
        dateRange: "January 2022 - April 2022",
        companyName: "ACLU (Denver, CO, USA)",
        responsibilities: [
            "Collaborated seamlessly with cross-functional teams, including software developers and system administrators, to address intricate technical challenges, fostering effective problem-solving and ensuring smooth operations across the organization.",
            "Developed and maintained comprehensive technical documentation, including user-friendly FAQs, knowledge base articles, and troubleshooting guides, streamlining support processes and enhancing user self-help resources.",
            "Mentored and guided junior technical support analysts, effectively sharing knowledge and expertise to elevate the team's proficiency, resulting in improved productivity and customer support.",
            "Conducted meticulous analysis of escalated technical problems, swiftly identifying root causes and providing well-informed solutions, minimizing downtime and optimizing system performance.",
            "Expertly resolved intricate technical issues and delivered advanced troubleshooting support to end-users, ensuring prompt resolution and maximizing user satisfaction.",
        ]
    },
    {
        jobTitle: "Freelance Developer",
        dateRange: "November 2016 - Present",
        companyName: "Self-Employed (CO, USA)",
        responsibilities: [
            "Produced high-quality, error-free code within aggressive timelines, ensuring efficient project delivery and meeting organizational objectives.",
            "Translated written business requirements and technical specifications into executable code solutions, ensuring accurate implementation and alignment with project goals.",
            "Designed and developed customized software solutions to meet complex user requirements, resulting in enhanced functionality and user experience.",
            "Developed a privacy-focused, highly-rated Android application with an average rating of 4+ stars from thousands of users worldwide, demonstrating user satisfaction and recognition.",
            "Created, prototyped, tested, and implemented real-time file sharing software systems across multiple geographic office locations, enhancing collaboration and efficiency.",
        ]
    },
    {
        jobTitle: "System Administration Intern",
        dateRange: "June 2015 - November 2016",
        companyName: "Fleet Financial (Englewood, CO, USA)",
        responsibilities: [
            "Assisted in safeguarding company data by implementing top-quality anti-threat planning and contributing to corrective action strategies, enhancing the organization's resilience against security risks.",
            "Contributed to the installation and management of system peripherals and components, assisting in maintaining the functionality and reliability of IT systems.",
            "Supported the technical team in installing, configuring, and customizing company-wide systems, gaining valuable hands-on experience in system deployment and customization.",
            "Assisted in managing IT functions to support hardware, software, and network systems, contributing to the smooth operation and maintenance of critical IT infrastructure.",
            "Provided user support by troubleshooting and resolving network access issues, gaining practical experience in resolving technical problems and ensuring user satisfaction.",
        ]
    },
    {
        jobTitle: "Systems Technician",
        dateRange: "June 2010 - June 2018",
        companyName: "A Simple Solution (Englewood, CO, USA)",
        responsibilities: [
            "Preserved long-term system performance through regular preventive maintenance and equipment calibration, ensuring consistent reliability and minimizing downtime.",
            "Executed system installations by pulling low voltage category cabling, fiber optic cabling, and communications cabling, ensuring smooth and efficient deployment.",
            "Set up and maintained desktop personal computers, effectively coordinating network usage and providing reliable technology support to maximize productivity.",
            "Conducted diagnostics, testing, and analysis of electrical components, assemblies, and systems to identify and address performance issues, resulting in enhanced reliability and efficiency.",
            "Ensured optimal functionality of system-related interfaces, databases, hardware, and software through regular maintenance and updates, contributing to seamless operations.",
        ]
    },
];

export default function Resume() {
    return (
        <section id="resume">
            <div className="row section-intro">
                <div className="col-twelve resume-header">
                    <h1>Resume</h1>
                    <h2>Throughout my career, I have had the privilege of working on a variety of impactful projects...</h2>
                </div>
            </div>
            <div className="row resume-timeline">
                <div className="col-twelve">
                    <div className="timeline-wrap">
                        {resumeItems.map((item, index) => (
                            <div className="timeline-block" key={index}>
                                <ResumeItem {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
