import styles from './ProfessionalProfile.module.css';

function ProfessionalProfile() {
    return (
        <section id="professional-profile" className={styles.professionalProfile}>
            <h2 className={styles.title}>Professional Profile</h2>
            <p className={styles.summary}>
                Multidimensional artist, visionary technologist, and bridge between worlds.<br />
                Experienced in project management, full-stack development, and creative leadership.<br />
                Passionate about empowering teams and building innovative, human-centered solutions.
                <br /><br />
                <span style={{ color: "#ffda79" }}>
                    • Project & Product Management<br />
                    • Full Stack Development (React, Node, Python, Ruby)<br />
                    • Creative Direction<br />
                    • Music Production & Storytelling<br />
                    • Cross-cultural Team Leadership
                </span>
            </p>
        </section>
    );
}

export default ProfessionalProfile;
