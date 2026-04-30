
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { CertificateIcon } from './Icons';

interface Certification {
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
}

const linkedInCertUrl = 'https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/details/certifications/';

const certificationsData: Certification[] = [
    { title: 'Cyber security', issuer: 'Skill India Digital Hub', date: 'Oct 2025', credentialUrl: linkedInCertUrl },
    { title: 'Adobe India Hackathon Participant', issuer: 'Unstop', date: 'Aug 2025', credentialUrl: linkedInCertUrl },
    { title: 'ORACLE certification', issuer: 'Oracle', date: 'Aug 2025', credentialUrl: linkedInCertUrl },
    { title: 'Power BI Workshop', issuer: 'United Latino Students Association', date: 'Aug 2025', credentialUrl: linkedInCertUrl },
    { title: 'TATA Forage Virtual Experience', issuer: 'Forage', date: 'Jul 2025', credentialUrl: linkedInCertUrl },
    { title: 'Ethical Hacking', issuer: 'EduSkills Foundation', date: 'Jun 2025', credentialUrl: linkedInCertUrl },
    { title: 'Cybersecurity', issuer: 'EduSkills Foundation', date: 'May 2025', credentialUrl: linkedInCertUrl },
    { title: 'Cybersecurity - Ethical Hacking', issuer: 'CODTECH IT SOLUTIONS', date: 'Apr 2025', credentialUrl: linkedInCertUrl },
    { title: 'TCS iON Career Edge - IT for Non-IT', issuer: 'Tata Consultancy Services', date: 'Jan 2025', credentialUrl: linkedInCertUrl },
    { title: 'TCS iON Career Edge - Young Professional', issuer: 'Tata Consultancy Services', date: 'Jan 2025', credentialUrl: linkedInCertUrl },
    { title: 'Ethical Hacking Essentials (EHE)', issuer: 'United Latino Students Association', date: 'Dec 2024', credentialUrl: linkedInCertUrl },
    { title: 'Cybersecurity', issuer: 'Teachnook', date: 'Sep 2024', credentialUrl: linkedInCertUrl },
];

const CertificationCard: React.FC<{ cert: Certification, index: number }> = ({ cert, index }) => {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div 
            ref={ref}
            className={`glass-effect p-6 rounded-xl border border-purple-500/30 transition-all duration-500 ease-out flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{transitionDelay: `${index * 100}ms`}}
        >
            <div className="flex items-start gap-4">
                <span className="text-cyan-400 mt-1"><CertificateIcon className="w-8 h-8"/></span>
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-purple-400 font-semibold">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
            </div>
            <div className="mt-auto pt-6">
                 {cert.credentialUrl && (
                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow inline-flex items-center gap-2 font-orbitron text-sm font-bold px-5 py-2 border-2 border-cyan-400/80 text-cyan-400 rounded-full transition-all duration-150 hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95"
                    >
                        Show Credential
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    )
}


const Certifications: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 });
    return (
        <section className="py-20 bg-black bg-opacity-20">
            <div className="container mx-auto px-6">
                <h2 ref={ref} className={`font-orbitron text-4xl md-text-5xl font-bold text-center mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-purple-500 neon-text-purple">{'<'}</span>
                    Certifications
                    <span className="text-purple-500 neon-text-purple">{'/>'}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationsData.map((cert, index) => (
                        <CertificationCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(Certifications);