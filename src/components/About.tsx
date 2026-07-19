import { motion } from 'framer-motion';
import { BsCalendarFill, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { FaGraduationCap, FaBullseye, FaPlane, FaNewspaper, FaFutbol } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { BiTargetLock } from 'react-icons/bi';
import { MdSchool } from 'react-icons/md';

const About = () => {
  const stats = [
    { icon: BsCalendarFill, label: 'Born', value: '2003' },
    { icon: BiTargetLock, label: 'Goal', value: 'Team Leader' },
    { icon: BsStarFill, label: 'Target GPA', value: '8.5' },
    { icon: BsHeartFill, label: 'Passion', value: 'Digital Marketing' },
  ];

  const interests = [
    { icon: FaPlane, text: 'Travel' },
    { icon: FaNewspaper, text: 'News Updates' },
    { icon: FaFutbol, text: 'Sports' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient glow decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-700/10 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow mb-3">01 — Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-brand-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gradient">
              Tran Doan Huy - Junior Digital Marketer
            </h3>
            <div className="space-y-4 text-dark-muted leading-relaxed">
              <p>
                I am passionate about Digital Marketing with 6 months of experience in this field.
                During this time, I have had the opportunity to work in both Real Estate and Fashion industries,
                giving me a multi-dimensional perspective on marketing across different sectors.
              </p>
              <p>
                Since 2024, I have been continuously improving my knowledge in Facebook Advertising,
                Google SEO, and UI/UX Design. This enables me to create more comprehensive
                and effective marketing campaigns.
              </p>
              <p>
                My goal in the next 2 years is to become a Digital Marketing Team Leader,
                directly implementing various advertising campaigns and contributing to the sustainable
                growth of the business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-card group relative p-5 rounded-2xl overflow-hidden"
                  >
                    <div className="relative flex items-center gap-3">
                      <div className="p-3 bg-primary-500/15 border border-primary-500/30 rounded-xl group-hover:bg-primary-500/25 transition-colors duration-300">
                        <Icon className="text-primary-400 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-muted">{stat.label}</p>
                        <p className="font-semibold text-dark-text">{stat.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card relative p-8 rounded-3xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <HiHeart className="text-primary-400 text-2xl animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-dark-text mb-4 flex items-center gap-2">
                <FaBullseye className="text-2xl text-primary-500" />
                <span>Interests</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((hobby, index) => {
                  const HobbyIcon = hobby.icon;
                  return (
                    <motion.span
                      key={hobby.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-5 py-2.5 bg-white/5 text-dark-text rounded-full text-sm font-medium transition-all duration-300 cursor-default border border-white/10 hover:border-primary-500/40 flex items-center gap-2"
                    >
                      <HobbyIcon className="text-lg text-primary-400" />
                      <span>{hobby.text}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card relative p-8 rounded-3xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <MdSchool className="text-primary-400 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-dark-text mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-2xl text-primary-400" />
                <span>Education</span>
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-dark-text text-lg">Business Administration / Digital Marketing</p>
                  <p className="text-dark-muted">FPT University Hanoi</p>
                  <p className="text-sm text-dark-muted/70 mt-1 font-display">2021 - 12/2025</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-2"
                >
                  <BsStarFill className="text-primary-400 text-lg" />
                  <p className="text-sm text-dark-muted font-medium">
                    Aiming for distinction with GPA 8.5 upon graduation
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
