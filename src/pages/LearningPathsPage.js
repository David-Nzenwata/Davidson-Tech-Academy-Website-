// import React from 'react';
// import LearningPathCard from '../components/LearningPathCard'; // Check the path!

// const LEARNING_PATHS = [
//    {
//       id: 1,
//       title: 'Full-Stack Web Developer',
//       description:
//          'Master the MERN stack (MongoDB, Express, React, Node) to build and deploy modern, high-performance web applications from scratch.',
//       duration: '6 Months',
//       outcome: 'Mid-Level Web Developer',
//       courses: 7,
//    },
//    {
//       id: 2,
//       title: 'AI & Data Science Specialist',
//       description:
//          'Focus on Python, machine learning algorithms, deep learning with TensorFlow, and data visualization for a career in AI or data science.',
//       duration: '8 Months',
//       outcome: 'Junior Data Scientist',
//       courses: 9,
//    },
//    {
//       id: 3,
//       title: 'DevOps & Cloud Engineer',
//       description:
//          'Learn Docker, Kubernetes, AWS/Azure, CI/CD pipelines, and infrastructure as code (IaC) to streamline deployment processes.',
//       duration: '5 Months',
//       outcome: 'Junior DevOps Engineer',
//       courses: 6,
//    },
//    {
//       id: 4,
//       title: 'Mobile App Developer (React Native)',
//       description:
//          'Build cross-platform mobile applications for iOS and Android using a single codebase with React Native and JavaScript.',
//       duration: '4 Months',
//       outcome: 'Mobile App Developer',
//       courses: 5,
//    },
// ];

// const LearningPathsPage = () => {
//    return (
//       <div className="bg-academy-bg min-h-screen pt-20">
//          <header className="py-16 text-center">
//             <h1 className="text-5xl font-extrabold text-white mb-3">
//                Career{' '}
//                <span className="text-academy-accent">Learning Paths</span>
//             </h1>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto px-4">
//                Structured, start-to-finish roadmaps designed to take you from a
//                beginner level to job-ready expert in a specific domain.
//             </p>
//          </header>

//          {/* Path Grid */}
//          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                {LEARNING_PATHS.map((path) => (
//                   <LearningPathCard key={path.id} {...path} />
//                ))}
//             </div>
//          </div>
//       </div>
//    );
// };

// export default LearningPathsPage;

import React from 'react';
import LearningPathCard from '../components/LearningPathCard'; // Check the path!

// File: src/pages/LearningPathsPage.js

const LEARNING_PATHS = [
   {
      id: 1,
      title: 'Full-Stack Web Developer',
      description:
         'Master the MERN stack (MongoDB, Express, React, Node) to build and deploy modern, high-performance web applications from scratch.',
      duration: '6 Months',
      outcome: 'Mid-Level Web Developer',
      courses: 7,
      // <--- NEW: The slug for the main course on this path (Advanced Full-Stack)
      linkSlug: 'web-dev-full-stack',
   },
   {
      id: 2,
      title: 'AI & Data Science Specialist',
      description:
         'Focus on Python, machine learning algorithms, deep learning with TensorFlow, and data visualization for a career in AI or data science.',
      duration: '8 Months',
      outcome: 'Junior Data Scientist',
      courses: 9,
      // <--- NEW: The slug for the main course on this path (Deep Learning)
      linkSlug: 'ai-machine-learning',
   },
   {
      id: 3,
      title: 'Cyber Security Specialist', // Title updated
      description:
         'Master the full penetration testing lifecycle, from vulnerability analysis to network defense and secure configuration management.', // Description updated
      duration: '6 Months', // Duration updated
      outcome: 'Certified Ethical Hacker', // Outcome updated
      courses: 5, // Course count updated
      // The linkSlug now points to the 'ethical-hacking' course, which is defined in your CourseDetailPage.js data.
      linkSlug: 'cyber-security',
   },
   {
      id: 4,
      title: 'Mobile App Developer (React Native)',
      description:
         'Build cross-platform mobile applications for iOS and Android using a single codebase with React Native and JavaScript.',
      duration: '4 Months',
      outcome: 'Mobile App Developer',
      courses: 5,
      // <--- NEW: The slug for the main course on this path
      linkSlug: 'mobile-app-development',
   },
];
// ... rest of the file remains the same. The component mapping still passes the new prop:
// <LearningPathCard key={path.id} {...path} />

const LearningPathsPage = () => {
   return (
      <div className="bg-academy-bg min-h-screen pt-20">
         <header className="py-16 text-center">
            <h1 className="text-5xl font-extrabold text-white mb-3">
               Career{' '}
               <span className="text-academy-accent">Learning Paths</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto px-4">
               Structured, start-to-finish roadmaps designed to take you from a
               beginner level to job-ready expert in a specific domain.
            </p>
         </header>

         {/* Path Grid */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {LEARNING_PATHS.map((path) => (
                  // ** PASSING THE NEW SLUG PROP **
                  <LearningPathCard key={path.id} {...path} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default LearningPathsPage;
