// import React from 'react';
// import { Link } from 'react-router-dom';
// // Import icons used in the sections
// import {
//    Zap,
//    TrendingUp,
//    Briefcase,
//    ChevronRight,
//    CheckCircle,
// } from 'lucide-react';

// /**
//  * Home component
//  * - Accepts an optional `twConfig` prop (safe defaults used when missing)
//  * - Safely reads hyphenated keys from twConfig using bracket syntax and provides fallbacks
//  */
// const Home = ({ twConfig = {} }) => {
//    // Safely read hyphenated keys from twConfig and provide sensible defaults
//    const {
//       ['academy-bg']: rawBg,
//       ['academy-accent']: rawAccent,
//       ['academy-secondary']: rawSecondary,
//       ['text-light']: rawTextLight,
//    } = twConfig || {};

//    // Normalize/validate classes: prefer provided classes only if they look like Tailwind classes,
//    // otherwise fall back to safe defaults.
//    const bgClass =
//       typeof rawBg === 'string' &&
//       (rawBg.startsWith('bg-') || rawBg.startsWith('text-'))
//          ? rawBg
//          : 'bg-gray-950';

//    const accentClass =
//       typeof rawAccent === 'string' && rawAccent.startsWith('text-')
//          ? rawAccent
//          : 'text-orange-400';

//    const secondaryClass =
//       typeof rawSecondary === 'string' &&
//       (rawSecondary.startsWith('bg-') || rawSecondary.startsWith('text-'))
//          ? rawSecondary
//          : 'bg-orange-600';

//    const textLightClass =
//       typeof rawTextLight === 'string' && rawTextLight.startsWith('text-')
//          ? rawTextLight
//          : 'text-gray-300';

//    // --- Hero Section ---
//    const HeroSection = () => (
//       <section className={`py-25 md:py-40 ${bgClass} text-center`}>
//          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//             <h1 className="text-6x1 md:text-8xl font-extrabold text-white leading-tight mb-6">
//                Master Tech Skills and{' '}
//                <span className={accentClass}>Land Your Dream Job.</span>
//             </h1>
//             <p
//                className={`text-xl md:text-2xl ${textLightClass} mb-10 max-w-2xl mx-auto`}
//             >
//                Davidson Tech Academy offers project-based, professional courses
//                in Software Development, AI, and Data Science.
//             </p>
//             <Link
//                to="/courses"
//                className={`inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white ${secondaryClass} rounded-xl hover:bg-orange-500 transition duration-300 shadow-xl transform hover:scale-[1.02] active:scale-[0.98]`}
//             >
//                Explore All Programs
//             </Link>
//             <p className="mt-8 text-sm text-gray-500">
//                Trusted by 500+ successful graduates globally.
//             </p>
//          </div>
//       </section>
//    );

//    // --- Value Proposition Section ---
//    const ValueProps = () => (
//       <section className={`py-20 ${bgClass} text-white`}>
//          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-orange-900/50 transition duration-500 transform hover:-translate-y-1">
//                   <Zap className={`w-8 h-8 mb-4 ${accentClass}`} />
//                   <h3 className="text-2xl font-bold mb-3">
//                      Project-Based Learning
//                   </h3>
//                   <p className="text-gray-400">
//                      Build a professional portfolio with real-world projects
//                      that get you noticed by employers.
//                   </p>
//                </div>

//                <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-orange-900/50 transition duration-500 transform hover:-translate-y-1">
//                   <TrendingUp className={`w-8 h-8 mb-4 ${accentClass}`} />
//                   <h3 className="text-2xl font-bold mb-3">
//                      Industry-Ready Curriculum
//                   </h3>
//                   <p className="text-gray-400">
//                      Master the latest tools and frameworks used by top tech
//                      companies globally.
//                   </p>
//                </div>

//                <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-orange-900/50 transition duration-500 transform hover:-translate-y-1">
//                   <Briefcase className={`w-8 h-8 mb-4 ${accentClass}`} />
//                   <h3 className="text-2xl font-bold mb-3">Career Support</h3>
//                   <p className="text-gray-400">
//                      Get guidance on resume creation, interview prep, and job
//                      placement assistance.
//                   </p>
//                </div>
//             </div>
//          </div>
//       </section>
//    );

