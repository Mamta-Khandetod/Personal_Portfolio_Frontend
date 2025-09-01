import React, { useEffect, useMemo, useRef, useState } from "react";

 const TAGS = [
        "<div></div>",
        "<h1></h1>",
        "<Button />",
        "<h2></h2>",
        "</>",
        "<h3></h3>",
        "<></>",
        "<h4></h4>",
        "<script>",
        "<h5></h5>",
        "<style>",
        "class A(){}",
        "<h6></h6>",
        "const x = 1;",
        "<b></b>",
        "{children}",
        "find(() => {})",
        "<p></p>",
        "<header />",
        "<main />",
        "filter(() => {})",
        "<img />",
        "export default",
        "() => {}",
        "useState()",
        "map(() => {})",
    ];
export default function FloatingCodeBackdrop({ count = 20, className = "h-full" }) {
       const items = useMemo(() => {
        const arr = [];
        for (let i = 0; i < count; i++) {
            const text = TAGS[i % TAGS.length];
            const top = `${Math.round(6 + Math.random() * 88)}%`;
            const left = `${Math.round(3 + Math.random() * 94)}%`;
            const size = Number((0.1 + Math.random() * 1.0).toFixed(2));
            const duration = Number((6 + Math.random() * 10).toFixed(2));
            const delay = Number((Math.random() * 6).toFixed(2));
            const rotate = Math.round(-18 + Math.random() * 36);
            arr.push({ id: i, text, top, left, size, duration, delay, rotate });
        }
        return arr;
    }, [count]);

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
        <div ref={ref} className={`relative w-full  overflow-hidden pointer-events-none ${className}`} aria-hidden>
            {/* Backdrop gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 opacity-95" />

            {/* Floating tags */}
            {items.map((it) => (
                <span
                    key={it.id}
                    className={`absolute font-mono select-none whitespace-nowrap shadow-sm`}
                    style={{
                        top: it.top,
                        left: it.left,
                        fontSize: `${it.size}rem`,
                        transform: `translate(-50%, -50%) rotate(${it.rotate}deg)`,
                        animation: `floaty ${it.duration}s ease-in-out ${it.delay}s infinite`,
                        willChange: "transform, opacity",
                        opacity: 0.5,
                        pointerEvents: "none",
                    }}
                >
                    <span className="inline-block px-2 py-0.5 rounded-md bg-white/6 backdrop-blur-sm border border-white/5 text-slate-100/95">
                        {it.text}
                    </span>
                </span>
            ))}

            {/* Optional centered content area (enable pointer events) */}
            <div className={`grid grid-col-2 items-center  flex-col px-2 lg:px-12  ${inView ? "animate-slideInLeft" : "opacity-0"
                }`}>
                <div className='font-extrabold text-xl lg:text-3xl text-gray-400 font-josefin'>Hello I'm</div>
                <div className=' text-6xl lg:text-8xl text-white font-wdxl initial-hidden animate-slideInLeft'>Mamta Khandetod</div>
                <div className='text-2xl lg:text-5xl text-blue-300 font-medium font-wdxl mt-3  animate-glow'>Full Stack Developer</div>
            </div>

            {/* Floating keyframes */}
            <style>{`
        @keyframes floaty {
          0% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
          25% { transform: translate(-50%, -55%) translateY(-6px) rotate(2deg); }
          50% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
          75% { transform: translate(-50%, -45%) translateY(6px) rotate(-2deg); }
          100% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
        }
      `}</style>
        </div>
    );
}



