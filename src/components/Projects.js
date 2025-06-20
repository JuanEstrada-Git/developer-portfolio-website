import React, { useState } from "react";
import styles from "./Projects.module.css";

// Dummy data: add more tech stacks and projects as you wish
const techStacks = [
    {
        name: "React Projects",
        logo: "/assets/react-logo.png",
        projects: [
            {
                title: "React Projects",
                description: "React proejcts I have created.",
                link: "https://github.com/yourusername/smart-home-dashboard"
            },
            // Add more React projects here
        ]
    },
    {
        name: "NodeJS Projects",
        logo: "/assets/node-logo.png",
        projects: [
            {
                title: "Node Projects",
                description: "Node projects I have created",
                link: "https://github.com/yourusername/node-smart-home-api"
            },
            // Add more Node projects here
        ]
    },
    {
        name: "Ruby on Rails Projects",
        logo: "/assets/rails-logo.png",
        projects: [
            {
                title: "Ruby Projects",
                description: "Ruby projects I have created",
                link: "https://github.com/yourusername/node-smart-home-api"
            },
            // Add more Node projects here
        ]
    },
    {
        name: "VueJS Projects",
        logo: "/assets/vue-logo.png",
        projects: [
            {
                title: "Smart Home Management App",
                description: "Smart Home Management App I created using VueJS",
                link: "https://smart-home-dashboard-real-vue.vercel.app/"
            },
            // Add more Node projects here
        ]
    },
    {
        name: "Flask Projects",
        logo: "/assets/flask-fast-api.jpg",
        projects: [
            {
                title: "Flask & FastAPI Projects",
                description: "Ruby projects I have created",
                link: "https://github.com/yourusername/node-smart-home-api"
            },
            // Add more Node projects here
        ]
    },
];

function Projects() {
    const [openStack, setOpenStack] = useState(null);

    const toggleStack = (name) => {
        setOpenStack(openStack === name ? null : name);
    };

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.projectsTitle}>Projects</h2>
            <div className={styles.techStackGrid}>
                {techStacks.map((stack) => (
                    <div key={stack.name} className={styles.techCard}>
                        <button
                            className={styles.techLogoBtn}
                            onClick={() => toggleStack(stack.name)}
                            aria-expanded={openStack === stack.name}
                            aria-controls={`${stack.name}-projects`}
                        >
                            <img src={stack.logo} alt={stack.name + " logo"} className={styles.techLogo} />
                            <span className={styles.techName}>{stack.name}</span>
                        </button>
                        {openStack === stack.name && (
                            <div className={styles.projectsList} id={`${stack.name}-projects`}>
                                {stack.projects.map((project, idx) => (
                                    <div key={idx} className={styles.projectCard}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDesc}>{project.description}</p>
                                        <a href={project.link} className={styles.projectBtn} target="_blank" rel="noopener noreferrer">
                                            View Project
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
