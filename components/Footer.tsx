import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedInIcon className="w-7 h-7" />, url: 'https://www.linkedin.com/in/kilaparthi-rahul-63b13a293' },
    { name: 'GitHub', icon: <GitHubIcon className="w-7 h-7" />, url: 'https://github.com/Rahulkilaparthi' },
    { name: 'Email', icon: <MailIcon className="w-7 h-7" />, url: 'mailto:rahulkilaparthi7@gmail.com' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-black bg-opacity-30 py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="text-gray-400 hover:text-cyan-400 transition-all duration-150 transform hover:scale-125 hover:[text-shadow:0_0_8px_rgba(0,255,255,0.8)]"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <p className="font-light">
                    &copy; {new Date().getFullYear()} Kilaparthi Rahul. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default React.memo(Footer);