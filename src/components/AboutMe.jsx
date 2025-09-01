import React, { useEffect, useRef, useState } from "react";

export default function AboutMe() {
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
        <section
            id="aboutMe"
            ref={ref}
            className="w-full flex flex-col gap-9 scroll-mt-20 py-16 md:py-20"
        >
            {/* Title */}
            <div className="text-white tracking-wider font-bold font-wdxl flex justify-center text-2xl md:text-3xl lg:text-4xl py-4">
                ABOUT ME
            </div>

            {/* Content */}
            <div
                className="
      flex flex-col md:flex-row md:items-center
      gap-10 md:gap-16 lg:gap-20 
      w-full px-5 sm:px-8 md:px-12 lg:px-28
    "
            >
                {/* Left: Image */}
                <div
                    className={`flex justify-center md:justify-start ${inView ? "animate-slideInLeft" : "opacity-0"
                        }`}
                >
                    <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-80 group">
                        {/* Background border box */}
                        <div
                            className="absolute inset-0 border-4 border-sky-400 rounded-md translate-x-4 translate-y-4 
          transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"
                        ></div>

                        {/* Foreground image box */}
                        <div className="relative w-full h-full overflow-hidden rounded-md border-2 border-white">
                            <img
                                src="profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Text */}
                <div
                    className={`
        flex flex-col justify-center 
        max-md:items-center text-center md:text-left
        ${inView ? "animate-slideInRight delay-200" : "opacity-0"}
      `}
                >
                    <div className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                        <p>
                            I’m a Full MERN Stack Developer passionate about building scalable web
                            applications and exploring new technologies. Over the years, I’ve
                            developed multiple projects using MongoDB, Express.js, React, and
                            Node.js, focusing on creating seamless user experiences and efficient
                            backend solutions.
                        </p>
                        <p className="mt-4">
                            I enjoy experimenting with new tools, frameworks, and ideas that push
                            my creativity and problem-solving skills. My goal is to keep learning,
                            contribute to impactful projects, and deliver solutions that make a
                            difference.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}
