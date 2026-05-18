import React from 'react';
import { BugIcon, CodeIcon, GlobeIcon, TerminalIcon } from './Icons';

interface Skill {
    name: string;
    level: number;
}

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        title: 'Cybersecurity',
        icon: <BugIcon className="w-6 h-6" />,
        skills: [
            { name: 'Bug Hunting & Pentesting', level: 85 },
            { name: 'Phishing Simulation', level: 80 },
            { name: 'Network & DDoS Analysis', level: 75 },
            { name: 'Vulnerability Assessment', level: 85 },
        ],
    },
    {
        title: 'Full Stack Development',
        icon: <CodeIcon className="w-6 h-6" />,
        skills: [
            { name: 'React.js & Next.js', level: 80 },
            { name: 'Node.js & Express', level: 75 },
            { name: 'Database (MongoDB/SQL)', level: 78 },
            { name: 'Secure API Design', level: 82 },
        ],
    },
    {
        title: 'Languages & Problem Solving',
        icon: <TerminalIcon className="w-6 h-6" />,
        skills: [
            { name: 'Java Development', level: 80 },
            { name: 'Python scripting', level: 75 },
            { name: 'Data Structures & Algorithms', level: 78 },
        ],
    },
    {
        title: 'UI/UX & Web Technologies',
        icon: <GlobeIcon className="w-6 h-6" />,
        skills: [
            { name: 'HTML5 & CSS3 (Modern Vanilla)', level: 90 },
            { name: 'JavaScript & TypeScript', level: 80 },
            { name: 'Figma Prototyping', level: 70 },
        ],
    },
];

const SkillBar: React.FC<Skill> = ({ name, level }) => {
    return (
        <div style={{ width: '100%', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>{name}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>{level}%</span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#f1f5f9', borderRadius: '9999px', height: '8px', overflow: 'hidden' }}>
                <div 
                    style={{ 
                        width: `${level}%`, 
                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))', 
                        height: '100%', 
                        borderRadius: '9999px',
                        transition: 'width 1.5s cubic-bezier(0.1, 0.8, 0.2, 1)'
                    }}
                ></div>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Skills & Expertise</h2>
                    <p className="section-subtitle">A balanced breakdown of development capabilities, secure coding practices, and core technologies.</p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2" style={{ gap: '2rem' }}>
                    {skillsData.map((category, index) => {
                        return (
                            <div
                                key={index}
                                className="card animate-fade-in"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    border: '1px solid var(--color-border)',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ background: 'rgba(37, 99, 235, 0.08)', color: 'var(--color-primary)', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {category.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>{category.title}</h3>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;