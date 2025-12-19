// import React from 'react';
// import CourseCard from './CourseCard';




// // Data for the course cards
// const FEATURED_COURSES = [
//    {
//       id: 1,
//       title: 'Mastering React & Next.js',
//       description:
//          'Build scalable, high-performance web applications using the latest features of React, Hooks, and Next.js.',
//       duration: '20 Hrs',
//       rating: 4.9,
//       students: '1.2K',
//       slug: 'react-nextjs',
//    },
//    {
//       id: 2,
//       title: 'Data Science with Python',
//       description:
//          'Learn Python, Pandas, NumPy, and Scikit-learn to clean, analyze, and visualize complex datasets.',
//       duration: '35 Hrs',
//       rating: 4.8,
//       students: '850',
//       slug: 'data-science',
//    },
//    {
//       id: 3,
//       title: 'AI & Machine Learning Deep Dive',
//       description:
//          'Explore TensorFlow and PyTorch for building and training neural networks for practical AI solutions.',
//       duration: '40 Hrs',
//       rating: 5.0,
//       students: '600',
//       slug: 'ai-ml',
//    },
//    {
//       id: 4,
//       title: 'Full-Stack Node.js Development',
//       description:
//          'Develop robust APIs and web servers using Node.js, Express, and MongoDB (MERN stack).',
//       duration: '25 Hrs',
//       rating: 4.7,
//       students: '1.5K',
//       slug: 'nodejs-fullstack',
//    },
// ];

// const CoursesSection = () => {
//    return (
//       // New code for CoursesSection (inside src/components/CoursesSection.js)
//       // New code for CoursesSection
//       <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-academy-bg">
//          <div className="max-w-7xl mx-auto">
//             {/* Section Header */}
//             <h2 className="text-4xl font-extrabold text-white text-center mb-4">
//                Our <span className="text-academy-accent">Featured</span>{' '}
//                Programs
//             </h2>
//             <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
//                Learn the essential skills used by the world's top tech
//                companies.
//             </p>

//             {/* Course Card Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                {FEATURED_COURSES.map((course) => (
//                   <CourseCard key={course.id} {...course} />
//                ))}
//             </div>

//             {/* Main CTA to view all courses */}
//             <div className="text-center mt-16">
//                <a
//                   href="/courses"
//                   className="py-3 px-8 text-lg font-bold rounded-xl text-gray-900 bg-academy-accent hover:bg-opacity-90 transition duration-300 shadow-xl shadow-academy-accent/50"
//                >
//                   View All 15+ Courses
//                </a>
//             </div>
//          </div>
//       </section>
//    );
// };

// export default CoursesSection;


import React from 'react';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

