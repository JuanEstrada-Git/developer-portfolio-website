import React, { useState } from "react";

    function Carousel() {
        const [expandedImg, setExpandedImg] = useState(null);
        const [startIdx, setStartIdx] = useState(0);

        // Number of images to show at once
        const visibleCount = 4;

        const images = [
            { src: "/assets/juan1.jpg", alt: "Juan Estrada 1" },
            { src: "/assets/juan2.jpg", alt: "Juan Estrada 2" },
            { src: "/assets/juan3.jpg", alt: "Juan Estrada 3" },
            { src: "/assets/juan4.jpg", alt: "Juan Estrada 4" },
            { src: "/assets/juan5.jpg", alt: "Juan Estrada 5" },
            { src: "/assets/juan6.jpg", alt: "Juan Estrada 6" }
        ];

        // Arrow navigation logic
        const handlePrev = () => {
            setStartIdx(prev => Math.max(prev - visibleCount, 0));
        };

        const handleNext = () => {
            setStartIdx(prev =>
                Math.min(prev + visibleCount, images.length - visibleCount)
            );
        };

        // Slice the array to show only what's visible
        const visibleImages = images.slice(startIdx, startIdx + visibleCount);

        return (
            <section id="photos" className="carousel-section">
                <h2>Random Photos of Me</h2>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px"
                }}>
                    <button
                        onClick={handlePrev}
                        disabled={startIdx === 0}
                        style={{
                            background: "none",
                            border: "none",
                            fontSize: "2rem",
                            color: "#fff",
                            cursor: startIdx === 0 ? "not-allowed" : "pointer",
                            opacity: startIdx === 0 ? 0.3 : 1,
                            transition: "opacity 0.2s"
                        }}
                        aria-label="Previous"
                    >
                        &#8592;
                    </button>
                    <div style={{
                        display: "flex",
                        gap: "24px",
                        overflow: "hidden",
                        width: `${visibleCount * 120}px`, // adjust for image size
                        minHeight: "130px"
                    }}>
                        {visibleImages.map((img, idx) => (
                            <img
                                key={startIdx + idx}
                                src={img.src}
                                alt={img.alt}
                                className="carousel-img"
                                onClick={() => setExpandedImg(img)}
                                style={{
                                    cursor: "pointer",
                                    width: "110px",
                                    height: "110px",
                                    borderRadius: "16px",
                                    objectFit: "cover",
                                    boxShadow: "0 2px 10px #0005"
                                }}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={startIdx >= images.length - visibleCount}
                        style={{
                            background: "none",
                            border: "none",
                            fontSize: "2rem",
                            color: "#fff",
                            cursor: startIdx >= images.length - visibleCount ? "not-allowed" : "pointer",
                            opacity: startIdx >= images.length - visibleCount ? 0.3 : 1,
                            transition: "opacity 0.2s"
                        }}
                        aria-label="Next"
                    >
                        &#8594;
                    </button>
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

