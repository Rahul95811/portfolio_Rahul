
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-center mb-12">
        <span className="text-cyan-400 neon-text-cyan">{'<'}</span>
        {children}
        <span className="text-cyan-400 neon-text-cyan">{'/>'}</span>
    </h2>
);

const ExperienceCard: React.FC<{ title: string, company: string, period: string, description: string[], delay?: string }> = ({ title, company, period, description, delay }) => {
    // FIX: Specified the element type for the useIntersectionObserver hook.
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`glass-effect p-6 rounded-xl border border-purple-500/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: delay || '0ms' }}>
            <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
            <p className="text-purple-400 font-semibold mb-2">{company} | {period}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                {description.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

const EducationCard: React.FC<{ institution: string, degree: string, period: string, grade: string, delay?: string }> = ({ institution, degree, period, grade, delay }) => {
    // FIX: Specified the element type for the useIntersectionObserver hook.
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className={`glass-effect p-6 rounded-xl border border-cyan-500/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: delay || '0ms' }}>
            <h3 className="text-2xl font-bold text-purple-400">{institution}</h3>
            <p className="text-cyan-400 font-semibold mb-2">{degree} | {period}</p>
            <p className="text-gray-300">{grade}</p>
        </div>
    );
}

const About: React.FC = () => {
    // FIX: Specified the element type for the useIntersectionObserver hook.
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
    return (
        <section className="py-20 container mx-auto px-6">
            <SectionTitle>About Me</SectionTitle>
            <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I am a passionate and self-driven cybersecurity enthusiast with hands-on experience in ethical hacking, network security, and bug bounty hunting. Currently pursuing my B.Tech in Computer Science, I am dedicated to exploring the vast landscape of cybersecurity and developing robust solutions to complex security challenges.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-orbitron text-3xl font-bold mb-6 text-center text-purple-400 neon-text-purple">Experience</h3>
                    <div className="space-y-6">
                        <ExperienceCard
                            title="Cybersecurity Intern"
                            company="Teachnook"
                            period="Aug 2024 - Sep 2024"
                            description={[
                                "Gained hands-on experience in cybersecurity principles.",
                                "Worked on ethical hacking, network security, and threat detection.",
                                "Completed various cybersecurity challenges and case studies."
                            ]}
                            delay="100ms"
                        />
                        <ExperienceCard
                            title="Bug Bounty Hunter"
                            company="Self-Driven"
                            period="2024 - Present"
                            description={[
                                "Identified and responsibly disclosed an HTML Injection vulnerability on a high-traffic Premier League football club website.",
                                "Identified and disclosed HTML Injection, XSS, CSRF, and SQL Injection vulnerabilities.",
                                "Practiced testing for security flaws using tools like Burp Suite."
                            ]}
                            delay="200ms"
                        />
                        <ExperienceCard
                            title="Cybersecurity Enthusiast"
                            company="Independent"
                            period="2021 - Present"
                            description={[
                                "Explored Wi-Fi penetration testing, phishing simulations, and DDoS attack models.",
                                "Practiced ethical hacking using Kali Linux in lab environments."
                            ]}
                            delay="300ms"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="font-orbitron text-3xl font-bold mb-6 text-center text-cyan-400 neon-text-cyan">Education</h3>
                    <div className="space-y-6">
                        <EducationCard
                            institution="Gitam University"
                            degree="B.Tech Computer Science and Engineering"
                            period="2023 - 2027"
                            grade="CGPA - 8.87"
                            delay="100ms"
                        />
                        <EducationCard
                            institution="Sri Gayatri Jr Collage"
                            degree="Intermediate"
                            period="2021 - 2023"
                            grade="Percentage - 90.1"
                            delay="200ms"
                        />
                        <EducationCard
                            institution="DR KKR Gowtham School"
                            degree="Schooling (SSC)"
                            period="2020 - 2021"
                            grade="Percentage - 96%"
                            delay="300ms"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(About);