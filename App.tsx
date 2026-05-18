import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
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
        <div className="relative w-full min-h-screen">
            {/* Animated Background Blobs */}
            <div className="gradient-blob blob-1"></div>
            <div className="gradient-blob blob-2"></div>

            <Header activeSection={activeSection} />
            <main className="relative z-10">
                <div id="home"><Hero /></div>
                <div id="about"><About /></div>
                <div id="skills"><Skills /></div>
                <div id="experience"><Experience /></div>
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