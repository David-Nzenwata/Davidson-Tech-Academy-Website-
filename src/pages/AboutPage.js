import React from 'react';
import { Target, Zap, Users, Code } from 'lucide-react';

// Data for the core values section
const CORE_VALUES = [
   {
      icon: Zap,
      title: 'Project-First Learning',
      description:
         'We believe in learning by doing. Our curriculum is built entirely around real-world projects that matter to employers.',
   },
   {
      icon: Code,
      title: 'Industry Relevance',
      description:
         'Our courses are constantly updated to reflect the latest tools, frameworks, and best practices used in the tech industry today.',
   },
   {
      icon: Users,
      title: 'Community Support',
      description:
         'Join a vibrant global network of peers and mentors who are dedicated to helping you succeed every step of the way.',
   },
];

const AboutPage = () => {
   return (
      <div className="bg-academy-bg min-h-screen pt-20">
         {/* Header Section */}
         <header className="py-16 text-center">
            <h1 className="text-5xl font-extrabold text-white mb-3">
               About{' '}
               <span className="text-academy-accent">
                  Davidson Tech Academy
               </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto px-4">
               Our mission is to bridge the gap between education and employment
               by delivering cutting-edge, practical tech skills.
            </p>
         </header>

         {/* Mission & Vision Section */}
         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="md:col-span-1">
               <Target className="w-12 h-12 text-academy-accent mb-4" />
               <h2 className="text-3xl font-bold text-white mb-4">
                  Our Vision: Empowering the Next Generation of Developers
               </h2>
               <p className="text-gray-400 text-lg leading-relaxed">
                  In a rapidly evolving digital world, standard education often
                  falls short. Davidson Tech Academy was founded on the
                  principle that the best way to learn tech is through immersion
                  in real-world challenges. We don't just teach code; we teach
                  problem-solving, collaboration, and how to deliver
                  production-ready software.
               </p>
               <p className="text-gray-400 text-lg leading-relaxed mt-4">
                  We are committed to making a world-class tech education
                  accessible to anyone, anywhere, ensuring our graduates are not
                  just ready for a job, but ready to lead in their fields.
               </p>
            </div>

            {/* Image Placeholder - Will be replaced with a real image later */}
            <div className="md:col-span-1 bg-gray-800 h-64 rounded-xl flex items-center justify-center text-gray-500">
               <span className="text-xl p-4 text-center">
                  {/* // <img src="../Davidson.jpg" /> */}
               [Image / Video Placeholder: Add image later]
               </span>
            </div>
         </section>

         {/* Core Values Section */}
         <section className="bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <h2 className="text-4xl font-extrabold text-white text-center mb-12">
                  Our Core <span className="text-academy-accent">Values</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {CORE_VALUES.map((value, index) => (
                     <div
                        key={index}
                        className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center"
                     >
                        <value.icon className="w-10 h-10 text-academy-accent mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-3">
                           {value.title}
                        </h3>
                        <p className="text-gray-400">{value.description}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
};

export default AboutPage;
