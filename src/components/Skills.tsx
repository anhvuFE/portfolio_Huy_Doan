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
  PenTool,
} from 'lucide-react';
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFigma,
  FaWordpress,
  FaMailchimp,
} from 'react-icons/fa';
import Marquee from './effects/Marquee';

const Skills = () => {
  const softSkills = [
    { name: 'Communication', icon: MessageCircle, level: 90 },
    { name: 'Active Listening', icon: Headphones, level: 85 },
    { name: 'Negotiation', icon: Users, level: 80 },
    { name: 'Problem Solving', icon: Target, level: 85 },
    { name: 'Working Under Pressure', icon: Clock, level: 88 },
  ];

  const technicalSkills = [
    { name: 'Facebook Ads', icon: Facebook, level: 90 },
    { name: 'Google SEO', icon: Search, level: 75 },
    { name: 'UI/UX Design', icon: Palette, level: 70 },
    { name: 'Content Marketing', icon: PenTool, level: 85 },
    { name: 'Video Editing', icon: Video, level: 80 },
    { name: 'Data Analysis', icon: BarChart, level: 75 },
  ];

  const tools = [
    { icon: FaFacebookF, name: 'Meta Ads' },
    { icon: FaGoogle, name: 'Google Ads' },
    { icon: FaInstagram, name: 'Instagram' },
    { icon: FaTiktok, name: 'TikTok' },
    { icon: FaYoutube, name: 'YouTube' },
    { icon: FaFigma, name: 'Figma' },
    { icon: FaWordpress, name: 'WordPress' },
    { icon: FaMailchimp, name: 'Mailchimp' },
  ];

  const marketingMetrics = [
    { name: 'CTR', description: 'Click-Through Rate' },
    { name: 'CPC', description: 'Cost Per Click' },
    { name: 'CPM', description: 'Cost Per Mille' },
    { name: 'ROAS', description: 'Return on Ad Spend' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-surface/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow mb-3">02 — What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Skills</h2>
          <div className="w-20 h-1 bg-brand-gradient mx-auto rounded-full"></div>
        </motion.div>

        {/* Tools & platforms marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-dark-muted mb-5">
            Tools &amp; Platforms
          </p>
          <Marquee speed={28}>
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-pink/40 transition-colors duration-300"
                >
                  <Icon className="text-2xl text-primary-300" />
                  <span className="text-dark-text font-medium whitespace-nowrap">{tool.name}</span>
                </div>
              );
            })}
          </Marquee>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-dark-text mb-6">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-4 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-500/15 border border-primary-500/30 rounded-lg">
                        <skill.icon size={20} className="text-primary-400" />
                      </div>
                      <span className="font-medium text-dark-text">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary-400 font-display">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <motion.div
                      className="bg-brand-gradient h-2 rounded-full shadow-glow"
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
            <h3 className="text-2xl font-semibold text-dark-text mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-5 rounded-2xl"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary-500/15 border border-primary-500/30 rounded-full mb-3">
                      <skill.icon size={24} className="text-primary-400" />
                    </div>
                    <h4 className="font-medium text-dark-text mb-1">{skill.name}</h4>
                    <div className="w-full bg-white/5 rounded-full h-1.5 mb-1">
                      <motion.div
                        className="bg-brand-gradient h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-dark-muted font-display">{skill.level}%</span>
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
          className="mt-12 glass-card p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-semibold text-dark-text mb-6 text-center">
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
                whileHover={{ y: -4 }}
                className="bg-white/5 border border-white/10 hover:border-primary-500/40 p-4 rounded-xl text-center transition-all duration-300"
              >
                <TrendingUp size={24} className="text-primary-400 mx-auto mb-2" />
                <h4 className="text-lg font-bold text-dark-text font-display">{metric.name}</h4>
                <p className="text-xs text-dark-muted">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
