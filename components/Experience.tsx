import React from 'react';

interface ExperienceItem {
    role: string;
    organization: string;
    period: string;
    technologies: string[];
    bullets: string[];
}

const experiences: ExperienceItem[] = [
    {
        role: 'Research Lead & Data Analyst',
        organization: 'Satellite-Based Air Quality Analysis',
        period: '2024 - 2025',
        technologies: ['Google Earth Engine', 'MODIS', 'MERRA-2'],
        bullets: [
            'Processed MODIS MAIAC (1 km) AOD data and derived PM2.5 using aerosol scaling models.',
            'Analyzed MERRA-2 PM2.5 and Black Carbon (0.5° × 0.625°) for regional trend comparison.',
            'Built automated scripts for time-series generation, spatial clipping, and district-level comparison.'
        ]
    },
    {
        role: 'Cybersecurity Intern',
        organization: 'Teachnook',
        period: 'Aug 2024 - Sep 2024',
        technologies: ['Ethical Hacking', 'Network Security', 'Threat Detection'],
        bullets: [
            'Gained hands-on experience in cybersecurity principles and frameworks.',
            'Worked on ethical hacking, network security, and threat detection mechanisms.',
            'Completed various cybersecurity challenge labs and real-world case studies.'
        ]
    },
    {
        role: 'Bug Bounty Hunter',
        organization: 'Self-Driven',
        period: '2024 - Present',
        technologies: ['OWASP Top 10', 'Burp Suite', 'Kali Linux', 'Vulnerability Disclosure'],
        bullets: [
            'Identified and responsibly disclosed HTML Injection, XSS, CSRF, and SQL Injection vulnerabilities.',
            'Disclosed HTML Injection vulnerability on a premier football club website.',
            'Practiced professional security research and testing using Burp Suite and Kali Linux.'
        ]
    },
    {
        role: 'Cybersecurity Research & Development',
        organization: 'Independent',
        period: '2021 - Present',
        technologies: ['Wi-Fi Penetration', 'Phishing Simulations', 'DDoS Defense', 'Automation'],
        bullets: [
            'Explored Wi-Fi penetration testing, phishing simulations, and DDoS defense structures.',
            'Developed automated scripts to assist in vulnerability discovery and patch checking.'
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section className="section" id="experience" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--color-border)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Experience Highlights</h2>
                    <p className="section-subtitle">A record of research initiatives, professional internships, and self-driven threat discovery.</p>
                </div>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '3rem auto 0 auto', padding: '0 1rem' }}>
                    {/* Central Vertical Timeline Line */}
                    <div style={{ 
                        position: 'absolute', 
                        left: '20px', 
                        top: '0', 
                        bottom: '0', 
                        width: '2px', 
                        background: 'linear-gradient(to bottom, var(--color-primary), var(--color-accent))',
                        opacity: 0.3 
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {experiences.map((exp, index) => (
                            <div key={index} style={{ position: 'relative', paddingLeft: '45px' }} className="fade-in">
                                {/* Timeline Bullet Point Circle */}
                                <div style={{ 
                                    position: 'absolute', 
                                    left: '11px', 
                                    top: '6px', 
                                    width: '20px', 
                                    height: '20px', 
                                    borderRadius: '50%', 
                                    background: 'var(--bg-primary)', 
                                    border: '3px solid var(--color-primary)',
                                    boxShadow: '0 0 10px rgba(37, 99, 235, 0.2)',
                                    zIndex: 2 
                                }}></div>

                                {/* Main Card Container */}
                                <div 
                                    className="card" 
                                    style={{ 
                                        padding: '2rem', 
                                        borderRadius: '16px', 
                                        backgroundColor: 'var(--bg-secondary)', 
                                        border: '1px solid var(--color-border)',
                                        boxShadow: 'var(--shadow-sm)',
                                        transition: 'all var(--transition-normal)'
                                    }}
                                >
                                    {/* Header Row */}
                                    <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }} className="flex-col-sm">
                                        <div style={{ flexGrow: 1 }}>
                                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 0.25rem 0', fontFamily: 'var(--font-heading)' }}>
                                                {exp.role}
                                            </h3>
                                            <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                                                {exp.organization}
                                            </div>
                                        </div>
                                        <div>
                                            <span style={{ 
                                                fontSize: '0.85rem', 
                                                fontWeight: 600, 
                                                color: 'var(--color-accent)', 
                                                backgroundColor: 'rgba(124, 58, 237, 0.08)', 
                                                padding: '0.35rem 0.8rem', 
                                                borderRadius: '20px',
                                                border: '1px solid rgba(124, 58, 237, 0.15)',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Tech Stack Badges */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="badge badge-primary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Bullet Points */}
                                    <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
