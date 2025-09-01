import React, { useEffect, useRef, useState } from 'react'
export default function Skills() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // retrigger animation every time it comes into view
                    setInView(false);
                    setTimeout(() => setInView(true), 50);
                }
            },
            { threshold: 0.3 } // triggers when 30% of section is visible
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (
        <section ref={ref} id='skills' className='w-full flex flex-col gap-9 scroll-mt-20 '>
            <div className='text-white font-bold font-wdxl flex justify-center text-2xl py-4 tracking-wider'>SKILLS</div>
            <div className="space-y-20 py-20">

                {/* Row 1 */}
                <div className={`grid grid-cols-6 gap-6 ${inView ? "animate-slideInLeft" : "opacity-0"
                    }`}>
                    <SkillIcon src="skills/react.png" name="React" />
                    <SkillIcon src="skills/nodeLogo.png" name="NodeJS" />
                    <SkillIcon src="skills/javascriptLogo.jpg" name="JavaScript" className='object-contain h-8 w-8' />
                    <SkillIcon src="skills/typescript.png" name="TypeScript" />
                    <SkillIcon src="skills/mongoLogo.png" name="MongoDB" />
                    <SkillIcon src="skills/javaLogo.png" name="Java" className='object-contain h-12 w-12' />
                </div>

                {/* Row 2 */}
                <div className={`grid grid-cols-6 gap-6 ${inView ? "animate-slideInRight" : "opacity-0"
                    }`}>
                    <SkillIcon src="skills/postgreSQLLogo.png" name="PostgreSQL" />
                    <SkillIcon src="skills/reduxLogo.png" name="Redux" />
                    <SkillIcon src="skills/rabbitMQ.png" name="RabbitMQ" />
                    <SkillIcon src="skills/redisLogo.png" name="Redis" />
                    <SkillIcon src="skills/jenkinsLogo.png" name="Jenkins" />
                    <SkillIcon src="skills/grafanaLogo.png" name="Grafana" />
                </div>

                {/* Row 3 */}
                <div className={`grid grid-cols-6 gap-6 ${inView ? "animate-slideInLeft" : "opacity-0"
                    }`}>
                    <SkillIcon src="skills/githubLogo.png" name="GitHub" />
                    <SkillIcon src="skills/tailwindLogo.png" name="TailwindCSS" />
                    <SkillIcon src="skills/muiLogo.png" name="Material UI" />
                    <SkillIcon src="skills/dockerLogo.png" name="Docker" />
                    <SkillIcon src="skills/expressLogo.png" name="Express JS" />
                    <SkillIcon src="skills/bootstrapLogo.png" name="Bootstrap" />
                </div>
            </div>
        </section>

    )
}

// SkillIcon.jsx
function SkillIcon({ src, name, className = "object-scale-down h-10 w-10" }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 min-h-12">
            <div className="relative group cursor-pointer ">
                <img src={src} alt={name} className={`${className} group-hover:h-12 group-hover:w-12 `} />

                {/* Tooltip */}
                <div
                    className="
              bg-blue-200 rounded-lg px-3 py-1 min-w-20 flex justify-center font-medium text-sm  font-wdxl
              absolute bottom-full left-1/2 -translate-x-1/2 mb-3
              shadow-[0_0_15px_3px_rgba(150,150,150,0.8)]
              opacity-0 scale-90 translate-y-2
              group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:animate-pulse
              transition-all duration-300 ease-out
            "
                >
                    {name}
                </div>
            </div>
        </div>
    );
};
