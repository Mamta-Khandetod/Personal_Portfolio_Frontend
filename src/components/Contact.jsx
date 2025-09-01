import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export default function Contact() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(false);
                    setTimeout(() => setInView(true), 50);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (
        <section ref={ref} id='contact' className='w-full flex flex-col gap-9 scroll-mt-20 px-4 sm:px-8 md:px-12 lg:px-20 py-10'>

            {/* Heading */}
            <div className={`text-transparent bg-clip-text py-7 bg-gradient-to-r from-blue-600 to-purple-600
             font-bold font-serif flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-4.5xl text-center px-2  ${inView ? "animate-fadeInUp" : "opacity-0"} tracking-wider`}>
                <div className='animate-glow'>

                    Let's Build Something Amazing Together
                </div>
            </div>

            {/* Subtitle */}
            <div className='text-center text-gray-400 font-medium text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2'>
                Excited to take on challenges that push creativity and technology forward. Looking forward to working together on something great!
            </div>

            {/* Contact Cards */}
            <div className="flex justify-center gap-6 sm:gap-8 flex-wrap">
                {/* Email Card */}
                <div className="group relative lg:w-96 rounded-xl border border-blue-200 w-full sm:w-80 p-4 flex items-center gap-4 bg-gradient-to-br from-blue-950/60 to-blue-900/40 backdrop-blur-md 
                      transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                    <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 group-hover:animate-bounce" />
                    <div className="flex flex-col">
                        <span className="text-white text-lg sm:text-xl font-josefin font-semibold group-hover:text-blue-300 transition-all">
                            Email
                        </span>
                        <span className="text-blue-200 text-sm sm:text-base font-medium font-josefin break-all">
                            mamtakhandetod1999@gmail.com
                        </span>
                    </div>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></span>
                </div>

                {/* Location Card */}
                <div className="group relative lg:w-96 rounded-xl border border-blue-200 w-full sm:w-80 p-4 flex items-center gap-4 bg-gradient-to-br from-purple-950/60 to-purple-900/40 backdrop-blur-md 
                      transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                    <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 group-hover:animate-bounce" />
                    <div className="flex flex-col">
                        <span className="text-white text-lg sm:text-xl font-josefin font-semibold group-hover:text-purple-300 transition-all">
                            Location
                        </span>
                        <span className="text-blue-200 text-sm sm:text-base font-medium font-josefin">
                            Nagpur, Maharashtra, India
                        </span>
                    </div>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"></span>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 sm:gap-8 justify-center items-center py-6 flex-wrap">
                {/* GitHub */}
                <div className="group relative">
                    <a href='https://github.com/Mamta-Khandetod' target='_blank' rel='noreferrer'>
                        <Github className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 cursor-pointer 
                           transition-all duration-500 ease-in-out
                           group-hover:text-white group-hover:scale-125 
                           group-hover:rotate-6" />
                        <span className="absolute inset-0 rounded-full bg-purple-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="group relative">
                    <a href='https://in.linkedin.com/in/mamta-khandetod-1a0979172' target='_blank' rel='noreferrer'>
                        <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 cursor-pointer 
                             transition-all duration-500 ease-in-out
                             group-hover:text-blue-400 group-hover:scale-125 
                             group-hover:-rotate-6" />
                        <span className="absolute inset-0 rounded-full bg-blue-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
                    </a>
                </div>

                {/* Mail */}
                <div className="group relative">
                    <a href='https://mail.google.com/mail/?view=cm&to=mamtakhandetod1999@gmail.com' target='_blank' rel='noreferrer'>
                        <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300 cursor-pointer 
                         transition-all duration-500 ease-in-out
                         group-hover:text-red-400 group-hover:scale-125 
                         group-hover:rotate-12" />
                        <span className="absolute inset-0 rounded-full bg-red-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></span>
                    </a>
                </div>
            </div>
        </section>
    )
}

