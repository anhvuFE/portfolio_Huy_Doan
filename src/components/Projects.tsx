import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Target, DollarSign } from 'lucide-react';

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
      color: 'from-blue-400 to-cyan-400',
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
      color: 'from-purple-400 to-pink-400',
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
      color: 'from-green-400 to-blue-400',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Successful marketing projects and campaigns I have participated in and contributed to
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <result.icon size={20} className="text-primary-600 mx-auto mb-1" />
                      <p className="text-lg font-bold text-gray-900">{result.value}</p>
                      <p className="text-xs text-gray-500">{result.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;