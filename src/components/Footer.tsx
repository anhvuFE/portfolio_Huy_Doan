import { HiHeart, HiDownload } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import FloatingParticles from './effects/FloatingParticles';
import cvFile from '../assets/Tran-Doan-Huy-TopCV.vn-311025.215752.pdf';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-dark-surface text-dark-text py-12 border-t border-white/10">
      {/* Ambient particle network */}
      <FloatingParticles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2 font-display">Tran Doan Huy</h3>
            <p className="text-dark-muted text-sm">Junior Digital Marketer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={cvFile}
              download="Tran-Doan-Huy-CV.pdf"
              className="px-4 py-2 bg-brand-gradient text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm hover:shadow-glow"
            >
              <HiDownload className="text-lg" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/huy.doan.439449"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 backdrop-blur rounded-full text-dark-muted hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="mailto:huydoan031812@gmail.com"
              className="p-3 bg-white/5 border border-white/10 backdrop-blur rounded-full text-dark-muted hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
              aria-label="Email"
            >
              <MdEmail className="text-lg" />
            </a>
            <a
              href="tel:+84763484002"
              className="p-3 bg-white/5 border border-white/10 backdrop-blur rounded-full text-dark-muted hover:text-primary-400 hover:border-primary-500/50 transition-all duration-300"
              aria-label="Phone"
            >
              <MdPhone className="text-lg" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-dark-muted text-sm flex items-center justify-center gap-1">
            © 2026 Made with <HiHeart className="text-primary-500 text-lg" /> by Huy Doan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
