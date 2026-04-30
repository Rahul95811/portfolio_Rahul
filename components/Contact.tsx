import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { MailIcon, LinkedInIcon, GitHubIcon } from './Icons';

interface ContactLinkProps {
    href: string;
    icon: React.ReactNode;
    text: string;
    delay: string;
}

const ContactButton: React.FC<ContactLinkProps> = ({ href, icon, text, delay }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLAnchorElement>({ threshold: 0.2 });
    return (
        <a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: delay }}
            className={`group btn-glow w-full md:w-auto flex items-center justify-center gap-3 font-orbitron text-lg font-bold px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full transition-all duration-150 hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <span className="transition-transform duration-150 ease-in-out group-hover:-translate-y-1">
                {icon}
            </span>
            <span>{text}</span>
        </a>
    );
};


const Contact: React.FC = () => {
    const [titleRef, isVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });

    const contactLinks = [
        { href: 'mailto:rahulkilaparthi7@gmail.com', icon: <MailIcon className="w-6 h-6" />, text: 'Email Me', delay: '100ms' },
        { href: 'https://www.linkedin.com/in/kilaparthi-rahul-63b13a293', icon: <LinkedInIcon className="w-6 h-6" />, text: 'LinkedIn', delay: '200ms' },
        { href: 'https://github.com/Rahulkilaparthi', icon: <GitHubIcon className="w-6 h-6" />, text: 'GitHub', delay: '300ms' },
    ];

    return (
        <section className="py-20 bg-black bg-opacity-20">
            <div className="container mx-auto px-6">
                <h2 ref={titleRef} className={`font-orbitron text-4xl md:text-5xl font-bold text-center mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-purple-500 neon-text-purple">{'<'}</span>
                    Contact Me
                    <span className="text-purple-500 neon-text-purple">{'/>'}</span>
                </h2>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
                   {contactLinks.map(link => (
                       <ContactButton key={link.text} {...link} />
                   ))}
                </div>
                 <p className="text-center text-gray-400 mt-16 max-w-xl mx-auto">
                    Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
            </div>
        </section>
    );
};

export default React.memo(Contact);