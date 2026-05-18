import React from 'react';
import { GitHubIcon } from './Icons';

interface Project {
    title: string;
    description: string;
    tech: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, tech, imageUrl, githubUrl, liveUrl }) => {
    return (
        <div 
            className="card" 
            style={{ 
                padding: '0', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                border: '1px solid var(--color-border)',
                transition: 'all var(--transition-normal)'
            }}
        >
            {/* Project Image Banner */}
            <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
                <img 
                    src={imageUrl} 
                    alt={title} 
                    style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform var(--transition-normal)' 
                    }}
                    className="project-img"
                />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <span className="badge badge-primary" style={{ backgroundColor: 'white', backdropFilter: 'blur(4px)', boxShadow: 'var(--shadow-sm)' }}>
                        Featured
                    </span>
                </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                        {title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {description}
                    </p>
                </div>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                    {tech.map((t, i) => (
                        <span key={i} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                {(githubUrl || liveUrl) && (
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                        {githubUrl && (
                            <a 
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                style={{ flex: 1, padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                <GitHubIcon style={{ width: '16px', height: '16px' }} />
                                GitHub
                            </a>
                        )}
                        {liveUrl && (
                            <a 
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ flex: 1, padding: '0.5rem 1rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: 'Granthalaya – Smart Library System',
            description: 'Developing full-stack library management system with interactive charts, event calendar, barcode scanner, and modern user dashboard.',
            tech: ['Java', 'Spring Boot', 'JavaScript', 'HTML/CSS', 'MySQL'],
            imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop'
        },
        {
            title: 'LinkShield – Android URL Security Application',
            description: 'Mobile utility built to analyze and check URLs against threat databases, warning users before opening malicious links.',
            tech: ['Android', 'Kotlin', 'Firebase', 'Security API'],
            imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop'
        },
        {
            title: 'Advanced AES-256 File Encryption Tool',
            description: 'Python desktop app implementing high-grade AES-256 encryption to securely lock/unlock personal files and directories.',
            tech: ['Python', 'Cryptography', 'PyQt', 'Security'],
            imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
            githubUrl: 'https://github.com/Rahulkilaparthi/ADVANCED-ENCRYPTION-TOOL.git'
        },
        {
            title: 'Attendance Calculator Pro',
            description: 'A beautifully structured utility for university students to simulate and plan their required attendance criteria.',
            tech: ['React', 'Vite', 'Vanilla CSS', 'Responsive UI'],
            imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop',
            githubUrl: 'https://github.com/Rahulkilaparthi/Attendance-Calculator-Pro.git'
        },
        {
            title: 'Vulnerability Scanner Toolkit',
            description: 'A modular penetration testing helper built to scan local web servers for OWASP Top 10 vulnerabilities automatically.',
            tech: ['Python', 'Network Security', 'Automation', 'OSINT'],
            imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
            githubUrl: 'https://github.com/Rahulkilaparthi/WEB-APPLICATION-VULNERABILITY-SCANNER.git'
        }
    ];

    return (
        <section className="section" id="projects" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Featured Projects</h2>
                    <p className="section-subtitle">Real-world applications combining strong security fundamentals with highly functional user experiences.</p>
                </div>
                <div className="grid grid-cols-1 md-grid-cols-2 grid-cols-3" style={{ gap: '2rem' }}>
                    {projects.map((p, idx) => (
                        <ProjectCard
                            key={idx}
                            title={p.title}
                            description={p.description}
                            tech={p.tech}
                            imageUrl={p.imageUrl}
                            githubUrl={p.githubUrl}
                            liveUrl={p.liveUrl}
                        />
                    ))}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .card:hover .project-img {
                    transform: scale(1.05);
                }
            `}} />
        </section>
    );
};

export default Projects;