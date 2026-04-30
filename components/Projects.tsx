import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { GitHubIcon } from './Icons';

interface ProjectCardProps {
    title: string;
    description: string;
    tech: string[];
    imageUrl: string;
    githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, imageUrl, githubUrl }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 }) as [React.RefObject<HTMLDivElement>, boolean];
    const [parallaxY, setParallaxY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Only calculate effect if card is in viewport
                if (rect.top < viewportHeight && rect.bottom > 0) {
                    const elementCenter = rect.top + rect.height / 2;
                    const viewportCenter = viewportHeight / 2;
                    // Negative multiplier makes image move up as you scroll down
                    const offset = (elementCenter - viewportCenter) * -0.1;
                    setParallaxY(offset);
                }
            }
        };

        // initial calc
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [ref]);


    return (
        <div ref={ref} className={`group [perspective:1000px] w-full max-w-sm mx-auto transition-all duration-500 ease-out hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="relative h-96 w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img 
                        className="h-full w-full object-cover shadow-xl shadow-black/40" 
                        src={imageUrl} 
                        alt={title} 
                        style={{
                            transform: `scale(1.2) translateY(${parallaxY}px)`,
                            transition: 'transform 0.3s ease-out',
                        }}
                    />
                     <div className="absolute inset-0 bg-black/60 rounded-xl flex flex-col justify-end p-6">
                         <h3 className="text-3xl font-orbitron font-bold text-white neon-text-cyan">{title}</h3>
                         <p className="text-lg font-light text-gray-200 mt-2">Hover to see details</p>
                    </div>
                </div>
                {/* Back of card */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-[#0a0a1a] px-6 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] glass-effect neon-box-shadow">
                    <div className="flex min-h-full flex-col items-center justify-center">
                        <h1 className="text-2xl md:text-3xl font-orbitron font-bold text-cyan-400">{title}</h1>
                        <p className="mt-2 text-sm md:text-base text-gray-300">{description}</p>
                        <div className="my-4 flex flex-wrap justify-center gap-2">
                            {tech.map((t, i) => <span key={i} className="bg-purple-900/50 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
                        </div>
                        <a 
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 btn-glow inline-flex items-center gap-2 font-orbitron text-sm md:text-lg font-bold px-4 md:px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-full transition-all duration-150 hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95"
                        >
                            <GitHubIcon className="w-5 h-5 md:w-6 md:h-6" />
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 }) as [React.RefObject<HTMLElement>, boolean];

    const projects = [
        {
            title: 'ADVANCED-ENCRYPTION-TOOL',
            description: 'A Python-based toolkit providing advanced encryption algorithms for secure file and message encryption.',
            tech: ['Python', 'Crypto', 'CLI'],
            imageUrl: '/portfolio-kilaparthi-rahul/images/ADVANCED-ENCRYPTION-TOOL.png',
            githubUrl: 'https://github.com/Rahulkilaparthi/ADVANCED-ENCRYPTION-TOOL.git'
        },
        {
            title: 'PENETRATION-TESTING-TOOLKIT',
            description: 'Collection of scripts and tools to assist in penetration testing and security assessments.',
            tech: ['Python', 'Security', 'Automation'],
            imageUrl: '/portfolio-kilaparthi-rahul/images/PENETRATION-TESTING-TOOLKIT.png',
            githubUrl: 'https://github.com/Rahulkilaparthi/PENETRATION-TESTING-TOOLKIT.git'
        },
        {
            title: 'FILE-INTEGRITY-CHECKER',
            description: 'A utility to verify file integrity using checksums and detect tampering across systems.',
            tech: ['Python', 'Hashing', 'CLI'],
            imageUrl: '/portfolio-kilaparthi-rahul/images/file-integrity-checker.png',
            githubUrl: 'https://github.com/Rahulkilaparthi/FILE-INTEGRITY-CHECKER.git'
        },
        {
            title: 'WEB-APPLICATION-VULNERABILITY-SCANNER',
            description: 'A scanner that checks web applications for common vulnerabilities and generates reports.',
            tech: ['Python', 'Web', 'Security'],
            imageUrl: '/portfolio-kilaparthi-rahul/images/WEB-APPLICATION-VULNERABILITY-SCANNER.png',
            githubUrl: 'https://github.com/Rahulkilaparthi/WEB-APPLICATION-VULNERABILITY-SCANNER.git'
        }
        ,
        {
            title: 'Granthalaya – Smart Library System | March 2025',
            description: 'Developing full-stack library management system with dashboards, search, sorting, and barcode tracking.',
            tech: ['Chart.js', 'FullCalendar', 'JavaScript', 'HTML/CSS'],
            imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1974&auto=format&fit=crop',
            githubUrl: 'https://github.com/Rahulkilaparthi/Granthalaya'
        },
        {
            title: 'Attendance Calculator Pro',
            description: 'A simple, static attendance calculator application built with React, Vite, and Tailwind CSS.',
            tech: ['React', 'Vite', 'Tailwind CSS'],
            imageUrl: '/portfolio-kilaparthi-rahul/images/attendance-calculator.png',
            githubUrl: 'https://github.com/Rahulkilaparthi/Attendance-Calculator-Pro.git'
        }
    ];

    return (
        <section className="py-20" id="projects">
            <div className="container mx-auto px-6">
                 <h2 ref={ref} className={`font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-cyan-400 neon-text-cyan">{'<'}</span>
                    Projects
                    <span className="text-cyan-400 neon-text-cyan">{'/>'}</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-12">
                    {projects.map((p) => (
                        <ProjectCard
                            key={p.title}
                            title={p.title}
                            description={p.description}
                            tech={p.tech}
                            imageUrl={p.imageUrl}
                            githubUrl={p.githubUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(Projects);