//    // --- Featured Programs Section ---
//    const FeaturedPrograms = () => {
//       const programs = [
//          {
//             title: 'Mastering React & Next.js',
//             description:
//                'Build scalable high-performance web applications using the latest features of React, Hooks, and Next.js.',
//             duration: '20 Hrs',
//             rating: '4.9 (1.2K students)',
//          },
//          {
//             title: 'Data Science with Python',
//             description:
//                'Learn Python, Pandas, NumPy, and Scikit-learn to clean, analyze, and visualize complex datasets.',
//             duration: '30 Hrs',
//             rating: '4.8 (950 students)',
//          },
//          {
//             title: 'AI & Machine Learning Deep Dive',
//             description:
//                'Explore TensorFlow and PyTorch for building and training neural networks for practical AI solutions.',
//             duration: '45 Hrs',
//             rating: '4.7 (800 students)',
//          },
//          {
//             title: 'Full-Stack Node.js Development',
//             description:
//                'Develop robust APIs and web servers using Node.js, Express, and MongoDB (MERN stack).',
//             duration: '50 Hrs',
//             rating: '4.9 (1.5K students)',
//          },
//       ];

//       return (
//          <section className={`py-20 ${bgClass} text-white`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
//                   Our <span className={accentClass}>Featured Programs</span>
//                </h2>
//                <p className={`text-xl ${textLightClass} mb-12`}>
//                   Learn the essential skills used by the world's top tech
//                   companies.
//                </p>

//                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {programs.map((program, index) => (
//                      <div
//                         key={index}
//                         className="p-6 rounded-xl bg-gray-900 border border-gray-800 flex flex-col justify-between shadow-lg hover:shadow-xl transition duration-300"
//                      >
//                         <div>
//                            <div
//                               className={`text-3xl font-bold mb-2 ${accentClass}`}
//                            >
//                               <svg
//                                  className="w-8 h-8 inline-block mr-2 align-middle"
//                                  viewBox="0 0 24 24"
//                                  fill="none"
//                                  stroke="currentColor"
//                                  strokeWidth="2"
//                                  strokeLinecap="round"
//                                  strokeLinejoin="round"
//                               >
//                                  <circle cx="12" cy="12" r="10"></circle>
//                                  <path d="M12 2a10 10 0 0 1 7.64 3.42M12 2a10 10 0 0 0 -7.64 3.42M2 12h20M7 5.34l.43 1.13M16.57 5.34l-.43 1.13M12 22a10 10 0 0 1 -7.64 -3.42M12 22a10 10 0 0 0 7.64 -3.42M2 12a10 10 0 0 1 3.42 7.64M22 12a10 10 0 0 0 -3.42 7.64"></path>
//                               </svg>
//                            </div>
//                            <h3 className="text-xl font-bold mb-3">
//                               {program.title}
//                            </h3>
//                            <p className="text-gray-400 text-sm mb-4">
//                               {program.description}
//                            </p>
//                         </div>

//                         <div>
//                            <div className="flex justify-between text-xs text-gray-500 border-t border-gray-800 pt-3 mt-3">
//                               <span>{program.duration}</span>
//                               <span>⭐️ {program.rating}</span>
//                            </div>
//                            <Link
//                               to="/courses"
//                               className={`mt-4 w-full inline-flex items-center justify-center px-4 py-2 font-semibold text-white ${secondaryClass} rounded-lg hover:bg-orange-500 transition duration-300`}
//                            >
//                               View Details
//                            </Link>
//                         </div>
//                      </div>
//                   ))}
//                </div>

//                <Link
//                   to="/courses"
//                   className={`mt-12 inline-flex items-center px-8 py-3 text-lg font-bold text-white ${secondaryClass} rounded-xl hover:bg-orange-500 transition duration-300 shadow-xl`}
//                >
//                   View All 15+ Courses
//                   <ChevronRight className="w-5 h-5 ml-2" />
//                </Link>
//             </div>
//          </section>
//       );
//    };

