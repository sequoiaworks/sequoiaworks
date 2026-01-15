import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  /* 🔹 NAV CONFIG (SCROLL + ROUTE) */
  const navLinks = [
    { name: "About", type: "scroll", target: "intro" },
    { name: "Services", type: "scroll", target: "services" },
    { name: "Work", type: "scroll", target: "work" },
    { name: "Contact", type: "scroll", target: "contact" },
  ];

  const handleNavClick = (link: typeof navLinks[number]) => {
    setMobileMenuOpen(false);

    if (link.type === "route") {
      navigate(link.target);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document
            .getElementById(link.target)
            ?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document
          .getElementById(link.target)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuVariants: Variants = {
    closed: {
      clipPath: "circle(30px at calc(100% - 45px) 45px)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    open: {
      clipPath: "circle(1200px at calc(100% - 45px) 45px)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 ${
        isScrolled && !mobileMenuOpen
          ? "bg-[#030303]/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
          <motion.div
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer flex items-center gap-2 z-[110]"
          >
          <img
            src="logo\Colour-logo1.png"
            alt="Sequoia Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl font-bold tracking-tighter">
            SEQUOIA
          </span>
        </motion.div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, idx) => (
            <motion.button
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium tracking-wide uppercase text-neutral-400 hover:text-white transition-colors"
              onClick={() => handleNavClick(link)}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#070707] z-[105] md:hidden flex flex-col pt-32 px-8 pb-12"
          >
            <div className="flex flex-col space-y-6">
              <motion.p
                variants={itemVariants}
                custom={0}
                className="text-xs uppercase tracking-[0.4em] text-indigo-500 mb-4"
              >
                Navigation
              </motion.p>

              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  variants={itemVariants}
                  custom={i + 1}
                  className="group flex items-center gap-4 text-5xl font-black tracking-tighter text-neutral-400 hover:text-white"
                  onClick={() => handleNavClick(link)}
                >
                  <span>{link.name}</span>
                  <ArrowRight
                    size={32}
                    className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-500"
                  />
                </motion.button>
              ))}
            </div>

            {/* FOOTER */}
            <div className="mt-auto grid grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-4">
                  Social
                </p>
                <div className="flex gap-4 text-neutral-400">
                  <Instagram size={18} />
                  <Twitter size={18} />
                  <Linkedin size={18} />
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-4">
                  Inquiries
                </p>
                <a
                  href="mailto:sequoiaworks14@gmail.com"
                  className="text-sm text-neutral-400 hover:text-white"
                >
                  sequoiaworks14@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
