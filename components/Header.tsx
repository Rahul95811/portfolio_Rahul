import React, { useState, useEffect } from 'react';

interface HeaderProps {
    activeSection: string;
}

const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'contact', title: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" onClick={() => scrollToSection('home')} className="font-orbitron text-2xl font-bold tracking-widest text-white neon-text-cyan animate-pulse">
                    KR
                </a>
                
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                            className={`relative text-lg font-medium transition-colors duration-150 ${
                                activeSection === link.id ? 'text-cyan-400 neon-text-cyan' : 'text-gray-300 hover:text-cyan-400'
                            }`}
                        >
                            {link.title}
                            {activeSection === link.id && (
                                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 rounded-full animate-pulse"></span>
                            )}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none z-50 relative">
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            
            {/* Mobile Menu */}
             <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-40 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                 <div className="flex flex-col items-center justify-center h-full space-y-8">
                     {navLinks.map((link) => (
                         <a
                             key={link.id}
                             href={`#${link.id}`}
                             onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                             className={`text-2xl font-orbitron transition-colors duration-150 ${
                                 activeSection === link.id ? 'text-cyan-400 neon-text-cyan' : 'text-gray-300 hover:text-cyan-400'
                             }`}
                         >
                             {link.title}
                         </a>
                     ))}
                 </div>
            </div>
        </header>
    );
};

export default Header;