//    // --- Testimonials Section ---
//    const Testimonials = () => {
//       const reviews = [
//          {
//             text: 'The Python course structure is unmatched. I went from zero coding knowledge to landing a Junior Developer role in just 4 months!',
//             author: 'Sarah Chen',
//             title: 'Software Developer, Tech Corp',
//          },
//          {
//             text: 'Lifetime Access is the best investment I ever made. The content is constantly updated, keeping me ahead of industry trends.',
//             author: 'Michael Davis',
//             title: 'Data Analyst',
//          },
//          {
//             text: 'The project-based learning prepared me far better than any university course. Highly recommend the React and Next.js program.',
//             author: 'Aisha Hassan',
//             title: 'Full-Stack Engineer',
//          },
//       ];

//       return (
//          <section className={`py-20 ${bgClass} text-white`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
//                   Why Students <span className={accentClass}>Choose Us</span>
//                </h2>
//                <p className={`text-xl ${textLightClass} mb-12`}>
//                   Hear directly from our successful graduates and see the
//                   results for yourself.
//                </p>

//                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   {reviews.map((review, index) => (
//                      <div
//                         key={index}
//                         className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl"
//                      >
//                         <blockquote className="text-lg italic text-gray-300 mb-6">
//                            <span
//                               className={`text-5xl font-black leading-none inline-block mr-2 -mt-4 ${accentClass}`}
//                            >
//                               &ldquo;
//                            </span>
//                            {review.text}
//                         </blockquote>
//                         <div className="text-left border-t border-gray-800 pt-4">
//                            <p className="font-bold text-lg text-white">
//                               {review.author}
//                            </p>
//                            <p className="text-sm text-gray-500">
//                               {review.title}
//                            </p>
//                         </div>
//                      </div>
//                   ))}
//                </div>
//             </div>
//          </section>
//       );
//    };

//    // --- Footer CTA Section ---
//    const FooterCTA = () => (
//       <section className={`py-20 ${bgClass} text-center`}>
//          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900/50 p-12 rounded-2xl border border-gray-800">
//             <h2 className="text-5xl font-extrabold text-white mb-4">
//                Ready to Start Coding?
//             </h2>
//             <p className={`text-xl ${textLightClass} mb-8`}>
//                Join thousands of students launching their careers with Davidson
//                Tech Academy.
//             </p>
//             <Link
//                to="/Courses"
//                className={`inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white ${secondaryClass} rounded-xl hover:bg-orange-500 transition duration-300 shadow-2xl`}
//             >
//                Start Learning Now
//             </Link>
//          </div>
//       </section>
//    );

//    // --- Footer ---
//    const Footer = () => (
//       <footer
//       // className={`py-10 ${bgClass} border-t border-gray-900 text-gray-500 text-sm`}
//       >
//          <div className="">
//             <div className="">
//                <Link to="/" className="hover:text-white mr-4"></Link>
//                <Link to="/courses" className="hover:text-white mr-4"></Link>
//                <Link to="/pricing" className="hover:text-white mr-4"></Link>
//                <Link to="/about" className="hover:text-white mr-4"></Link>
//                <a
//                   href="mailto:support@davidsontacademy.com"
//                   className="hover:text-white"
//                ></a>
//             </div>
//             <p>
//                {/* &copy; {new Date().getFullYear()} Davidson Tech Academy. All
//                rights reserved. */}
//             </p>
//             {/* <div className="mt-2 flex justify-center space-x-4">
//                <CheckCircle className={`w-4 h-4 ${accentClass}`} />
//                <span>Project-based learning. Zero fluff.</span>
//             </div> */}
//          </div>
//       </footer>
//    );

//    return (
//       <div className={`min-h-screen ${bgClass}`}>
//          {/* The main content starts with padding to clear the fixed Navbar */}
//          <div className="pt-16">
//             <HeroSection />
//             <ValueProps />
//             <FeaturedPrograms />
//             <Testimonials />
//             <FooterCTA />
//          </div>
//          <Footer />
//       </div>
//    );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
// Import icons used in the sections
import {
   Zap,
   TrendingUp,
   Briefcase,
   ChevronRight,
   CheckCircle,
} from 'lucide-react';

