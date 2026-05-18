import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedInIcon style={{ width: '22px', height: '22px' }} />, url: 'https://www.linkedin.com/in/kilaparthi-rahul-63b13a293' },
    { name: 'GitHub', icon: <GitHubIcon style={{ width: '22px', height: '22px' }} />, url: 'https://github.com/Rahulkilaparthi' },
    { name: 'Email', icon: <MailIcon style={{ width: '22px', height: '22px' }} />, url: 'mailto:rahulkilaparthi7@gmail.com' },
];

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--color-border)', padding: '3rem 0' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            style={{
                                color: 'var(--text-secondary)',
                                transition: 'all var(--transition-fast)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            className="footer-link"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, fontWeight: 500 }}>
                    &copy; {new Date().getFullYear()} Kilaparthi Rahul. All rights reserved.
                </p>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0 }}>
                    Designed & Built with absolute security & precision.
                </p>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .footer-link:hover {
                    color: var(--color-primary) !important;
                    transform: translateY(-2px);
                }
            `}} />
        </footer>
    );
};

export default Footer;