// --- CENTRAL COURSE DATA DEFINITION ---
// The 'slug' property MUST exactly match the keys in CourseDetailPage.js.
const ALL_COURSES = [
   {
      title: 'Mastering React & Next.js',
      slug: 'react-nextjs', // <-- CORRECT KEY
      description:
         'Build scalable, high-performance web applications using the latest features of React, Hooks, and Next.js.',
      duration: '20 Hrs',
      rating: '4.9',
      students: '1.2K',
   },
   {
      title: 'Data Science with Python',
      slug: 'data-science', // <-- CORRECT KEY
      description:
         'Learn Python, Pandas, NumPy, and Scikit-learn to clean, analyze, and visualize complex datasets.',
      duration: '35 Hrs',
      rating: '4.8',
      students: '850',
   },
   {
      title: 'AI & Machine Learning Deep Dive',
      slug: 'ai-machine-learning', // <-- CORRECT KEY
      description:
         'Explore TensorFlow and PyTorch for building and training neural networks for practical AI solutions.',
      duration: '40 Hrs',
      rating: '5',
      students: '600',
   },
   {
      title: 'Full-Stack Node.js Development',
      slug: 'full-stack-node-js', // <-- CORRECT KEY
      description:
         'Develop robust APIs and web servers using Node.js, Express, and MongoDB (MERN stack).',
      duration: '25 Hrs',
      rating: '4.7',
      students: '1.5K',
   },
   {
      title: 'Advanced JavaScript (ES6+)',
      slug: 'advanced-javascript', // <-- CORRECT KEY
      description:
         'Deep dive into modern JavaScript features, asynchronous programming, and best practices.',
      duration: '15 Hrs',
      rating: '4.6',
      students: '1.8K',
   },
   {
      title: 'SQL and Database Fundamentals',
      slug: 'sql-fundamentals', // <-- CORRECT KEY
      description:
         'Master relational databases, advanced SQL queries, indexing, and database design principles.',
      duration: '10 Hrs',
      rating: '4.5',
      students: '2.1K',
   },
   {
      title: 'Digital Marketing Mastery',
      slug: 'digital-marketing-mastery', // <-- CORRECT KEY
      description:
         'Learn SEO, paid advertising (PPC), social media strategies, and email marketing for business growth.',
      duration: '18 Hrs',
      rating: '4.6',
      students: '3.1K',
   },
   {
      title: 'Computer Basics and Operations',
      slug: 'computer-basics', // <-- CORRECT KEY
      description:
         'Essential skills for navigating operating systems, file management, and core productivity software.',
      duration: '8 Hrs',
      rating: '4.4',
      students: '4.5K',
   },
   {
      title: 'Professional Video Editing (Premiere Pro)',
      slug: 'professional-video-editing', // <-- CORRECT KEY
      description:
         'Edit high-quality videos for social media and professional projects using Adobe Premiere Pro.',
      duration: '16 Hrs',
      rating: '4.7',
      students: '1.9K',
   },
   {
      title: 'Graphics Design Fundamentals',
      slug: 'graphics-design-fundamentals', // <-- CORRECT KEY
      description:
         'Master foundational design principles, typography, and color theory using industry-standard tools.',
      duration: '22 Hrs',
      rating: '4.8',
      students: '2.5K',
   },
   {
      title: 'Ethical Hacking & Cyber Security',
      slug: 'ethical-hacking', // <-- CORRECT KEY
      description:
         'Understand penetration testing, vulnerability analysis, and network defense strategies.',
      duration: '30 Hrs',
      rating: '5',
      students: '1.1K',
   },
   {
      title: 'Networking Fundamentals (Cisco)',
      slug: 'networking-fundamentals', // <-- CORRECT KEY
      description:
         'Learn the core concepts of TCP/IP, routing, switching, and network architecture.',
      duration: '24 Hrs',
      rating: '4.5',
      students: '900',
   },
   {
      title: 'Blockchain Technology & Crypto',
      slug: 'blockchain-technology', // <-- CORRECT KEY
      description:
         'Explore decentralized ledgers, smart contracts (Solidity), and the foundational technology of Web3.',
      duration: '14 Hrs',
      rating: '4.9',
      students: '750',
   },
   {
      title: 'Forex Trading Automation (Python)',
      slug: 'forex-trading', // <-- CORRECT KEY
      description:
         'Use Python to build algorithmic trading bots and perform quantitative market analysis.',
      duration: '15 Hrs',
      rating: '4.3',
      students: '1.3K',
   },
   {
      title: 'Web Development Full Stack (Advanced)',
      slug: 'web-dev-full-stack', // <-- CORRECT KEY
      description:
         'Comprehensive program covering both front-end and back-end frameworks for job readiness.',
      duration: '50 Hrs',
      rating: '4.9',
      students: '3.8K',
   },
   {
      title: 'Data Analysis & Visualization (Power BI)',
      slug: 'data-analysis-visualization', // <-- CORRECT KEY
      description:
         'Transform raw data into actionable insights using advanced Excel, SQL, and Power BI/Tableau.',
      duration: '28 Hrs',
      rating: '4.7',
      students: '2.2K',
   },
   {
      title: 'Mobile App Development (Native & Hybrid)',
      slug: 'mobile-app-development', // <-- CORRECT KEY
      description:
         'Build native iOS/Android apps with Swift/Kotlin and hybrid apps with React Native/Flutter.',
      duration: '45 Hrs',
      rating: '4.8',
      students: '1.6K',
   },
   {
      title: 'Game Development (Unity/C#)',
      slug: 'game-development', // <-- CORRECT KEY
      description:
         'Create 2D and 3D games from concept to deployment using the Unity game engine and C# scripting.',
      duration: '38 Hrs',
      rating: '4.6',
      students: '1.0K',
   },
];

const CoursesSection = ({ limit }) => {
   // Only show a subset if the 'limit' prop is passed
   const coursesToShow = limit ? ALL_COURSES.slice(0, limit) : ALL_COURSES;

   return (
      <section className="py-16 bg-academy-bg text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-extrabold text-white">
                  Our Top Courses
               </h2>
               <p className="mt-4 text-xl text-gray-400">
                  Master the technologies that power the future.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {coursesToShow.map((course) => (
                  <CourseCard
                     key={course.slug}
                     title={course.title}
                     description={course.description}
                     duration={course.duration}
                     rating={course.rating}
                     students={course.students}
                     slug={course.slug} // Ensures the correct slug is passed to the Link component
                  />
               ))}
            </div>

            {limit && (
               <div className="text-center mt-12">
                  <Link
                     to="/courses"
                     className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-sm text-gray-900 bg-academy-accent hover:bg-orange-500 transition duration-300"
                  >
                     View All Courses ({ALL_COURSES.length})
                  </Link>
               </div>
            )}
         </div>
      </section>
   );
};

export default CoursesSection;