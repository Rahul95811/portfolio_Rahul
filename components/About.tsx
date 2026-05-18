import React from 'react';

const EducationCard: React.FC<{ institution: string, degree: string, period: string, grade: string }> = ({ institution, degree, period, grade }) => {
    return (
        <div className="card" style={{ padding: '1.5rem', border: '1px solid var(--color-border)', marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ background: 'rgba(124, 58, 237, 0.08)', color: 'var(--color-accent)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: 'auto' }}><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
            </div>
            <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{institution}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{period}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 500, margin: '0.15rem 0' }}>{degree}</p>
                <div className="badge badge-primary" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{grade}</div>
            </div>
        </div>
    );
}

const About: React.FC = () => {
    return (
        <section className="section" id="about" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                    <p className="section-subtitle">A balanced developer & cybersecurity enthusiast building modern, highly secure digital products.</p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
                    {/* Left Column: Summary & Goals */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, #ffffff, #f8fafc)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Professional Summary</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                I am a passionate and self-driven cybersecurity enthusiast with hands-on experience in ethical hacking, network security, and bug bounty hunting. Currently pursuing my B.Tech in Computer Science, I am dedicated to exploring the vast landscape of cybersecurity and developing robust solutions to complex security challenges.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                                My goal is to build secure, scalable applications by integrating proactive defense and modern secure-coding methodologies directly into full stack workflows.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Education Timeline */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Education</h3>
                        <EducationCard
                            institution="GITAM University"
                            degree="B.Tech Computer Science and Engineering"
                            period="2023 - 2027"
                            grade="CGPA - 8.87"
                        />
                        <EducationCard
                            institution="Sri Gayatri Jr College"
                            degree="Intermediate"
                            period="2021 - 2023"
                            grade="Percentage - 90.1%"
                        />
                        <EducationCard
                            institution="DR KKR Gowtham School"
                            degree="Schooling (SSC)"
                            period="2020 - 2021"
                            grade="Percentage - 96%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;