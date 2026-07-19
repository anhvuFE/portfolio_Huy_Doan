import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiUser } from 'react-icons/hi';
import { FaFacebookF, FaPaperPlane } from 'react-icons/fa';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { MdSubject } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for contacting me! I will respond as soon as possible.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+84 763 484 002',
      link: 'tel:+84763484002',
    },
    {
      icon: HiMail,
      title: 'Email',
      value: 'huydoan031812@gmail.com',
      link: 'mailto:huydoan031812@gmail.com',
    },
    {
      icon: HiLocationMarker,
      title: 'Address',
      value: 'Le Chan District, Hai Phong City',
      link: '#',
    },
    {
      icon: FaFacebookF,
      title: 'Facebook',
      value: 'Huy Doan',
      link: 'https://www.facebook.com/huy.doan.439449',
    },
  ];

  const inputClass =
    'w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-dark-text placeholder-dark-muted/60 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300';

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient glow decorations */}
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
          <p className="section-eyebrow mb-3">05 — Say Hello</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-brand-gradient mx-auto rounded-full"></div>
          <p className="mt-4 text-dark-muted max-w-2xl mx-auto">
            Let's discuss collaboration opportunities or new projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-dark-text mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.icon === FaFacebookF ? '_blank' : undefined}
                    rel={info.icon === FaFacebookF ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="glass-card flex items-center gap-4 p-5 rounded-2xl group"
                  >
                    <div className="p-4 bg-primary-500/15 border border-primary-500/30 rounded-2xl group-hover:scale-110 group-hover:bg-primary-500/25 transition-all duration-300">
                      <Icon className="text-2xl text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-muted font-medium">{info.title}</p>
                      <p className="font-semibold text-dark-text">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-8 glass-card rounded-3xl"
            >
              <h4 className="text-xl font-bold text-dark-text mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Ready for new opportunities!
              </h4>
              <p className="text-dark-muted leading-relaxed">
                I'm always open to collaboration opportunities and new projects in Digital Marketing.
                Contact me to create successful campaigns together!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold text-dark-text mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-muted mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-muted text-xl" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-muted mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-muted text-xl" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-dark-muted mb-2">
                  Subject
                </label>
                <div className="relative">
                  <MdSubject className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-muted text-xl" />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Message subject"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark-muted mb-2">
                  Message
                </label>
                <div className="relative">
                  <BiMessageSquareDetail className="absolute left-4 top-4 text-dark-muted text-xl" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-brand-gradient text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-glow hover:shadow-glow-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FaPaperPlane className="text-xl" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
