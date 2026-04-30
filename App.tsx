import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <div className="relative bg-[#050816] w-full min-h-screen overflow-hidden">
            <div
                className="pointer-events-none fixed inset-0 z-50 transition duration-300"
                style={{
                    background: `radial-gradient(600px at ${cursorPos.x}px ${cursorPos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
                }}
            />

            <Header activeSection={activeSection} />
            <main className="relative z-10">
                <div id="home"><Hero /></div>
                <div id="about"><About /></div>
                <div id="skills"><Skills /></div>
                <div id="projects"><Projects /></div>
                <div id="certifications"><Certifications /></div>
                <div id="contact"><Contact /></div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default App;