/**
 * Home component
 * - Accepts an optional `twConfig` prop (safe defaults used when missing)
 * - Safely reads hyphenated keys from twConfig using bracket syntax and provides fallbacks
 */
const Home = ({ twConfig = {} }) => {
   // Safely read hyphenated keys from twConfig and provide sensible defaults
   const {
      ['academy-bg']: rawBg,
      ['academy-accent']: rawAccent,
      ['academy-secondary']: rawSecondary,
      ['text-light']: rawTextLight,
   } = twConfig || {};

   // Normalize/validate classes: prefer provided classes only if they look like Tailwind classes,
   // otherwise fall back to safe defaults.
   const bgClass =
      typeof rawBg === 'string' &&
      (rawBg.startsWith('bg-') || rawBg.startsWith('text-'))
         ? rawBg
         : 'bg-gray-950';

   const accentClass =
      typeof rawAccent === 'string' && rawAccent.startsWith('text-')
         ? rawAccent
         : 'text-orange-400';

   const secondaryClass =
      typeof rawSecondary === 'string' &&
      (rawSecondary.startsWith('bg-') || rawSecondary.startsWith('text-'))
         ? rawSecondary
         : 'bg-orange-600';

   const textLightClass =
      typeof rawTextLight === 'string' && rawTextLight.startsWith('text-')
         ? rawTextLight
         : 'text-gray-300';

   const HeroSection = () => (
      <section className={`py-16 md:py-28 ${bgClass} text-center`}>
         <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <h1
               id="hero"
               className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-5"
            >
               Launch Your Tech Career in 6 Months
               <span
                  className={`block ${accentClass} mt-2 text-3xl md:text-5xl`}
               >
                  From Anywhere in the World
               </span>
            </h1>
            <p
               className={`text-lg md:text-xl ${textLightClass} mb-8 max-w-2xl mx-auto`}
            >
               Join professionals from 45+ countries learning tech skills
               remotely. Build a global portfolio, land international remote
               roles.
            </p>

            {/* Trust Badges - GLOBAL */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
               <div className="flex items-center">
                  <CheckCircle className={`w-5 h-5 mr-2 ${accentClass}`} />
                  <span className="text-white text-sm md:text-base">
                     100% Remote Learning
                  </span>
               </div>
               <div className="flex items-center">
                  <CheckCircle className={`w-5 h-5 mr-2 ${accentClass}`} />
                  <span className="text-white text-sm md:text-base">
                     Global Career Support
                  </span>
               </div>
               <div className="flex items-center">
                  <CheckCircle className={`w-5 h-5 mr-2 ${accentClass}`} />
                  <span className="text-white text-sm md:text-base">
                     Flexible Payment Options
                  </span>
               </div>
            </div> 

            {/* CTA Buttons - GLOBAL PRICING */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link
                  to="/courses"
                  className={`inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white ${secondaryClass} rounded-xl hover:bg-orange-500 transition duration-300 shadow-xl transform hover:scale-[1.02] active:scale-[0.98]`}
               >
                  View Global Courses & Pricing
               </Link>
               <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-orange-400 rounded-xl hover:bg-orange-400/10 transition duration-300"
               >
                  Schedule Free Discovery Call
               </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
               Students from USA, UK, Canada, Germany, India, and 40+ countries
            </p>
         </div>
      </section>
   )

   // --- Value Proposition Section ---
   const ValueProps = () => (
      <section className={`py- ${bgClass} text-white`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-orange-900/50 transition duration-500 transform hover:-translate-y-1">
                  <Zap className={`w-8 h-8 mb- ${accentClass}`} />
                  <h3 className="text-2xl font-bold mb-3">
                     Project-Based Learning
                  </h3>
                  <p className="text-gray-400">
                     Build a professional portfolio with real-world projects
                     that get you noticed by employers.
                  </p>
               </div>

               <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-orange-900/50 transition duration-500 transform hover:-translate-y-1">
                  <TrendingUp className={`w-8 h-8 mb-4 ${accentClass}`} />
                  <h3 className="text-2xl font-bold mb-3">
                     Industry-Ready Curriculum
                  </h3>
                  <p className="text-gray-400">
                     Master the latest tools and frameworks used by top tech
                     companies globally.
                  </p>
               </div>

               <div className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl hover:shadow-orange-900/50 transition duration-500 transform hover:-translate-y-1">
                  <Briefcase className={`w-8 h-8 mb-4 ${accentClass}`} />
                  <h3 className="text-2xl font-bold mb-3">Career Support</h3>
                  <p className="text-gray-400">
                     Get guidance on resume creation, interview prep, and job
                     placement assistance.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );

   // --- Featured Programs Section ---
   const FeaturedPrograms = () => {
      const programs = [
         {
            title: 'Mastering React & Next.js',
            description:
               'Build scalable high-performance web applications using the latest features of React, Hooks, and Next.js.',
            duration: '20 Hrs',
            rating: '4.9 (1.2K students)',
         },
         {
            title: 'Data Science with Python',
            description:
               'Learn Python, Pandas, NumPy, and Scikit-learn to clean, analyze, and visualize complex datasets.',
            duration: '30 Hrs',
            rating: '4.8 (950 students)',
         },
         {
            title: 'AI & Machine Learning Deep Dive',
            description:
               'Explore TensorFlow and PyTorch for building and training neural networks for practical AI solutions.',
            duration: '45 Hrs',
            rating: '4.7 (800 students)',
         },
         {
            title: 'Full-Stack Node.js Development',
            description:
               'Develop robust APIs and web servers using Node.js, Express, and MongoDB (MERN stack).',
            duration: '50 Hrs',
            rating: '4.9 (1.5K students)',
         },
      ];

      return (
         <section className={`py-20 ${bgClass} text-white`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Our <span className={accentClass}>Featured Programs</span>
               </h2>
               <p className={`text-xl ${textLightClass} mb-12`}>
                  Learn the essential skills used by the world's top tech
                  companies.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {programs.map((program, index) => (
                     <div
                        key={index}
                        className="p-6 rounded-xl bg-gray-900 border border-gray-800 flex flex-col justify-between shadow-lg hover:shadow-xl transition duration-300"
                     >
                        <div>
                           {/* Using a simple SVG icon for course categories */}
                           <div
                              className={`text-3xl font-bold mb-2 ${accentClass}`}
                           >
                              <svg
                                 className="w-8 h-8 inline-block mr-2 align-middle"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <circle cx="12" cy="12" r="10"></circle>
                                 <path d="M12 2a10 10 0 0 1 7.64 3.42M12 2a10 10 0 0 0 -7.64 3.42M2 12h20M7 5.34l.43 1.13M16.57 5.34l-.43 1.13M12 22a10 10 0 0 1 -7.64 -3.42M12 22a10 10 0 0 0 7.64 -3.42M2 12a10 10 0 0 1 3.42 7.64M22 12a10 10 0 0 0 -3.42 7.64"></path>
                              </svg>
                           </div>
                           <h3 className="text-xl font-bold mb-3">
                              {program.title}
                           </h3>
                           <p className="text-gray-400 text-sm mb-4">
                              {program.description}
                           </p>
                        </div>

                        <div>
                           <div className="flex justify-between text-xs text-gray-500 border-t border-gray-800 pt-3 mt-3">
                              <span>{program.duration}</span>
                              <span>⭐️ {program.rating}</span>
                           </div>
                           <Link
                              to="/courses"
                              className={`mt-4 w-full inline-flex items-center justify-center px-4 py-2 font-semibold text-white ${secondaryClass} rounded-lg hover:bg-orange-500 transition duration-300`}
                           >
                              View Details
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>

               <Link
                  to="/courses"
                  className={`mt-12 inline-flex items-center px-8 py-3 text-lg font-bold text-white ${secondaryClass} rounded-xl hover:bg-orange-500 transition duration-300 shadow-xl`}
               >
                  View All 15+ Courses
                  <ChevronRight className="w-5 h-5 ml-2" />
               </Link>
            </div>
         </section>
      );
   };

   // --- Testimonials Section ---
   const Testimonials = () => {
      const reviews = [
         {
            text: 'From Brazil to Berlin - this program gave me the skills to land a remote role at a European tech company. The global curriculum is unmatched.',
            author: 'Carlos Silva',
            title: 'Software Engineer, Berlin',
            flag: '🇧🇷', // Optional: small emoji flag
         },
         {
            text: 'As a Canadian career-changer, I needed flexible, project-based learning. Davidson Tech Academy delivered - I tripled my salary in 8 months.',
            author: 'Jessica Taylor',
            title: 'Frontend Developer, Toronto',
            flag: '🇨🇦',
         },
         {
            text: 'The AI course prepared me for Silicon Valley interviews. Now working remotely for a US startup while living in Southeast Asia.',
            author: 'Kenji Tanaka',
            title: 'AI Engineer, Remote (USA/Japan)',
            flag: '🇯🇵',
         },
      ];
      return (
         <section className={`py-20 ${bgClass} text-white`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
                  Why Students <span className={accentClass}>Choose Us</span>
               </h2>
               <p className={`text-xl ${textLightClass} mb-12`}>
                  Hear directly from our successful graduates and see the
                  results for yourself.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {reviews.map((review, index) => (
                     <div
                        key={index}
                        className="p-8 rounded-xl bg-gray-900 border border-gray-800 shadow-2xl"
                     >
                        <blockquote className="text-lg italic text-gray-300 mb-6">
                           <span
                              className={`text-5xl font-black leading-none inline-block mr-2 -mt-4 ${accentClass}`}
                           >
                              &ldquo;
                           </span>
                           {review.text}
                        </blockquote>
                        <div className="text-left border-t border-gray-800 pt-4">
                           <p className="font-bold text-lg text-white">
                              {review.author}
                           </p>
                           <p className="text-sm text-gray-500">
                              {review.title}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      );
   };

   // --- Footer CTA Section ---
   const FooterCTA = () => (
      <section className={`py-20 ${bgClass} text-center`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900/50 p-12 rounded-2xl border border-gray-800">
            <h2 className="text-5xl font-extrabold text-white mb-4">
               Ready to Start Coding?
            </h2>
            <p className={`text-xl ${textLightClass} mb-8`}>
               Join thousands of students launching their careers with Davidson
               Tech Academy.
            </p>
            <Link
               to="/Courses"
               className={`inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white ${secondaryClass} rounded-xl hover:bg-orange-500 transition duration-300 shadow-2xl`}
            >
               Start Learning Now
            </Link>
         </div>
      </section>
   );

   // --- Footer (Minimal placeholder, as the main App.js handles the site-wide footer) ---
   const Footer = () => (
      <footer
      // className={`py-10 ${bgClass} border-t border-gray-900 text-gray-500 text-sm`}
      >
         <div className="">
            <div className="">
               {/* These links are minimized as App.js has the primary footer */}
               <Link to="/" className="hover:text-white mr-4"></Link>
               <Link to="/courses" className="hover:text-white mr-4"></Link>
               <Link to="/pricing" className="hover:text-white mr-4"></Link>
               <Link to="/about" className="hover:text-white mr-4"></Link>
               <a
                  href="mailto:support@davidsontacademy.com"
                  className="hover:text-white"
               ></a>
            </div>
            <p>{/* Copyright text handled by App.js footer */}</p>
         </div>
      </footer>
   );

   return (
      <div className={`min-h-screen ${bgClass}`}>
         {/* The main content starts with padding to clear the fixed Navbar */}
         <div className="pt-16">
            <HeroSection />
            <ValueProps />
            <FeaturedPrograms />
            <Testimonials />
            <FooterCTA />
         </div>
         {/* The main App.js component already includes a site-wide footer, so this internal one is mostly commented out */}
         <Footer />
      </div>
   );
};

export default Home;
