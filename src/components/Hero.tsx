import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiDownload, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import avatarImg from '../assets/avt.png';
import cvFile from '../assets/Tran-Doan-Huy-TopCV.vn-311025.215752.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 animate-gradient-shift"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-lg md:text-xl text-gray-600 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Tran Doan Huy
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-primary-600 mb-6 h-[40px]">
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

            <p className="text-gray-600 mb-8 leading-relaxed">
              With 6 months of experience in Digital Marketing, I have honed my expertise
              across diverse industries including Real Estate and Fashion. My goal in the next 2 years
              is to become a Digital Marketing Team Leader.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                <HiMail className="mr-2 text-xl" />
                Contact Me
              </motion.a>
              <motion.a
                href={cvFile}
                download="Tran-Doan-Huy-CV.pdf"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-full font-medium backdrop-blur-sm transition-all duration-300"
              >
                <HiDownload className="mr-2 text-xl animate-bounce" />
                Download CV
              </motion.a>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <HiPhone className="text-primary-600 text-lg" />
                <span>+84 763 484 002</span>
              </div>
              <div className="flex items-center gap-2">
                <HiMail className="text-primary-600 text-lg" />
                <span>huydoan031812@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <HiLocationMarker className="text-primary-600 text-lg" />
                <span>Le Chan District, Hai Phong City</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFacebookF className="text-primary-600 text-lg" />
                <a href="https://www.facebook.com/huy.doan.439449" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
                  facebook.com/huy.doan.439449
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
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
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
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
    </section>
  );
};

export default Hero;