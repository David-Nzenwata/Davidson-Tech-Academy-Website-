import React from 'react';
import CourseCard from '../components/CourseCard';
// Make sure this path is correct: '../components/CourseCard'

// Dummy data for all courses (expanded list for the dedicated page)
// src/pages/CoursesPage.js (New ALL_COURSES array)'

const ALL_COURSES = [
   // --- Existing Tech Courses (Retained) ---
   {
      id: 1,
      title: 'Mastering React & Next.js',
      description:
         'Build scalable, high-performance web applications using the latest features of React, Hooks, and Next.js.',
      duration: '20 Hrs',
      rating: 4.9,
      students: '1.2K',
      slug: 'react-nextjs',
      category: 'Frontend',
   },
   {
      id: 2,
      title: 'Data Science with Python',
      description:
         'Learn Python, Pandas, NumPy, and Scikit-learn to clean, analyze, and visualize complex datasets.',
      duration: '35 Hrs',
      rating: 4.8,
      students: '850',
      slug: 'data-science',
      category: 'Data Science',
   },
   {
      id: 3,
      title: 'AI & Machine Learning Deep Dive',
      description:
         'Explore TensorFlow and PyTorch for building and training neural networks for practical AI solutions.',
      duration: '40 Hrs',
      rating: 5.0,
      students: '600',
      slug: 'ai-machine-learning',
      category: 'AI/ML',
   },
   {
      id: 4,
      title: 'Full-Stack Node.js Development',
      description:
         'Develop robust APIs and web servers using Node.js, Express, and MongoDB (MERN stack).',
      duration: '25 Hrs',
      rating: 4.7,
      students: '1.5K',
      slug: 'full-stack-node-js',
      category: 'Backend',
   },
   {
      id: 5,
      title: 'Advanced JavaScript (ES6+)',
      description:
         'Deep dive into modern JavaScript features, asynchronous programming, and best practices.',
      duration: '15 Hrs',
      rating: 4.6,
      students: '1.8K',
      slug: 'advanced-javascript',
      category: 'Frontend',
   },
   {
      id: 6,
      title: 'SQL and Database Fundamentals',
      description:
         'Master relational databases, advanced SQL queries, indexing, and database design principles.',
      duration: '10 Hrs',
      rating: 4.5,
      students: '2.1K',
      slug: 'sql-fundamentals',
      category: 'Backend',
   },

   // --- New Courses Added from Your List ---
   {
      id: 7,
      title: 'Digital Marketing Mastery',
      description:
         'Learn SEO, paid advertising (PPC), social media strategies, and email marketing for business growth.',
      duration: '18 Hrs',
      rating: 4.6,
      students: '3.1K',
      slug: 'digital-marketing-mastery',
      category: 'Marketing',
   },
   {
      id: 8,
      title: 'Computer Basics and Operations',
      description:
         'Essential skills for navigating operating systems, file management, and core productivity software.',
      duration: '8 Hrs',
      rating: 4.4,
      students: '4.5K',
      slug: 'computer-basics',
      category: 'Fundamentals',
   },
   {
      id: 9,
      title: 'Professional Video Editing (Premiere Pro)',
      description:
         'Edit high-quality videos for social media and professional projects using Adobe Premiere Pro.',
      duration: '16 Hrs',
      rating: 4.7,
      students: '1.9K',
      slug: 'professional-video-editing',
      category: 'Creative',
   },
   {
      id: 10,
      title: 'Graphics Design Fundamentals',
      description:
         'Master foundational design principles, typography, and color theory using industry-standard tools.',
      duration: '22 Hrs',
      rating: 4.8,
      students: '2.5K',
      slug: 'graphics-design-fundamentals',
      category: 'Creative',
   },
   {
      id: 11,
      title: 'Ethical Hacking & Cyber Security',
      description:
         'Understand penetration testing, vulnerability analysis, and network defense strategies.',
      duration: '30 Hrs',
      rating: 5.0,
      students: '1.1K',
      slug: 'cyber-security',
      category: 'Security',
   },
   {
      id: 12,
      title: 'Networking Fundamentals (Cisco)',
      description:
         'Learn the core concepts of TCP/IP, routing, switching, and network architecture.',
      duration: '24 Hrs',
      rating: 4.5,
      students: '900',
      slug: 'networking',
      category: 'Security',
   },
   {
      id: 13,
      title: 'Blockchain Technology & Crypto',
      description:
         'Explore decentralized ledgers, smart contracts (Solidity), and the foundational technology of Web3.',
      duration: '14 Hrs',
      rating: 4.9,
      students: '750',
      slug: 'blockchain',
      category: 'Web3',
   },
   {
      id: 14,
      title: 'Forex Trading Automation (Python)',
      description:
         'Use Python to build algorithmic trading bots and perform quantitative market analysis.',
      duration: '15 Hrs',
      rating: 4.3,
      students: '1.3K',
      slug: 'forex-trading',
      category: 'Finance',
   },
   {
      id: 15,
      title: 'Web Development Full Stack (Advanced)',
      description:
         'Comprehensive program covering both front-end and back-end frameworks for job readiness.',
      duration: '50 Hrs',
      rating: 4.9,
      students: '3.8K',
      slug: 'web-dev-full-stack',
      category: 'Full Stack',
   },
   {
      id: 16,
      title: 'Data Analysis & Visualization (Power BI)',
      description:
         'Transform raw data into actionable insights using advanced Excel, SQL, and Power BI/Tableau.',
      duration: '28 Hrs',
      rating: 4.7,
      students: '2.2K',
      slug: 'data-analysis',
      category: 'Data Science',
   },
   {
      id: 17,
      title: 'Mobile App Development (Native & Hybrid)',
      description:
         'Build native iOS/Android apps with Swift/Kotlin and hybrid apps with React Native/Flutter.',
      duration: '45 Hrs',
      rating: 4.8,
      students: '1.6K',
      slug: 'mobile-app-development',
      category: 'Mobile',
   },
   {
      id: 18,
      title: 'Game Development (Unity/C#)',
      description:
         'Create 2D and 3D games from concept to deployment using the Unity game engine and C# scripting.',
      duration: '38 Hrs',
      rating: 4.6,
      students: '1.0K',
      slug: 'game-development',
      category: 'Creative',
   },
];

