function Carousel() {
    return (
        <section id="photos" className="carousel-section">
            <h2>Random Photos of Me</h2>
            <div className="carousel">
                <img src="/assets/juan1.jpg" alt="Juan Estrada 1" className="carousel-img" />
                <img src="/assets/juan2.jpg" alt="Juan Estrada 2" className="carousel-img" />
                {/* Add more images for the carousel! */}
            </div>
        </section>
    );
}
export default Carousel;
