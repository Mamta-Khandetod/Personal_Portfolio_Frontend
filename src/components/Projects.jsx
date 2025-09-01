import React, { useEffect, useRef, useState } from 'react'

export default function Projects() {
  return (
    <section id='projects' className='w-full h-full flex flex-col gap-9 overflow-hidden  overflow-x-hidden'>
      <div className='text-white font-bold font-wdxl flex justify-center text-2xl py-4 tracking-wider'>PROJECTS</div>
      <div className='flex flex-col h-full gap-9'>
        <DoctorsDashboard />
        <HireHotshot />
        <RCSConsole />
        <OneSpoc />
        <WhiteLabel />
      </div>
    </section>
  )
}

const DoctorsDashboard = () => {
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
    <div
      ref={ref}
      className={`
        flex flex-col md:flex-row items-center md:items-start
        w-full px-4 sm:px-8 md:px-16 lg:px-28
        py-10 md:py-16
        ${inView ? "animate-slideInLeft" : "opacity-0"}
      `}
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0 md:pr-6">
        <h2 className="font-wdxl text-2xl sm:text-3xl lg:text-4xl text-blue-300">
          Doctor's Dashboard
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          Built a responsive user interface for doctors to manage patients and appointments.
        </p>
        <p className="mt-2 text-gray-400 text-base sm:text-lg leading-relaxed">
          Integrated RESTful APIs to fetch, display, and update medical records in real time.
        </p>
        <p className="mt-2 text-gray-400 text-base sm:text-lg leading-relaxed">
          Ensured cross-platform compatibility and optimized UI performance for better user experience.
        </p>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-sm md:max-w-md h-64 sm:h-72 md:h-80">
          {/* Background border box */}
          <div className="absolute inset-0 border-4 border-sky-400 rounded-md -translate-x-4 translate-y-4"></div>

          {/* Foreground image box */}
          <div className="relative w-full h-full overflow-hidden rounded-md border-2 border-white">
            <img
              src="projects/doctors-dashboard.png"
              alt="Doctor's Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const HireHotshot = () => {
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
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center md:items-start 
        w-full px-4 sm:px-8 md:px-16 lg:px-28 py-10
        ${inView ? "animate-slideInRight" : "opacity-0"}
      `}
    >
      {/* Right: Text (first on mobile, second on desktop) */}
      <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col md:pl-8">
        <div className="mt-3 text-gray-400 text-base sm:text-lg">
          <h2 className="font-wdxl text-2xl sm:text-3xl md:text-4xl text-blue-300">
            Resume & Recruitment Platform
          </h2>
          <p className="mt-4">
            Designed and developed a platform for students to create resumes dynamically and share with
            organizations.
          </p>
          <p className="mt-2">
            Implemented features allowing recruiters to search and access student profiles for hiring.
          </p>
          <p className="mt-2">
            Focused on clean UX, scalable architecture, and secure data handling.
          </p>
        </div>
      </div>

      {/* Left: Image (second on mobile, first on desktop) */}
      <div className="order-2 max-md:mt-8 md:order-1 w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <div className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-72 md:h-80">
          {/* Background border box */}
          <div className="absolute inset-0 border-4 border-sky-400 rounded-md -translate-x-4 translate-y-4"></div>

          {/* Foreground image box */}
          <div className="relative w-full h-full overflow-hidden rounded-md border-2 border-white">
            <img
              src="projects/hireHotshot.png"
              alt="Resume & Recruitment Platform"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


const RCSConsole = () => {
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
    <div
      ref={ref}
      className={`
      flex flex-col md:flex-row items-center md:items-start
      w-full px-4 sm:px-8 md:px-16 lg:px-28
      py-10 md:py-16
      ${inView ? "animate-slideInLeft" : "opacity-0"}
    `}
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0 md:pr-6">
        <h2 className="font-wdxl text-2xl sm:text-3xl lg:text-4xl text-blue-300">
          RCS Console
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          Developed a system enabling organizations to create bots, templates, and run RCS campaigns.
        </p>
        <p className="mt-2 text-gray-400 text-base sm:text-lg leading-relaxed">
          Implemented high-throughput request handling with RabbitMQ and Redis to maintain TPS limits.
        </p>
        <p className="mt-2 text-gray-400 text-base sm:text-lg leading-relaxed">
          Built campaign tracking modules with reliable error handling and retry mechanisms.
        </p>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-sm md:max-w-md h-64 sm:h-72 md:h-80">
          {/* Background border box */}
          <div className="absolute inset-0 border-4 border-sky-400 rounded-md -translate-x-4 translate-y-4"></div>

          {/* Foreground image box */}
          <div className="relative w-full h-full overflow-hidden rounded-md border-2 border-white">
            <img
              src="projects\RCSConsole.png"
              alt="RCS Console"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const OneSpoc = () => {
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
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center md:items-start 
        w-full px-4 sm:px-8 md:px-16 lg:px-28 py-10
        ${inView ? "animate-slideInRight" : "opacity-0"}
      `}
    >
      {/* Right: Text (first on mobile, second on desktop) */}
      <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col md:pl-8">
        <div className="mt-3 text-gray-400 text-base sm:text-lg">
          <h2 className="font-wdxl text-2xl sm:text-3xl md:text-4xl text-blue-300">
            Bot & Automation Platform
          </h2>
          <p className="mt-4">
            Built and enhanced a microservice-based platform enabling organizations to deploy bots across multiple channels (WhatsApp, RCS, SMS, Email, LiveAgent). Designed and implemented logging and analytics pipelines for monitoring bot usage, ensuring scalability with RabbitMQ and Redis caching.
          </p>
          <p className="mt-2">
            Integrated Meta’s WhatsApp Flows API and developed a no-code drag-and-drop platform for creating and publishing WhatsApp flows, empowering non-technical users to launch automated customer journeys with ease.
          </p>
        </div>
      </div>

      {/* Left: Image (second on mobile, first on desktop) */}
      <div className="order-2 max-md:mt-8 md:order-1 w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <div className="relative w-full max-w-sm sm:max-w-md h-64 sm:h-72 md:h-80">
          {/* Background border box */}
          <div className="absolute inset-0 border-4 border-sky-400 rounded-md -translate-x-4 translate-y-4"></div>

          {/* Foreground image box */}
          <div className="relative w-full h-full overflow-hidden rounded-md border-2 border-white">
            <img
              src="projects\onespoc.png"
              alt="Bot Platform"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const WhiteLabel = () => {
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
    <div
      ref={ref}
      className={`
      flex flex-col md:flex-row items-center md:items-start
      w-full px-4 sm:px-8 md:px-16 lg:px-28
      py-10 md:py-16
      ${inView ? "animate-slideInLeft" : "opacity-0"}
    `}
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0 md:pr-6">
        <h2 className="font-wdxl text-2xl sm:text-3xl lg:text-4xl text-blue-300">
          White-label Solution with SSO
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          Integrated Single Sign-On (SSO) for secure authentication and authorization.
          Built billing and invoicing modules with monthly statement generation and download support.        </p>
        <p className="mt-2 text-gray-400 text-base sm:text-lg leading-relaxed">
          Supported multiple applications per registry reseller, enabling flexible organization-level integrations.
        </p>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-sm md:max-w-md h-64 sm:h-72 md:h-80">
          {/* Background border box */}
          <div className="absolute inset-0 border-4 border-sky-400 rounded-md -translate-x-4 translate-y-4"></div>

          {/* Foreground image box */}
          <div className="relative w-full h-full overflow-hidden rounded-md border-2 border-white">
            <img
              src="projects\whitelabel.jpg"
              alt="White Label"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}