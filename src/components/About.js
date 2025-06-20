import styles from './About.module.css';

function About() {
    return (
        <section id="about" className={styles.aboutContainer}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <p className={styles.aboutBody}>
                I’m Juan Estrada—a multidisciplinary creator blending architecture, code, and digital experience design.<br />
                <br></br>
                My mission: build beautiful, functional solutions that spark curiosity and connection.<br />
                <br></br>
                From reggaeton beats to clean code, I believe every project is a chance to leave something extraordinary behind.
            </p>
        </section>
    );
}

export default About;

