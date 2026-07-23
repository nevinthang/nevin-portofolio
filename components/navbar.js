"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about", index: "01" },
  { name: "Skills", href: "#skills", index: "02" },
  { name: "Projects", href: "#projects", index: "03" },
  { name: "Experience", href: "#experiences", index: "04" },
  { name: "Contact", href: "#contact", index: "05" },
];

const Logo = () => (
  <div className="flex items-center gap-2.5 select-none">
    <div className="relative w-8 h-8 rounded-md border border-primary/40 flex items-center justify-center bg-background/40">
      <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full opacity-30">
        <polyline
          points="3,17 8,12 12,15 21,6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-primary"
        />
      </svg>
      <span className="relative font-mono font-bold text-sm text-primary">N</span>
    </div>
    <span className="font-mono text-sm text-text/70">
      nevin<span className="text-primary">.log</span>
    </span>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`w-full transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-3xl rounded-full bg-background/80 backdrop-blur-lg border border-primary/15 shadow-lg px-5 py-2.5"
            : "max-w-7xl px-2 py-2"
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors group"
                >
                  <span
                    className={`flex items-center gap-1.5 transition-colors ${
                      isActive ? "text-primary" : "text-text/60 group-hover:text-text"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-primary/50">{item.index}</span>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navActiveDot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text hover:text-primary transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-3 pb-1 space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                        isActive ? "text-primary bg-primary/5" : "text-text/70 hover:bg-secondary/40"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-primary/50">{item.index}</span>
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;