function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">Juan Estrada</div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#ProfessionalProfile">Professional Profile</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#photos">Random Photos of Me</a></li>
                </ul>
                <a href="#contact" className="cta-nav">Let's Talk</a>
            </nav>
        </header>
    );
}
export default Header;
