import React from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import {
   Code,
   Menu,
   X,
   DollarSign,
   BookOpen,
   Users,
   Compass,
   Home as HomeIcon,
   Phone,
   Award,
   UserPlus,
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Imports (Using the corrected file names based on previous errors) ---
import HomePage from './pages/Home.js';
import CoursesPage from './pages/CoursesPage.js';
import AboutPage from './pages/AboutPage.js';
import LearningPathsPage from './pages/LearningPathsPage.js';
import PricingPage from './pages/PricingAccessPage.js'; // Assuming this is your pricing file name
import LifetimeAccessPage from './pages/LifetimeAccessPage.js';
import ContactPage from './pages/Contact.js';

// --- New Placeholder for Enrollment/Sign In Page (To fix the 404 error) ---
const EnrollmentPage = () => {
   return (
      <div className="min-h-screen bg-academy-bg pt-20 flex flex-col justify-center items-center text-center px-4">
         <UserPlus className="w-16 h-16 text-academy-accent mb-6" />
         <h1 className="text-5xl font-extrabold text-white mb-4">
            Enrollment & Sign In
         </h1>
         <p className="text-xl text-gray-400 mt-4">
            This is where the user login and registration forms will go.
         </p>
      </div>
   );
};

// --- Placeholder for DetailedLearningPathPage (Already existed, keeping it) ---
const DetailedLearningPathPage = () => {
   const { pathSlug } = useParams();
   return (
      <div className="min-h-screen bg-academy-bg pt-20 flex flex-col justify-center items-center text-center px-4">
         <h1 className="text-5xl font-extrabold text-academy-accent mb-4">
            Path Details:
         </h1>
         <p className="text-3xl text-white">
            You are viewing the **{pathSlug}** roadmap.
         </p>
         <p className="text-xl text-gray-400 mt-4">
            Detailed content and curriculum coming soon!
         </p>
      </div>
   );
};

// --- Navbar Component (Handles routing and highlighting) ---
const Navbar = ({ links }) => {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      // Close menu when route changes
      setIsOpen(false);
   }, [location]);

   // Added a separate Enroll link list item for mobile/desktop rendering ease
   const enrollLink = { name: 'Enroll / Sign In', path: '/enroll' };

   return (
      <nav className="fixed w-full z-30 bg-gray-900/90 backdrop-blur-sm shadow-xl border-b border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
               {/* Brand Logo and Name */}
               <Link to="/" className="flex items-center space-x-2">
                  <Code className="w-8 h-8 text-academy-accent" />
                  <span className="text-2xl font-bold text-white">
                     Davidson Tech Academy
                  </span>
               </Link>

               {/* Desktop Menu - All navigation links */}
               <div className="hidden md:flex items-center space-x-6">
                  {links.map((link) => (
                     <Link
                        key={link.path}
                        to={link.path}
                        className={`text-sm font-medium transition duration-150 ease-in-out px-3 py-2 rounded-lg 
                                    ${
                                       location.pathname === link.path
                                          ? 'text-academy-accent bg-gray-800 shadow-inner'
                                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    }`}
                     >
                        {link.name}
                     </Link>
                  ))}

                  {/* Enrollment/Sign-In Button */}
                  <Link
                     to={enrollLink.path}
                     className="inline-flex items-center justify-center h-10 px-6 font-bold text-gray-900 bg-orange-600 rounded-lg hover:bg-orange-500 transition duration-300 shadow-lg ml-4"
                  >
                     {enrollLink.name}
                  </Link>
               </div>

               {/* Mobile Menu Button */}
               <div className="md:hidden flex items-center">
                  <button
                     onClick={toggleMenu}
                     className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-academy-accent"
                  >
                     {isOpen ? (
                        <X className="block h-6 w-6" />
                     ) : (
                        <Menu className="block h-6 w-6" />
                     )}
                  </button>
               </div>
            </div>
         </div>

         {/* Mobile Menu Content */}
         {isOpen && (
            <div className="md:hidden">
               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {links.map((link) => (
                     <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-3 py-2 rounded-md text-base font-medium 
                                    ${
                                       location.pathname === link.path
                                          ? 'text-academy-accent bg-gray-800'
                                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    }`}
                     >
                        {link.name}
                     </Link>
                  ))}
                  <Link
                     to={enrollLink.path}
                     className="block px-3 py-2 rounded-md text-base font-bold text-gray-900 bg-orange-600 hover:bg-orange-500 transition duration-300 mt-2"
                  >
                     {enrollLink.name}
                  </Link>
               </div>
            </div>
         )}
      </nav>
   );
};

// --- Footer Component (No changes needed, it was already working) ---
const Footer = () => {
   return (
      <footer className="bg-gray-900 border-t border-gray-800 py-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <div className="flex justify-center items-center space-x-2 mb-4">
               <Code className="w-6 h-6 text-academy-accent" />
               <p className="text-xl font-bold text-white">
                  Davidson Tech Academy
               </p>
            </div>
            <p className="text-sm">
               &copy; {new Date().getFullYear()} Davidson Tech Academy. All
               rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-4 text-sm">
               <Link
                  to="/about"
                  className="hover:text-academy-accent transition"
               >
                  About
               </Link>
               <Link
                  to="/pricing"
                  className="hover:text-academy-accent transition"
               >
                  Pricing
               </Link>
               <Link
                  to="/contact"
                  className="hover:text-academy-accent transition"
               >
                  Contact
               </Link>
            </div>
         </div>
      </footer>
   );
};

// --- Main App Component ---
function App() {
   // Define all Navbar links
   const navLinks = [
      { name: 'Home', path: '/', icon: HomeIcon },
      { name: 'Courses', path: '/courses', icon: BookOpen },
      { name: 'Learning Paths', path: '/learning-paths', icon: Compass },
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Pricing', path: '/pricing', icon: DollarSign },
      { name: 'Lifetime', path: '/lifetime', icon: Award },
      { name: 'Contact', path: '/contact', icon: Phone },
   ];

   // Added a simple wrapper div for the home and contact pages for debug purposes
   const DebugWrapper = ({ Component }) => (
      <div className="min-h-screen bg-academy-bg pt-16">
         <Component />
      </div>
   );

   return (
      <div className="min-h-screen bg-academy-bg flex flex-col">
         <Navbar links={navLinks} />
         <main className="flex-grow">
            <Routes>
               {/* Routes using the DebugWrapper to ensure content loads below Navbar */}
               <Route
                  path="/"
                  element={<DebugWrapper Component={HomePage} />}
               />
               <Route
                  path="/contact"
                  element={<DebugWrapper Component={ContactPage} />}
               />

               {/* Routes for pages you said were working or had a placeholder */}
               <Route
                  path="/courses"
                  element={<DebugWrapper Component={CoursesPage} />}
               />
               <Route
                  path="/about"
                  element={<DebugWrapper Component={AboutPage} />}
               />
               <Route
                  path="/learning-paths"
                  element={<DebugWrapper Component={LearningPathsPage} />}
               />
               <Route
                  path="/learning-paths/:pathSlug"
                  element={<DetailedLearningPathPage />}
               />
               <Route
                  path="/pricing"
                  element={<DebugWrapper Component={PricingPage} />}
               />
               <Route
                  path="/lifetime"
                  element={<DebugWrapper Component={LifetimeAccessPage} />}
               />

               {/* NEW: Route for Enroll / Sign In button */}
               <Route path="/enroll" element={<EnrollmentPage />} />

               {/* 404/Fallback Route */}
               <Route
                  path="*"
                  element={
                     <div className="pt-20 text-center text-white text-3xl min-h-screen">
                        404 | Page Not Found
                     </div>
                  }
               />
            </Routes>
         </main>
         <Footer />
      </div>
   );
}

export default App;
