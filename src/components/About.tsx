import { motion } from 'framer-motion';
import { BsCalendarFill, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { FaGraduationCap, FaBullseye, FaPlane, FaNewspaper, FaFutbol } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { BiTargetLock } from 'react-icons/bi';
import { MdSchool } from 'react-icons/md';

const About = () => {
  const stats = [
    { icon: BsCalendarFill, label: 'Born', value: '2003', color: 'from-blue-500 to-cyan-500' },
    { icon: BiTargetLock, label: 'Goal', value: 'Team Leader', color: 'from-purple-500 to-pink-500' },
    { icon: BsStarFill, label: 'Target GPA', value: '8.5', color: 'from-yellow-500 to-orange-500' },
    { icon: BsHeartFill, label: 'Passion', value: 'Digital Marketing', color: 'from-red-500 to-pink-500' },
  ];

  const interests = [
    { icon: FaPlane, text: 'Travel', color: 'text-blue-500' },
    { icon: FaNewspaper, text: 'News Updates', color: 'text-gray-600' },
    { icon: FaFutbol, text: 'Sports', color: 'text-green-600' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tran Doan Huy - Junior Digital Marketer
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
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
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    className="group relative bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <div className="relative flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl`}>
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                        <p className="font-semibold text-gray-900">{stat.value}</p>
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
              className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-white/60 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <HiHeart className="text-pink-400 text-2xl animate-pulse" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaBullseye className="text-2xl text-red-500" />
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
                      className="px-5 py-2.5 bg-white/80 backdrop-blur text-gray-700 rounded-full text-sm font-medium shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default border border-white/50 flex items-center gap-2"
                    >
                      <HobbyIcon className={`text-lg ${hobby.color}`} />
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
              className="relative bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-white/60 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <MdSchool className="text-blue-400 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-2xl text-gray-700" />
                <span>Education</span>
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900 text-lg">Business Administration / Digital Marketing</p>
                  <p className="text-gray-600">FPT University Hanoi</p>
                  <p className="text-sm text-gray-500 mt-1">2021 - 12/2025</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 flex items-center gap-2"
                >
                  <BsStarFill className="text-yellow-400 text-lg" />
                  <p className="text-sm text-gray-700 font-medium">
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