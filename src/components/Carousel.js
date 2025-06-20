import React, { useState } from "react";

function Carousel() {
    const [expandedImg, setExpandedImg] = useState(null);

    const images = [
        { src: "/assets/juan1.jpg", alt: "Juan Estrada 1" },
        { src: "/assets/juan2.jpg", alt: "Juan Estrada 2" },
        { src: "/assets/juan3.jpg", alt: "Juan Estrada 3" }
    ];

    return (
        <section id="photos" className="carousel-section">
            <h2>Random Photos of Me</h2>
            <div className="carousel">
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img.src}
                        alt={img.alt}
                        className="carousel-img"
                        onClick={() => setExpandedImg(img)}
                        style={{ cursor: "pointer" }}
                    />
                ))}
            </div>

            {expandedImg && (
                <div
                    className="modal-overlay"
                    onClick={() => setExpandedImg(null)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        background: "rgba(0,0,0,0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            background: "#222",
                            borderRadius: "12px",
                            padding: "16px",
                            maxWidth: "90vw",
                            maxHeight: "90vh"
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setExpandedImg(null)}
                            style={{
                                position: "absolute",
                                top: 8,
                                right: 12,
                                fontSize: 24,
                                background: "none",
                                border: "none",
                                color: "#fff",
                                cursor: "pointer"
                            }}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <img
                            src={expandedImg.src}
                            alt={expandedImg.alt}
                            style={{
                                maxWidth: "80vw",
                                maxHeight: "80vh",
                                borderRadius: "8px",
                                boxShadow: "0 0 24px rgba(0,0,0,0.8)"
                            }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Carousel;
