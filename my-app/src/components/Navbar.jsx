import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full transition-all duration-300 ${isScrolled ? "bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-gray-800 dark:text-gray-200">My Portfolio</a>
          
          <ul className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="relative group">
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">Resume</a>
            </li>
          </ul>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} className="text-gray-800 dark:text-gray-200" /> : <Menu size={24} className="text-gray-800 dark:text-gray-200" />}
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/60 dark:bg-gray-800/60 shadow-md flex flex-col items-center space-y-4 py-6 backdrop-blur-lg"
          >
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 text-gray-700 dark:text-gray-300">{item}</a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">Resume</a>
            </li>
          </motion.ul>
        )}
      </motion.nav>
    );
  }

export default Navbar;

