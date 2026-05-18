import React from 'react';
import { MailIcon, LinkedInIcon, GitHubIcon } from './Icons';

interface ContactLink {
    href: string;
    icon: React.ReactNode;
    text: string;
    color: string;
    bg: string;
}

const ContactButton: React.FC<ContactLink> = ({ href, icon, text, color, bg }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ 
                padding: '0.85rem 2rem', 
                fontSize: '1rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '0.75rem',
                flex: '1 1 200px',
                borderRadius: '12px',
                backgroundColor: bg,
                color: color,
                border: `1px solid var(--color-border)`,
                fontWeight: 600
            }}
        >
            {icon}
            <span>{text}</span>
        </a>
    );
};

const Contact: React.FC = () => {
    const contactLinks: ContactLink[] = [
        { href: 'mailto:rahulkilaparthi7@gmail.com', icon: <MailIcon style={{ width: '20px', height: '20px' }} />, text: 'Email Me', color: 'var(--color-primary)', bg: 'rgba(37, 99, 235, 0.04)' },
        { href: 'https://www.linkedin.com/in/kilaparthi-rahul-63b13a293', icon: <LinkedInIcon style={{ width: '20px', height: '20px' }} />, text: 'LinkedIn', color: 'var(--color-accent)', bg: 'rgba(124, 58, 237, 0.04)' },
        { href: 'https://github.com/Rahulkilaparthi', icon: <GitHubIcon style={{ width: '20px', height: '20px' }} />, text: 'GitHub', color: '#0f172a', bg: '#f8fafc' },
    ];

    return (
        <section className="section" id="contact" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--color-border)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">Interested in collaborating or discussing security, software development, or bug bounty work? Drop me a message.</p>
                </div>

                <div 
                    className="card"
                    style={{
                        padding: '3rem 2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                        border: '1px solid var(--color-border)',
                        textAlign: 'center',
                        boxShadow: 'var(--shadow-md)'
                    }}
                >
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
                        Let's build something secure together
                    </h3>
                    
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: 0 }}>
                        I'm always open to discussing new projects, auditing web apps, exploring job opportunities, or simply exchanging ideas about modern cybersecurity.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', width: '100%', justifyContent: 'center' }}>
                       {contactLinks.map((link, idx) => (
                           <ContactButton key={idx} {...link} />
                       ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;