import React, { useEffect, useState } from 'react'

export default function Experience() {
    return (
        <section id='experience' className='w-full flex flex-col gap-9 scroll-mt-20'>
            <div className='text-white font-bold font-wdxl flex justify-center text-2xl py-4 tracking-wider'>WORK EXPERIENCE AND EDUCATION</div>
            <ExperienceWithScrollbar />
        </section>
    )
}

const experiences = [
    {
        designation: "Full Stack Developer",
        company: "Leadows Technologies",
        description: [
            "Experienced in building scalable and user-friendly web platforms with expertise in MERN stack, REST APIs, and microservices architecture .",
            "Developed responsive dashboards, recruitment platforms, and multi-tenant solutions with secure authentication. ",
            "Skilled in real-time data handling, API integration, RabbitMQ, Redis, and analytics pipelines for high-throughput systems.",
            "Contributed to automation and bot platforms integrated with WhatsApp Flows API, RCS campaigns, and cloud services, enabling seamless multi-channel customer engagement.",
            "Strong focus on clean UX, system reliability, cross-platform compatibility, and performance optimization."
        ],
        skills: ["React/redux", "Javascript", "Typescript", "MongoDB", "NodeJs", "Express", "Java", "RabbitMQ", "Redis", "Postgress", "Jenkins", "Grafana"],
        year: {
            from: 2022,
            to: 'Present'
        }
    },
    {
        designation: "Front-End Developer",
        company: "DDNJ Software Solution",
        description: [
            "Developed and maintained responsive user interfaces using C# and .NET frameworks.",
            "Integrated REST APIs to manage and display dynamic data across multiple application modules.",
            "Collaborated closely with backend teams to ensure smooth API consumption and consistent data flow.",
            "Optimized UI components for performance, scalability, and cross-browser compatibility."
        ],
        skills: ["C#", ".NET Framework", "MVC", "REST API", "HTML", "CSS", "Javascript"],
        year: {
            from: 'Jan 2021',
            to: 'Sep 2021'
        }
    },
    {
        designation: "Masters In Computer Management (MCM)",
        company: "Prerna College (RTMNU)",
        description: [
            "Postgraduate program focused on software development, database management, and system design, with practical exposure to full-stack development.",
            "Gained strong skills in programming, project management, and building scalable IT solutions."
        ],
        skills: ["HTML", "CSS", "Javascript", "C", "SQL", "VB.NET"],
        year: {
            from: '2020',
            to: '2022'
        }
    },
    {
        designation: "Bachelor's In Computer Application (BCA)",
        company: "Prerna College (RTMNU)",
        description: [
            "Undergraduate program focused on computer fundamentals, programming, and software development.",
            "Gained strong knowledge of databases, operating systems, and networking, along with practical experience in web development and application design."
        ],
        skills: ["C", "C++", "OOPS", "DBMS", "Basic JAVA", "CSS", "HTML", "VB.NET", "Data Structure & Algorithm"],
        year: {
            from: '2018',
            to: '2020'
        }
    },
];

function ExperienceWithScrollbar() {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index);
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll('[data-index]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex justify-center w-full min-h-screen  py-16">
            <div className="relative w-3/4 md:w-2/3 lg:w-[85%]">
                {/* Enhanced Middle Scrollbar with Gradient */}
                <div className="absolute lg:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-300 to-indigo-400 -translate-x-1/2 rounded-full shadow-lg" />

                {/* Animated Progress Line */}
                <div
                    className="absolute lg:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 -translate-x-1/2 rounded-full shadow-lg transition-all duration-1000 ease-out"
                    style={{
                        height: `${(visibleItems.size / experiences.length) * 100}%`,
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                    }}
                />

                <div className="flex flex-col relative">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`
                            flex w-full items-center relative
                            ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                            justify-center /* mobile always center */
                            mb-12
                        `}
                        >
                            {/* Timeline Circle (desktop center) */}
                            <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                                <div
                                    className={`w-6 h-6 rounded-full border-4 transition-all duration-700 ease-out ${visibleItems.has(index)
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 border-white scale-125 shadow-lg animate-pulse"
                                        : "bg-gray-300 border-gray-400 scale-100"
                                        }`}
                                />
                            </div>

                            {/* Timeline Circle (mobile left) */}
                            <div className="absolute -left-2 z-10 block md:hidden">
                                <div
                                    className={`w-4 h-4 rounded-full border-2 transition-all duration-700 ease-out ${visibleItems.has(index)
                                        ? "bg-gradient-to-r from-blue-500 to-purple-600 border-white scale-110 animate-pulse"
                                        : "bg-gray-300 border-gray-400 scale-100"
                                        }`}
                                />
                            </div>

                            {/* Experience Card */}
                            <div
                                className={`
                                    max-md:ml-8
                                    relative z-20 
                                    w-full sm:w-[90%] md:w-[70%] lg:w-[40%]
                                    p-6 rounded-3xl shadow-xl border border-gray-100
                                    transition-all duration-700 ease-out transform
                                    ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                                    ${visibleItems.has(index)
                                        ? "opacity-100 translate-y-0 scale-100"
                                        : "opacity-0 translate-y-12 scale-95"}
                                    ${hoveredIndex === index ? "scale-105 shadow-2xl" : ""}
                                `}
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
                                    transitionDelay: `${index * 0.2}s`,
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Card Header */}
                                <div className="flex flex-col mb-4">
                                    <div className="flex items-center">
                                        <div
                                            className={`w-3 h-3 rounded-full mr-3 transition-all duration-300 ${visibleItems.has(index)
                                                ? "bg-gradient-to-r from-blue-500 to-purple-600"
                                                : "bg-gray-300"
                                                }`}
                                        />
                                        <h3
                                            className={`text-lg sm:text-xl font-bold transition-all duration-300 
                                             text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600`}
                                        >
                                            {exp.designation}
                                        </h3>
                                    </div>
                                    <div className="flex ml-6 text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        {exp.company} | {exp.year.from} - {exp.year.to}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="text-blue-200 leading-snug text-sm sm:text-base mb-3">
                                    {Array.isArray(exp.description) ? (
                                        <ul className="space-y-1">
                                            {exp.description.map((item, bulletIndex) => (
                                                <li key={bulletIndex} className="flex items-start">
                                                    <span
                                                        className={`inline-block w-1 h-1 rounded-full mr-3 mt-2 flex-shrink-0 transition-all duration-300 ${visibleItems.has(index)
                                                            ? "bg-gradient-to-r from-blue-500 to-purple-600"
                                                            : "bg-gray-400"
                                                            }`}
                                                    />
                                                    <span className="flex-1">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{exp.description}</p>
                                    )}
                                </div>

                                {/* Skills */}
                                <div className="ml-1 sm:ml-3">
                                    {Array.isArray(exp.skills) && exp.skills.length > 0 && (
                                        <div className="flex gap-2 flex-wrap">
                                            {exp.skills.map((skill, skillIndex) => (
                                                <div
                                                    key={skillIndex}
                                                    className="border border-blue-200 text-blue-300 rounded-full py-0.5 px-2 font-medium text-xs"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Animated Line */}
                                <div
                                    className={`mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ${visibleItems.has(index) ? "w-full opacity-100" : "w-0 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${index * 0.3 + 0.5}s` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div >
    );
}



