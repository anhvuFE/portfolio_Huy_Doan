import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Marketing Intern',
      company: 'KHPLand Real Estate Investment & Consulting JSC',
      period: '06/2024 - 12/2024',
      type: 'Real Estate',
      responsibilities: [
        'Planned, proposed, and built content for Facebook and TikTok channels',
        'Produced scripts and edited videos for real estate advertising campaigns',
        'Managed Facebook Ads with substantial budgets',
      ],
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Co-Founder',
      company: 'LeyMja Fashion Start-up Brand',
      period: '08/2024 - 11/2024',
      type: 'Fashion',
      responsibilities: [
        'Conceptualized and developed content strategy for posts',
        'Implemented content planning, writing, editing, and posting on Facebook',
        'Monitored, analyzed, and evaluated performance metrics: CTR, CPC, CPM, ROAS',
        'Developed strategies to improve content quality and Remarketing',
        'Supported content production on Fanpage',
        'Reported results periodically by day and campaign',
      ],
      color: 'from-purple-400 to-purple-600',
    },
  ];

  const certifications = [
    {
      name: 'Information Systems',
      issuer: 'Coursera - University of Minnesota',
      year: '2024',
    },
    {
      name: 'Social Media Marketing',
      issuer: 'Coursera - Northwestern University',
      year: '2024',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-1 text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold mb-2 bg-gradient-to-r ${exp.color}`}>
                      {exp.type}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <h4 className="text-md font-medium text-gray-700 mb-2">{exp.company}</h4>
                    <div className="flex items-center gap-2 text-gray-500 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className={`flex items-start gap-2 text-sm text-gray-600 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className={index % 2 === 0 ? 'text-right' : 'text-left'}>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-primary-600 flex items-center justify-center z-10">
                  <Briefcase size={20} className="text-primary-600" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            <div className="absolute left-8 top-0 w-0.5 h-full bg-gray-300"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start mb-8 pl-16"
              >
                <div className="absolute left-5 w-6 h-6 bg-white rounded-full border-4 border-primary-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>

                <div className="bg-white p-5 rounded-xl shadow-lg w-full">
                  <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold mb-3 bg-gradient-to-r ${exp.color}`}>
                    {exp.type}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">{exp.company}</h4>
                  <div className="flex items-center gap-2 text-gray-500 mb-3">
                    <Calendar size={14} />
                    <span className="text-xs">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mt-1">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;