import React from 'react';
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

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => {
    return (
        <div 
            className="card"
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '1.5rem',
                border: '1px solid var(--color-border)',
                transition: 'all var(--transition-normal)'
            }}
        >
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(124, 58, 237, 0.08)', color: 'var(--color-accent)', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CertificateIcon className="w-5 h-5"/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: 0, fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
                        {cert.title}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                        {cert.issuer}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {cert.date}
                    </span>
                </div>
            </div>
            {cert.credentialUrl && (
                <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline w-full"
                        style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                    >
                        Verify Credential
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '12px', height: '12px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            )}
        </div>
    );
};

const Certifications: React.FC = () => {
    return (
        <section className="section" id="certifications" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Professional Certifications</h2>
                    <p className="section-subtitle">A collection of industry-recognized credentials reflecting specialized knowledge in security & development.</p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2 grid-cols-3" style={{ gap: '1.5rem' }}>
                    {certificationsData.map((cert, index) => (
                        <CertificationCard key={index} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;