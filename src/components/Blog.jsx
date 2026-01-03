import { motion } from "framer-motion";



import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {
const blogPosts = [
  {
    title: 'Why I Love Building Full-Stack Applications',
    excerpt:
      'Building end-to-end web applications gives me the freedom to solve real problems — from designing intuitive UIs to implementing secure backend logic and databases.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    date: 'Nov 20, 2025',
    readTime: '5 min read',
  },
  {
    title: 'Clean Code & Scalable Architecture',
    excerpt:
      'For me, clean code is about readability, maintainability, and scalability. Writing structured, modular code helps applications grow without becoming complex.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    date: 'Nov 15, 2025',
    readTime: '7 min read',
  },
  {
    title: 'My Journey into Full-Stack Development',
    excerpt:
      'From learning core programming concepts to building MERN stack projects, this journey has shaped how I approach problem-solving and modern web development.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    date: 'Nov 10, 2025',
    readTime: '6 min read',
  },
  {
    title: 'Building Secure & Responsive Web Apps',
    excerpt:
      'Security and responsiveness are non-negotiable. I focus on authentication, API integration, and responsive design to deliver reliable user experiences.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    date: 'Nov 5, 2025',
    readTime: '8 min read',
  },
];


  return (
    <section id="blog" className="relative min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-12"
        > Insights 
          & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experiences</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 dark:hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-white/70 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-blue-500 group-hover:gap-4 transition-all">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}