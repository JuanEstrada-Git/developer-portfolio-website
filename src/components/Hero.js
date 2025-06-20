import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Hi, I'm <span className={styles.highlight}>Juan Estrada.</span>
                </h1>
                <div className={styles.heroSubtitle}>
                    From architecture to code, I build <span className={styles.highlight}>beautiful, functional experiences</span>.
                    <br />
                    Let's create something extraordinary together.
                </div>
                <a href="#projects" className={styles.ctaBtn}>
                    Explore My Work
                </a>
            </div>
            <img
                src="/assets/headshot_picture.jpg"
                alt="Juan Estrada"
                className={styles.heroImg}
            />
        </section>
    );
}

export default Hero;
