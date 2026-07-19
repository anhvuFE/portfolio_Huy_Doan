import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import AuroraBackground from './effects/AuroraBackground';
import avatarImg from '../assets/avt.png';
import cvFile from '../assets/Tran-Doan-Huy-TopCV.vn-311025.215752.pdf';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated brand aurora background */}
      <AuroraBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <p className="section-eyebrow mb-3">Hello, I'm</p>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-dark-text mb-4 tracking-tight">
              Tran Doan Huy
            </h1>

            <div className="font-display text-2xl md:text-3xl font-bold text-gradient mb-6 h-[40px]">
              <TypeAnimation
                sequence={[
                  'Junior Digital Marketer',
                  2000,
                  'Facebook Ads Specialist',
                  2000,
                  'Content Creator',
                  2000,
                  'SEO Enthusiast',
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>

            <p className="text-dark-muted mb-8 leading-relaxed max-w-xl">
              With 6 months of experience in Digital Marketing, I have honed my expertise
              across diverse industries including Real Estate and Fashion. My goal in the next 2 years
              is to become a Digital Marketing Team Leader.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 34px rgba(236, 72, 153, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-brand-gradient text-white rounded-full font-semibold transition-all duration-300 shadow-glow"
              >
                <HiMail className="mr-2 text-xl" />
                Contact Me
              </motion.a>
              <motion.a
                href={cvFile}
                download="Tran-Doan-Huy-CV.pdf"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.12)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-primary-400/60 text-primary-300 rounded-full font-medium backdrop-blur-sm transition-all duration-300"
              >
                <HiDownload className="mr-2 text-xl animate-bounce" />
                Download CV
              </motion.a>
            </div>

            <div className="flex flex-col gap-2 text-sm text-dark-muted">
              <div className="flex items-center gap-2">
                <HiPhone className="text-primary-500 text-lg" />
                <span>+84 763 484 002</span>
              </div>
              <div className="flex items-center gap-2">
                <HiMail className="text-primary-500 text-lg" />
                <span>huydoan031812@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <HiLocationMarker className="text-primary-500 text-lg" />
                <span>Le Chan District, Hai Phong City</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFacebookF className="text-primary-500 text-lg" />
                <a
                  href="https://www.facebook.com/huy.doan.439449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400"
                >
                  facebook.com/huy.doan.439449
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-brand-violet via-brand-pink to-brand-orange rounded-full blur-3xl opacity-40"
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-brand-pink/30 shadow-glow-lg ring-1 ring-white/10">
                <img
                  src={avatarImg}
                  alt="Tran Doan Huy"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="section-eyebrow text-[0.65rem]">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-primary-500/50 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-primary-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
