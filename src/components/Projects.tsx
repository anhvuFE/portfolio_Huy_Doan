import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Target, DollarSign } from 'lucide-react';
import CountUp from './effects/CountUp';
import TiltCard from './effects/TiltCard';

const Projects = () => {
  const projects = [
    {
      title: 'Facebook Ads Campaign - KHPLand',
      category: 'Real Estate',
      description: 'Managed and optimized Facebook advertising campaigns with large budgets for premium real estate projects.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
      results: [
        { icon: TrendingUp, label: 'CTR Increase', value: '45%' },
        { icon: DollarSign, label: 'ROAS', value: '3.5x' },
        { icon: Users, label: 'Leads', value: '500+' },
      ],
      tags: ['Facebook Ads', 'Real Estate', 'Lead Generation'],
    },
    {
      title: 'LeyMja Brand Building',
      category: 'Fashion',
      description: 'Co-founded and developed comprehensive Digital Marketing strategy for fashion start-up brand.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop',
      results: [
        { icon: Users, label: 'Followers', value: '10K+' },
        { icon: Target, label: 'Engagement', value: '8.5%' },
        { icon: TrendingUp, label: 'Revenue', value: '+200%' },
      ],
      tags: ['Brand Building', 'Content Marketing', 'Social Media'],
    },
    {
      title: 'Content Marketing Strategy',
      category: 'Digital Marketing',
      description: 'Developed multi-channel content strategy, increased engagement and built community on social media.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop',
      results: [
        { icon: TrendingUp, label: 'Reach', value: '1M+' },
        { icon: Users, label: 'Community', value: '25K' },
        { icon: Target, label: 'Conversion', value: '12%' },
      ],
      tags: ['Content Strategy', 'SEO', 'Video Marketing'],
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-surface/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-eyebrow mb-3">04 — Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-brand-gradient mx-auto rounded-full"></div>
          <p className="mt-4 text-dark-muted max-w-2xl mx-auto">
            Successful marketing projects and campaigns I have participated in and contributed to
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              <TiltCard className="glass-card rounded-xl overflow-hidden group h-full">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-primary-500/20 mix-blend-overlay z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-dark-bg/70 backdrop-blur border border-primary-500/30 text-primary-300 text-xs font-semibold rounded-full font-display">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text mb-2">{project.title}</h3>
                <p className="text-dark-muted text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <result.icon size={20} className="text-primary-400 mx-auto mb-1" />
                      <p className="text-lg font-bold text-dark-text font-display">
                        <CountUp value={result.value} />
                      </p>
                      <p className="text-xs text-dark-muted">{result.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 text-dark-muted text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-brand-gradient text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-glow"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </motion.button>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
