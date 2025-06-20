import styles from './ProfessionalProfile.module.css';

function ProfessionalProfile() {
    return (
        <section id="professional-profile" className={styles.professionalProfile}>
            <h2 className={styles.title}>Professional Profile</h2>
            <p className={styles.summary}>
                I'm an experienced in project / product / program manager, full-stack developer, and creative leader.<br />
                <br /><br />
                I am passionate about empowering teams and building innovative, human-centered solutions.
                <br /><br />
                While project, product, and program management are my specialties, I also like to program and devleop my own software!
                <br /><br />
                <span style={{ color: "#ffda79" }}>
                    • Project & Product Management<br />
                    • Full Stack Development (React, Node, Python, Ruby)<br />
                    • Creative Direction<br />
                    • Music Production & Storytelling<br />
                    • Cross-Cultural Team Leadership
                </span>
            </p>
        </section>
    );
}

export default ProfessionalProfile;
