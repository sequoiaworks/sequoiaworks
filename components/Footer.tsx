import React from "react";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  onLegalOpen: (type: "privacy" | "terms") => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalOpen }) => {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-tighter mb-6">
              SEQUOIA WORKS<span className="text-indigo-500">.</span>
            </div>
            <p className="text-neutral-500 max-w-sm leading-relaxed font-light">
              Designing and building premium digital experiences for forward-thinking brands across the globe.
            </p>

            {/* <div className="flex items-center gap-6 mt-8">
              <a className="text-neutral-500 hover:text-white transition-colors" href="#">
                <Instagram size={20} />
              </a>
              <a className="text-neutral-500 hover:text-white transition-colors" href="#">
                <Twitter size={20} />
              </a>
              <a className="text-neutral-500 hover:text-white transition-colors" href="#">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><a href="#intro" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-indigo-400 transition-colors">Work</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li>
                <a
                  href="mailto:sequoiaworks14@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  sequoiaworks14@gmail.com
                </a>
              </li>
              <li>Chennai, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-neutral-600">
          <p>© 2026 SEQUOIA WORKS. ALL RIGHTS RESERVED.</p>

          <div className="flex gap-8">
            <button
              onClick={() => onLegalOpen("privacy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>

            <button
              onClick={() => onLegalOpen("terms")}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
