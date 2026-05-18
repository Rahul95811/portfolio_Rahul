import React, { useState, useEffect } from 'react';

interface HeaderProps {
    activeSection: string;
}

const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'contact', title: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header className={`glass-nav ${scrolled ? 'scrolled-shadow' : ''}`} style={{ padding: scrolled ? '0.75rem 0' : '1.25rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#home" onClick={() => scrollToSection('home')} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', color: 'white', padding: '0.25rem 0.6rem', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}>K</span>
                    <span style={{ color: 'var(--text-main)' }}>Rahul</span>
                </a>
                
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                            style={{
                                position: 'relative',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                color: activeSection === link.id ? 'var(--color-primary)' : 'var(--text-secondary)',
                                padding: '0.25rem 0'
                            }}
                        >
                            {link.title}
                            {activeSection === link.id && (
                                <span style={{
                                    position: 'absolute',
                                    left: '0',
                                    bottom: '-2px',
                                    width: '100%',
                                    height: '2px',
                                    backgroundColor: 'var(--color-primary)',
                                    borderRadius: '9999px'
                                }}></span>
                            )}
                        </a>
                    ))}
                </div>

                <div className="mobile-menu">
                    <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', color: 'var(--text-main)', zIndex: 60, position: 'relative' }}>
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '28px', height: '28px' }}>
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu Overlay */}
            <div className="glass" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 40,
                display: menuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                transition: 'opacity 0.3s ease'
            }}>
                 {navLinks.map((link) => (
                     <a
                         key={link.id}
                         href={`#${link.id}`}
                         onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                         style={{
                             fontSize: '1.75rem',
                             fontFamily: 'var(--font-heading)',
                             fontWeight: 600,
                             color: activeSection === link.id ? 'var(--color-primary)' : 'var(--text-main)'
                         }}
                     >
                         {link.title}
                     </a>
                 ))}
            </div>
        </header>
    );
};

export default Header;