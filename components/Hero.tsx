
import React, { useEffect, useRef, useCallback } from 'react';

const Typewriter: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    const [displayText, setDisplayText] = React.useState('');
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [index, text]);

    return <span className={className}>{displayText}</span>;
};


const Hero: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const drawParticles = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray: { x: number, y: number, directionX: number, directionY: number, size: number, color: string }[] = [];
        const numberOfParticles = 80;

        const mouse = {
            x: null as number | null,
            y: null as number | null,
            radius: 150
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        function init() {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const directionX = Math.random() * .4 - .2;
                const directionY = Math.random() * .4 - .2;
                const color = 'rgba(0, 255, 255, 0.7)';
                particlesArray.push({ x, y, directionX, directionY, size, color });
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                        ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    
                    if (distance < 22500) { // Using a fixed squared distance (150*150)
                        opacityValue = 1 - (distance / 22500);
                        ctx.strokeStyle = `rgba(191, 0, 255, ${opacityValue})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }


        let animationFrameId: number;
        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                const particle = particlesArray[i];

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = particle.x - mouse.x;
                    const dy = particle.y - mouse.y;
                    const distanceSq = dx * dx + dy * dy;
                    const mouseRadiusSq = mouse.radius * mouse.radius;

                    if (distanceSq < mouseRadiusSq) {
                        const distance = Math.sqrt(distanceSq);
                        const force = (mouse.radius - distance) / mouse.radius;
                        const repulsionX = (dx / distance) * force * 0.5;
                        const repulsionY = (dy / distance) * force * 0.5;
                        particle.x += repulsionX;
                        particle.y += repulsionY;
                    }
                }

                if (particle.x < 0 || particle.x > canvas.width) particle.directionX = -particle.directionX;
                if (particle.y < 0 || particle.y > canvas.height) particle.directionY = -particle.directionY;
                
                particle.x += particle.directionX;
                particle.y += particle.directionY;
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, false);
                ctx.fillStyle = particle.color;
                ctx.fill();
            }
            connect();
        }

        init();
        animate();

        const handleResize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        const cleanup = drawParticles();
        return cleanup;
    }, [drawParticles]);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full h-screen mx-auto flex items-center justify-center text-center">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
            <div className="relative z-10 px-4">
                <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                    <Typewriter text="Kilaparthi Rahul" className="neon-text-cyan" />
                </h1>
                <p className="mt-4 text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
                    Cybersecurity Enthusiast & Bug Bounty Hunter
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a 
                        href="#projects" 
                        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                        className="btn-glow font-orbitron text-lg font-bold px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full transition-all duration-150 hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95"
                    >
                        View Projects
                    </a>
                    <a 
                        href="#contact" 
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                        className="btn-glow font-orbitron text-lg font-bold px-8 py-3 border-2 border-purple-500 text-purple-500 rounded-full transition-all duration-150 hover:bg-purple-500 hover:text-black hover:scale-105 active:scale-95"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Hero);