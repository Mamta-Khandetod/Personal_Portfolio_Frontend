import { useMemo } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import HeadComponent from './components/HeadComponent';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App({ starCount = 150 }) {
  const starItems = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < starCount; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 2 + 3,
        duration: Number((6 + Math.random() * 10).toFixed(2)),
        delay: Number((Math.random() * 6).toFixed(2)),
        rotate: Math.round(-18 + Math.random() * 36),
      });
    };
    return starArray;
  }, [starCount]);
  return (
    <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden bg-[#0c0a29] px-5 md:px-10 lg:px-20 pb-10 ">
      {/* Twinkling stars */}

      {starItems.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full h-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.twinkle}s`,
            transform: `translate(-50%, -50%) rotate(${star.rotate}deg)`,
            animation: `floaty ${star.duration}s ease-in-out ${star.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Shooting star */}
      <div
        className="absolute top-1/4 left-0 w-1 h-1 bg-white rounded-full opacity-70 animate-ping"
        style={{
          animation: "shooting-star 14s infinite linear",
          animationDelay: "4s",
        }}
      />

      {/* Sticky Nav */}
      <div className="sticky top-0 z-50 bg-[#0c0a29]">
        <NavBar />
      </div>

      {/* Head Section */}
      <HeadComponent />

      {/* Content Sections */}
      <div className="flex flex-col gap-20 md:gap-28 lg:gap-40 w-full overflow-x-hidden">
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>

  );
}

export default App;