// ... ensure the rest of the CoursesPage.js file remains intact, especially the category logic ...

const CoursesPage = () => {
   const categories = [
      'All',
      'Full Stack',
      'Frontend',
      'Backend',
      'Data Science',
      'AI/ML',
      'Security',
      'Mobile',
      'Creative',
      'Marketing',
      'Web3',
      'Finance',
      'Fundamentals',
   ];
   const [selectedCategory, setSelectedCategory] = React.useState('All');

   // Logic to filter courses based on the selected category
   const filteredCourses = ALL_COURSES.filter(
      (course) =>
         selectedCategory === 'All' || course.category === selectedCategory
   );

   return (
      <div className="bg-academy-bg min-h-screen pt-20">
         <header className="py-16 text-center">
            <h1 className="text-5xl font-extrabold text-white mb-2">
               Our <span className="text-academy-accent">Complete</span> Course
               Catalog
            </h1>
            <p className="text-xl text-gray-400">
               Find the perfect learning path to achieve your career goals.
            </p>
         </header>

         {/* Main Content Layout: Sidebar + Grid */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Left Sidebar (Filters) */}
            <aside className="lg:col-span-1 bg-gray-800 p-6 rounded-xl h-fit sticky top-20 border border-gray-700">
               <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-3">
                  Filter by Category
               </h3>
               <ul className="space-y-3">
                  {categories.map((category) => (
                     <li key={category}>
                        <button
                           onClick={() => setSelectedCategory(category)}
                           className={`w-full text-left py-2 px-3 rounded-lg text-sm transition duration-150 ${
                              selectedCategory === category
                                 ? 'bg-academy-accent text-gray-900 font-semibold'
                                 : 'text-gray-400 hover:bg-gray-700'
                           }`}
                        >
                           {category}
                        </button>
                     </li>
                  ))}
               </ul>
            </aside>

            {/* Right Content (Course Grid) */}
            <div className="lg:col-span-3">
               <p className="text-gray-400 mb-6 text-lg">
                  {filteredCourses.length} Courses Found
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredCourses.length > 0 ? (
                     filteredCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                     ))
                  ) : (
                     <p className="text-white text-xl col-span-2">
                        No courses found in this category.
                     </p>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoursesPage;
