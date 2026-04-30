
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
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
        icon: <BugIcon className="w-8 h-8" />,
        skills: [
            { name: 'Bug Hunting', level: 85 },
            { name: 'Phishing Attacks', level: 80 },
            { name: 'DDoS Attack Analysis', level: 75 },
            { name: 'Location Tracking', level: 70 },
        ],
    },
    {
        title: 'Languages',
        icon: <CodeIcon className="w-8 h-8" />,
        skills: [
            { name: 'Java', level: 70 },
            { name: 'Python', level: 60 },
        ],
    },
    {
        title: 'Web Technologies',
        icon: <GlobeIcon className="w-8 h-8" />,
        skills: [
            { name: 'HTML', level: 90 },
            { name: 'CSS', level: 80 },
            { name: 'JavaScript', level: 65 },
        ],
    },
    {
        title: 'Developer Tools',
        icon: <TerminalIcon className="w-8 h-8" />,
        skills: [
            { name: 'Git', level: 85 },
            { name: 'VS Code', level: 95 },
            { name: 'Burp Suite', level: 75 },
        ],
    },
];

const SkillBar: React.FC<Skill> = ({ name, level }) => {
    // FIX: Specified the element type for the useIntersectionObserver hook.
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.5 });
    
    return (
        <div ref={ref} className="w-full mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-300">{name}</span>
                <span className="text-sm font-medium text-cyan-400">{level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                    className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: isVisible ? `${level}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    // FIX: Specified the element type for the useIntersectionObserver hook.
    const [ref, isVisible] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.1 });
    return (
        <section className="py-20 bg-black bg-opacity-20">
            <div className="container mx-auto px-6">
                <h2 ref={ref} className={`font-orbitron text-4xl md:text-5xl font-bold text-center mb-12 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-purple-500 neon-text-purple">{'<'}</span>
                    Technical Skills
                    <span className="text-purple-500 neon-text-purple">{'/>'}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {skillsData.map((category, index) => {
                        // FIX: Specified the element type for the useIntersectionObserver hook.
                        const [catRef, catIsVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
                        return (
                            <div
                                key={index}
                                ref={catRef}
                                className={`glass-effect p-8 rounded-2xl neon-box-shadow transition-all duration-700 ${catIsVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
                                style={{transitionDelay: `${index * 150}ms`}}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-cyan-400">{category.icon}</span>
                                    <h3 className="font-orbitron text-2xl font-bold text-white">{category.title}</h3>
                                </div>
                                <div>
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

export default React.memo(Skills);