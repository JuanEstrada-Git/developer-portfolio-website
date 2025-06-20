import React, { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        // Formspree endpoint — replace with your real one!
        const endpoint = "https://formspree.io/f/movwnlnp";

        const response = await fetch(endpoint, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setSubmitted(true);
            setTimeout(() => {
                window.location.href = "/";
            }, 2000); // Redirect after 2 seconds (2000 milliseconds)
        } else {
            alert("Oops! Something went wrong.");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            {submitted ? (
                <p>Thank you! Your message has been sent. 🌟</p>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            )}
        </section>
    );
}

export default Contact;
