"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  Trophy,
  User,
  GraduationCap,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animate-float-slow"
          style={{ opacity: 0.9 }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animate-float-slow"
          style={{ animationDelay: "1.2s", opacity: 0.95 }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob animate-float-slow"
          style={{ animationDelay: "2.2s", opacity: 0.92 }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              UV
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {[
                "home",
                "about",
                "experience",
                "education",
                "projects",
                "achievements",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {[
                "home",
                "about",
                "experience",
                "education",
                "projects",
                "achievements",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-400 hover:text-white p-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 px-4">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-fade-up">
              <div className="px-6 py-3 bg-slate-950 rounded-full">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Welcome to My Portfolio
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold animate-fade-up-200">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Udatha Venkatasai
              </span>
            </h1>

            <div className="h-12 text-2xl md:text-3xl animate-fade-up-400">
              <p className="text-gray-300">
                Full Stack Developer | Java & Spring Boot | Automation | React              </p>
            </div>

            <p className="text-gray-400 text-lg max-w-2xl animate-fade-up-400">
              Results-driven Full Stack Developer with expertise in Java, Spring
              Boot, React, and Database Architecture. Adept at designing secure
              RESTful APIs and full-stack automation tools. Solved 100+ Data
              Structures & Algorithms problems on LeetCode.
            </p>

            <div className="flex gap-4 justify-center md:justify-start pt-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all btn-cta-animated animate-fade-up-400"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all btn-cta-animated animate-fade-up-400"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex gap-6 justify-center md:justify-start pt-12 animate-fade-up-400">
              <a
                href="https://github.com/Venkatasaiyadav"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/udatha-venkatasai-29242b284/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:venkyyadav103@gmail.com"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://leetcode.com/u/Venkatasai19/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
              </a>
            </div>
          </div>

          {/* Right: Profile Picture */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="animate-profile-float">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Rotating gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-gradient" />

                {/* Inner dark ring (creates the gap) */}
                <div className="absolute inset-[4px] rounded-full bg-slate-950" />

                {/* Profile image */}
                <div className="absolute inset-[8px] rounded-full overflow-hidden animate-profile-glow">
                  <img
                    src="/profile.jpg"
                    alt="Udatha Venkatasai"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Orbiting particles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-orbit-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-orbit-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-orbit-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <User className="text-blue-400" size={32} />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a results-driven Full Stack Developer based in Chennai,
                Tamil Nadu, with a strong track record of architecting scalable
                web applications and optimizing backend infrastructure.
              </p>
              <p>
                Adept at designing secure RESTful APIs and full-stack automation
                tools that reduce manual effort. I have solved 100+ Data
                Structures & Algorithms problems on LeetCode and continuously
                seek high-impact, product-based environments.
              </p>
              <p>
                I hold a B.Tech in Computer Science Engineering (AI) from Dr MGR
                Educational and Research Institute with a CGPA of 8.66/10.0.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                <h3 className="font-semibold text-blue-400 mb-2">Languages</h3>
                <p className="text-sm text-gray-400">
                  Java (Core, OOP), SQL, JavaScript
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                <h3 className="font-semibold text-purple-400 mb-2">
                  Backend & APIs
                </h3>
                <p className="text-sm text-gray-400">
                  Spring Boot, REST APIs, Spring Security (JWT), Microservices,
                  Maven
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-lg border border-pink-500/30">
                <h3 className="font-semibold text-pink-400 mb-2">Frontend</h3>
                <p className="text-sm text-gray-400">
                  React.js, Redux, Electron.js, HTML5/CSS3,JavaScript
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-cyan-500/30">
                <h3 className="font-semibold text-cyan-400 mb-2">
                  Databases & Search
                </h3>
                <p className="text-sm text-gray-400">
                  MySQL, MongoDB, PostgreSQL, Redis, Elasticsearch, Vector DB
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-blue-500/30">
                <h3 className="font-semibold text-blue-400 mb-2">
                  Cloud & Infrastructure
                </h3>
                <p className="text-sm text-gray-400">
                  AWS (EC2, S3, DocumentDB), Docker, Apache Airflow
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                <h3 className="font-semibold text-green-400 mb-2">
                  Tools & Monitoring
                </h3>
                <p className="text-sm text-gray-400">
                  Git, GitHub, Postman, Selenium, PlayWright, Apache POI, JIRA,
                  ELK Stack
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30 col-span-2">
                <h3 className="font-semibold text-yellow-400 mb-2">
                  Core Concepts
                </h3>
                <p className="text-sm text-gray-400">
                  Data Structures & Algorithms, Object-Oriented Design, SDLC, Agile/Scrum, AI
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
                { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
                { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
                { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
                { name: "WebSocket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-2 cursor-default"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-purple-400" size={32} />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            <div className="p-6 bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-purple-500/20 rounded-lg hover:border-purple-500/50 transition-all card-tilt">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    Junior Software Test Engineer (Development and Automation)
                  </h3>
                  <p className="text-gray-400">
                    247 HealthMedPro Pvt Ltd — Chennai
                  </p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                  April 2025 – Present
                </span>
              </div>
              <ul className="text-gray-300 space-y-2 mt-3 list-disc list-inside">
                <li>
                  Validated and optimized <strong>50+ complex REST APIs</strong>{" "}
                  for critical healthcare modules such as AR Recovery and
                  Billing, achieving <strong>99% functional accuracy</strong>{" "}
                  and reducing production defects by <strong>20%</strong>.
                </li>
                <li>
                  Developed <strong>full-stack automation tools</strong> using
                  React.js, Electron.js, Spring Boot, and MongoDB to automate
                  internal workflows and browser-based tasks, reducing manual
                  testing and operational effort by <strong>40%</strong>.
                </li>
                <li>
                  Built and enhanced backend services following a{" "}
                  <strong>
                    layered architecture (Controller-Service-Repository)
                  </strong>{" "}
                  and collaborated with Agile teams to design scalable APIs and
                  accelerate sprint delivery.
                </li>
                <li>
                  Implemented <strong>automated web scraping solutions</strong>{" "}
                  using Selenium and Playwright to extract and validate
                  healthcare data from multiple sources, improving data accuracy
                  and reducing manual data collection time by{" "}
                  <strong>35%</strong>.
                </li>
                <li>
                  Implemented{" "}
                  <strong>comprehensive unit and integration testing</strong>{" "}
                  using JUnit and Mockito, achieving{" "}
                  <strong>85%+ code coverage</strong> and ensuring robust error
                  handling across services.
                </li>
                <li>
                  Conducted{" "}
                  <strong>code reviews and performance optimization</strong> for
                  critical modules, improving API response times by{" "}
                  <strong>30%</strong>.
                </li>
                <li>
                  Designed and developed{" "}
                  <strong>end-to-end full-stack applications</strong> integrating
                  frontend dashboards with robust backend services, enabling
                  real-time data visualization and streamlined workflow automation.
                </li>
                <li>
                  Collaborated with cross-functional teams to{" "}
                  <strong>migrate legacy systems</strong> to microservices
                  architecture, improving system scalability and
                  maintainability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap className="text-cyan-400" size={32} />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

            <div className="space-y-8">
              <div className="relative flex gap-6 items-start">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <GraduationCap className="text-white" size={28} />
                </div>

                <div className="flex-1 p-6 bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-all card-tilt">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400">
                        Dr MGR Educational and Research Institute
                      </h3>
                      <p className="text-gray-300 mt-1">
                        B.Tech in Computer Science Engineering — Artificial Intelligence
                      </p>
                      <p className="text-gray-500 text-sm mt-1">📍 Chennai, Tamil Nadu</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">2021 – 2025</span>
                      <div className="mt-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
                        <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          CGPA: 8.66 / 10.0
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Artificial Intelligence", "Data Structures", "Algorithms", "Database Systems", "Web Development", "Machine Learning"].map((subject, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-cyan-500/15 text-cyan-300 rounded-full border border-cyan-500/20"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-pink-400" size={32} />
            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Technical Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Automated Student Report Generation System",
                description:
                  "A backend-driven system that automates student report card generation from raw academic data. Processes Excel/PDF uploads, extracts and validates marks, calculates grades & percentages, and generates downloadable reports. Features role-based access (Admin/Teacher) and soft delete support.",
                tech: ["Spring Boot", "Apache POI", "MySQL", "Spring Security"],
                link: "#",
              },
              {
                title: "Smart Prawn Farm Management System",
                description:
                  "An AI-integrated farm management platform to monitor and optimize Vannamei prawn cultivation across 10+ operational panels. Designed secure REST APIs using Spring Security (RBAC) and built an interactive frontend dashboard utilizing React.js for real-time feed consumption, expense tracking, and predictive harvest timelines.",
                tech: ["Spring Boot", "React.js", "MySQL", "AI Concepts"],
                link: "https://github.com/Venkatasaiyadav/aqua-smart-farm",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-pink-500/20 rounded-lg hover:border-pink-500/50 transition-all card-tilt"
              >
                <h3 className="text-xl font-semibold text-pink-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-pink-500/20 text-pink-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Trophy className="text-yellow-400" size={32} />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Achievements & Leadership
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { title: "100+", subtitle: "LeetCode Problems Solved" },
              { title: "99%", subtitle: "API Functional Accuracy" },
              { title: "400+", subtitle: "Hours of Java Enterprise Training" },
              { title: "40%", subtitle: "Reduction in Manual Testing" },
              { title: "8.66", subtitle: "CGPA (B.Tech CSE - AI)" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 text-center bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  {item.title}
                </div>
                <p className="text-gray-400">{item.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {[
              "Presented technical paper at Saveetha College, demonstrating research and communication skills in emerging technologies.",
              "Actively participating in community meetups and tech conferences, engaging with developer communities and sharing knowledge on emerging technologies.",
              "Successfully architected and deployed production-grade REST APIs with 99% functional accuracy in healthcare domain.",
              "Recognized for outstanding performance in implementing automation solutions that saved 35% operational time.",
              "Completed 400+ hours of intensive hands-on training in enterprise-level Java development and system design.",
              "Mentored junior developers in best practices for API design, testing strategies, and agile methodologies.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg border border-yellow-500/10"
              >
                <span className="text-yellow-400 mt-1">•</span>
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 flex items-center justify-center gap-3">
            <Mail className="text-blue-400" size={32} />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="text-gray-400 mb-2 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
          <p className="text-gray-500 mb-8">
            📍 Chennai, Tamil Nadu &nbsp;|&nbsp; 📞 +91-9398126956
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:venkyyadav103@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/udatha-venkatasai-29242b284/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://github.com/Venkatasaiyadav"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/udatha-venkatasai-29242b284/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:venkyyadav103@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail size={32} />
            </a>
            <a
              href="https://leetcode.com/u/Venkatasai19/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 Udatha Venkatasai. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
