import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/7f8d4b62cab73b0e3c82894455827352499dd6bc.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Education",
    "Work",
    "Projects",
    "Contact",
  ];

  const scrollToSection = (item: string) => {
    const id = item.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Blurred Background Overlay for Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-[#3d2730]/80 backdrop-blur-lg z-40 md:hidden"
        />
      )}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#3d2730]/80 backdrop-blur-lg shadow-lg shadow-[#ffb7c5]/10"
            : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end md:justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-300 hover:text-[#ffb7c5] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ffb7c5] to-[#ffd4e0] group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-slate-300 z-50 mt-4"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-10 space-y-4 relative z-50"
            >
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left text-slate-300 hover:text-[#ffb7c5] transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}