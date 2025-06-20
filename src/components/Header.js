import React, { useState, useEffect } from "react";

function Header() {
    const [showCV, setShowCV] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 700);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navLinks = [
        { label: "About", href: "#about" },
        { label: "Professional Profile", href: "#ProfessionalProfile" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
        { label: "Random Photos of Me", href: "#photos" },
        { label: "View CV", onClick: () => setShowCV(true) },
    ];

    const handleNavClick = (link) => {
        if (link.onClick) link.onClick();
        setMobileNavOpen(false);
    };

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="logo" style={{
                        fontWeight: 700,
                        fontSize: "1.7rem",
                        letterSpacing: "1px",
                        color: "#fff"
                    }}>
                        Juan Estrada
                    </div>
                    {/* Desktop Nav */}
                    {!isMobile && (
                        <ul
                            className="nav-links"
                            style={{
                                display: "flex",
                                gap: "10px",
                                listStyle: "none",
                                margin: 0,
                                padding: 0,
                                alignItems: "center",
                            }}
                        >
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    {link.href ? (
                                        <a
                                            href={link.href}
                                            className="nav-pill"
                                            style={{
                                                display: "block",
                                                padding: "8px 18px",
                                                borderRadius: "20px",
                                                background: "#2e2e36",
                                                color: "#fff",
                                                textDecoration: "none",
                                                fontWeight: 500,
                                                border: "1px solid #464655",
                                                transition: "background 0.18s, color 0.18s"
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <button
                                            className="nav-pill"
                                            style={{
                                                display: "block",
                                                padding: "8px 18px",
                                                borderRadius: "20px",
                                                background: "#2e2e36",
                                                color: "#fff",
                                                fontWeight: 500,
                                                border: "1px solid #464655",
                                                cursor: "pointer",
                                                transition: "background 0.18s, color 0.18s"
                                            }}
                                            onClick={link.onClick}
                                        >
                                            {link.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                    {/* Mobile: Hamburger + Let's Talk in a right-aligned flex row */}
                    {isMobile && (
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginLeft: "auto",
                        }}>
                            <button
                                className="mobile-nav-toggle"
                                onClick={() => setMobileNavOpen(open => !open)}
                                aria-label="Toggle navigation"
                                style={{
                                    background: "none",
                                    border: "none",
                                    fontSize: "2rem",
                                    color: "#fff",
                                    cursor: "pointer",
                                    zIndex: 1002
                                }}
                            >☰</button>
                            <a
                                href="#contact"
                                className="cta-nav"
                                style={{
                                    padding: "8px 18px",
                                    background: "#fff",
                                    color: "#222",
                                    borderRadius: "22px",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    boxShadow: "0 2px 10px #0002",
                                    transition: "background 0.18s, color 0.18s",
                                    fontSize: "1.02rem"
                                }}
                            >
                                Let's Talk
                            </a>
                        </div>
                    )}
                </nav>
                {/* Mobile Drawer Navigation: only rendered on mobile and only when open */}
                {isMobile && mobileNavOpen && (
                    <div className="mobile-nav-drawer open">
                        <button
                            className="close-mobile-nav"
                            onClick={() => setMobileNavOpen(false)}
                            aria-label="Close navigation"
                        >
                            ×
                        </button>
                        <ul className="mobile-nav-links">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    {link.href ? (
                                        <a
                                            href={link.href}
                                            className="nav-pill"
                                            onClick={() => handleNavClick(link)}
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <button
                                            className="nav-pill"
                                            onClick={() => handleNavClick(link)}
                                        >
                                            {link.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>

            {/* Modal for viewing CV */}
            {showCV && (
                <div
                    className="modal-overlay"
                    onClick={() => setShowCV(false)}
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
                        zIndex: 9999
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            background: "#222",
                            borderRadius: "12px",
                            padding: "0",
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                            overflow: "hidden"
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowCV(false)}
                            style={{
                                position: "absolute",
                                top: 8,
                                right: 12,
                                fontSize: 24,
                                background: "none",
                                border: "none",
                                color: "#fff",
                                cursor: "pointer",
                                zIndex: 10
                            }}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <iframe
                            src="/Juan_Estrada_CV.pdf"
                            title="Juan Estrada CV"
                            style={{
                                width: "80vw",
                                height: "80vh",
                                border: "none",
                                borderRadius: "8px"
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Responsive CSS */}
            <style>{`
                .navbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 9vw 12px 9vw;
                    background: none;
                    position: relative;
                }
                .nav-links {
                    display: flex;
                    gap: 10px;
                }
                .mobile-nav-toggle {
                    display: none;
                }
                .cta-nav {
                    margin-left: 12px;
                }
                @media (max-width: 900px) {
                    .navbar {
                        flex-direction: row;
                        align-items: center;
                        padding: 16px 6vw;
                    }
                }
                /* Mobile Styles */
                @media (max-width: 700px) {
                    .nav-links {
                        display: none !important;
                    }
                    .mobile-nav-toggle {
                        display: block !important;
                        z-index: 1002;
                    }
                    .logo {
                        font-size: 1.3rem !important;
                        z-index: 1003;
                    }
                    .mobile-nav-drawer {
                        position: fixed;
                        top: 0;
                        right: 0;
                        height: 100vh;
                        width: 74vw;
                        max-width: 350px;
                        background: #18181e;
                        box-shadow: -8px 0 32px #0004;
                        z-index: 1001;
                        padding-top: 46px;
                        transform: translateX(120%);
                        transition: transform 0.35s cubic-bezier(.82,.13,.37,1.12);
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                    }
                    .mobile-nav-drawer.open {
                        transform: translateX(0);
                    }
                    .close-mobile-nav {
                        background: none;
                        border: none;
                        color: #fff;
                        font-size: 2.1rem;
                        position: absolute;
                        top: 12px;
                        right: 22px;
                        cursor: pointer;
                        z-index: 1002;
                    }
                    .mobile-nav-links {
                        list-style: none;
                        margin: 0;
                        padding: 0 20px 0 0;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        gap: 22px;
                        align-items: flex-end;
                    }
                    .nav-pill {
                        background: #23232a;
                        border: 1px solid #464655;
                        border-radius: 21px;
                        padding: 11px 26px;
                        color: #fff;
                        font-weight: 500;
                        font-size: 1.09rem;
                        margin-bottom: 0;
                        text-align: right;
                        width: auto;
                        transition: background 0.17s, color 0.17s;
                        cursor: pointer;
                        box-shadow: 0 3px 12px #0002;
                        text-decoration: none;
                    }
                    .nav-pill:active,
                    .nav-pill:focus,
                    .nav-pill:hover {
                        background: #2a2a36;
                        color: #ffd66b;
                        border-color: #ffd66b;
                    }
                }
                @media (max-width: 440px) {
                    .mobile-nav-drawer {
                        width: 94vw;
                        max-width: 98vw;
                    }
                }
            `}</style>
        </>
    );
}

export default Header;
