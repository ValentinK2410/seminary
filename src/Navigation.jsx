import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import "./navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [scrolledTo100vh, setScrolledTo100vh] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setScrolledTo100vh(true);
      } else {
        setScrolledTo100vh(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setProfileDropdownOpen(false);
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenus();
    }
  };

  const navLinks = [
    { id: "home", label: "Start" },
    { id: "articles", label: "Articles" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b text-white transition-all duration-500 ease-in-out ${
        scrolledTo100vh ? "bg-gray-800 shadow-md" : "bg-transparent"
      }`}
      onClick={closeMenus}
    >

      <nav className="mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4 z-10">
          <div onClick={() => scrollToSection("home")}>
            <svg width="48" height="24" xmlns="http://www.w3.org/2000/svg">
              <text
                x="4"
                y="20"
                fontFamily="'Major Mono Display', monospace, sans-serif"
                fontSize="20"
                fontWeight="bold"
                fill="#FFFFFF"
              >
                DVD
              </text>
            </svg>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ id, label }) => (
            <div
              key={id}
              className={`relative group px-2 py-1 transition-all`}
              onClick={() => scrollToSection(id)}
              style={{ cursor: "pointer" }}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-white transition-transform transform ${
                  location.pathname === `#${id}` ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </div>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMobileMenu();
          }}
          className="lg:hidden text-white"
          aria-label={mobileMenuOpen ? "Sluit menu" : "Open menu"}
        >
          <HiMenu size={28} />
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 md:hidden flex flex-col justify-center items-center bg-gray-700 backdrop-blur-sm text-white px-4 py-8 space-y-6 z-50"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={closeMenus}
              aria-label="Sluit menu"
            >
              <HiX size={28} />
            </button>

            {/* Navigation Links */}
            {navLinks.map(({ id, label }) => (
              <div
                key={id}
                className={`block text-xl px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:scale-105 focus:ring-2 focus:ring-white uppercase tracking-wide`}
                onClick={() => scrollToSection(id)}
                style={{ cursor: "pointer" }}
              >
                {label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
