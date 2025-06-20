function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <p>
                Interested in working together? Have questions? Let’s connect.<br />
                <a href="mailto:juan@pmadept.com" className="email-link">juan@pmadept.com</a>
            </p>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}
export default Contact;
