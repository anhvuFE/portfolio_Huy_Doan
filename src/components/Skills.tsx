import { motion } from 'framer-motion';
import {
  MessageCircle,
  Headphones,
  Users,
  Target,
  Clock,
  TrendingUp,
  Facebook,
  Search,
  Palette,
  BarChart,
  Video,
  PenTool
} from 'lucide-react';

const Skills = () => {
  const softSkills = [
    { name: 'Communication', icon: MessageCircle, level: 90 },
    { name: 'Active Listening', icon: Headphones, level: 85 },
    { name: 'Negotiation', icon: Users, level: 80 },
    { name: 'Problem Solving', icon: Target, level: 85 },
    { name: 'Working Under Pressure', icon: Clock, level: 88 },
  ];

  const technicalSkills = [
    { name: 'Facebook Ads', icon: Facebook, level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Google SEO', icon: Search, level: 75, color: 'from-green-400 to-green-600' },
    { name: 'UI/UX Design', icon: Palette, level: 70, color: 'from-purple-400 to-purple-600' },
    { name: 'Content Marketing', icon: PenTool, level: 85, color: 'from-pink-400 to-pink-600' },
    { name: 'Video Editing', icon: Video, level: 80, color: 'from-red-400 to-red-600' },
    { name: 'Data Analysis', icon: BarChart, level: 75, color: 'from-yellow-400 to-yellow-600' },
  ];

  const marketingMetrics = [
    { name: 'CTR', description: 'Click-Through Rate' },
    { name: 'CPC', description: 'Cost Per Click' },
    { name: 'CPM', description: 'Cost Per Mille' },
    { name: 'ROAS', description: 'Return on Ad Spend' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 card-hover"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <skill.icon size={20} className="text-primary-600" />
                      </div>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 card-hover"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-full mb-3`}>
                      <skill.icon size={24} className="text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{skill.name}</h4>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                      <motion.div
                        className={`bg-gradient-to-r ${skill.color} h-1.5 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-white/50"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Marketing Metrics Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketingMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg text-center"
              >
                <TrendingUp size={24} className="text-primary-600 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-gray-900">{metric.name}</h4>
                <p className="text-xs text-gray-500">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;