
import React from 'react';

const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', position: 'relative', overflow: 'hidden' }}>
            <div className="container flex-col-md" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }}>
                {/* Left Side: Professional Intro */}
                <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left', zIndex: 2 }}>
                    <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', borderRadius: '9999px', background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.15)' }}>
                        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', animation: 'pulse 2s infinite' }}></span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Available for Internships & Projects</span>
                    </div>

                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                        Hi, I'm <span style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kilaparthi Rahul</span>
                    </h1>

                    <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>
                        Cybersecurity Enthusiast & <br/>Full Stack Developer
                    </h2>

                    <p className="text-secondary" style={{ fontSize: '1.1rem', maxWidth: '580px', margin: 0, lineHeight: 1.6 }}>
                        Building secure, scalable, and modern applications with clean user experiences and intelligent systems.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                        <a 
                            href="#projects" 
                            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                            className="btn btn-primary"
                        >
                            View Projects
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                        <a 
                            href="./resume.pdf" 
                            className="btn btn-outline"
                            download="Resume.pdf"
                        >
                            Download Resume
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                        </a>
                    </div>
                </div>

                {/* Right Side: Professional Illustration */}
                <div className="fade-in floating" style={{ display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Background Decorative Rings */}
                        <div style={{ position: 'absolute', width: '120%', height: '120%', borderRadius: '50%', border: '1px dashed rgba(37, 99, 235, 0.15)', animation: 'spin 60s linear infinite' }}></div>
                        <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '1px solid rgba(124, 58, 237, 0.1)', animation: 'spin 40s linear infinite reverse' }}></div>
                        
                        {/* Elegant SaaS-style Abstract SVG Graphic */}
                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '90%', height: '90%', filter: 'drop-shadow(0px 20px 40px rgba(15, 23, 42, 0.08))' }}>
                            <defs>
                                <linearGradient id="rectGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="var(--color-primary)" />
                                    <stop offset="100%" stopColor="var(--color-accent)" />
                                </linearGradient>
                                <linearGradient id="bgGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#ffffff" />
                                    <stop offset="100%" stopColor="#f8fafc" />
                                </linearGradient>
                                <linearGradient id="shieldGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#10B981" />
                                    <stop offset="100%" stopColor="#059669" />
                                </linearGradient>
                            </defs>
                            {/* Central Rounded Box (SaaS Dashboard Card mock) */}
                            <rect x="20" y="30" width="160" height="140" rx="24" fill="url(#bgGrad)" stroke="#e2e8f0" strokeWidth="2" />
                            {/* Decorative Dashboard Lines & Dots */}
                            <circle cx="45" cy="55" r="5" fill="#EF4444" />
                            <circle cx="60" cy="55" r="5" fill="#F59E0B" />
                            <circle cx="75" cy="55" r="5" fill="#10B981" />
                            
                            <rect x="40" y="80" width="120" height="8" rx="4" fill="#e2e8f0" />
                            <rect x="40" y="96" width="90" height="8" rx="4" fill="#e2e8f0" />
                            <rect x="40" y="112" width="105" height="8" rx="4" fill="#e2e8f0" />

                            {/* Floating Cybersecurity Shield Card */}
                            <g style={{ transform: 'translate(100px, 80px)' }}>
                                <rect x="0" y="0" width="80" height="80" rx="20" fill="url(#bgGrad)" stroke="#e2e8f0" strokeWidth="1.5" style={{ filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.06))' }} />
                                <path d="M40 22C40 22 25 27 25 37C25 47 35 55 40 58C45 55 55 47 55 37C55 27 40 22 40 22Z" fill="url(#shieldGrad)" opacity="0.15" />
                                <path d="M40 25C40 25 28 29.5 28 38C28 46.5 36 53 40 55.5C44 53 52 46.5 52 38C52 29.5 40 25 40 25Z" stroke="url(#shieldGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M37 40L39 42L43 37" stroke="url(#shieldGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </g>

                            {/* Floating Code Card */}
                            <g style={{ transform: 'translate(10px, 100px)' }}>
                                <rect x="0" y="0" width="90" height="50" rx="16" fill="url(#bgGrad)" stroke="#e2e8f0" strokeWidth="1.5" style={{ filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.06))' }} />
                                <text x="15" y="22" fill="var(--color-primary)" fontSize="10" fontWeight="bold" fontFamily="monospace">&lt;dev&gt;</text>
                                <text x="15" y="38" fill="var(--color-accent)" fontSize="10" fontWeight="bold" fontFamily="monospace"> const r = 1;</text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            
            {/* Minimal Background Glass Card */}
            <div className="glass" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', padding: '1rem 2rem', borderRadius: 'var(--radius-full)', display: 'flex', gap: '3rem', zIndex: 2, border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>10+</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Security Tools</span>
                </div>
                <div style={{ width: '1px', backgroundColor: 'var(--color-border)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent)' }}>15+</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Projects Built</span>
                </div>
                <div style={{ width: '1px', backgroundColor: 'var(--color-border)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#10B981' }}>100%</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Secure Coding</span>
                </div>
            </div>

            {/* Custom animations block */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.2); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}} />
        </section>
    );
};

export default Hero;