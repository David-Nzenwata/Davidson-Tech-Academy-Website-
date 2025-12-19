
// import React, { useState, useEffect } from 'react';
// import UpdatePassword from './pages/UpdatePassword';

// // We use the functional imports, expecting the Router context to be provided higher up (e.g., index.js)
// import {
//    Routes,
//    Route,
//    Link,
//    useLocation,
//    useParams,
//    useNavigate,
// } from 'react-router-dom'; // Added useNavigate
// import {
//    Code,
//    Menu,
//    X,
//    DollarSign,
//    BookOpen,
//    Users,
//    Compass,
//    Home as HomeIcon,
//    Phone,
//    Award,
//    LogIn, // Added LogIn icon for the Navbar button
//    UserPlus, // Added UserPlus icon for the Navbar button
// } from 'lucide-react';

// // Page imports (File extensions removed for better module resolution)
// import AboutPage from './pages/AboutPage';
// import CoursesPage from './pages/CoursesPage';
// import LearningPathsPage from './pages/LearningPathsPage';
// import Home from './pages/Home';
// import PricingPage from './pages/PricingPage';
// import LifetimeAccessPage from './pages/LifetimeAccessPage';
// import ContactPage from './pages/Contact';
// import CourseDetailPage from './pages/CourseDetailPage';
// import CoursesWithSlugs from './pages/CoursesWithSlugs';
// import SignupPage from './pages/SignupPage';
// import { useAuth } from './context/AuthContext'; // Path maintained as it follows typical convention

// // Placeholder for DetailedLearningPathPage (keeps routing stable)
// const DetailedLearningPathPage = () => {
//    const { pathSlug } = useParams();
//    return (
//       <div className="min-h-screen bg-academy-bg pt-20 flex flex-col justify-center items-center text-center px-4">
//          <h1 className="text-5xl font-extrabold text-academy-accent mb-4">
//             Path Details:
//          </h1>
//          <p className="text-3xl text-white">
//             You are viewing the <strong>{pathSlug}</strong> roadmap.
//          </p>
//          <p className="text-xl text-gray-400 mt-4">
//             Detailed content and curriculum coming soon!
//          </p>
//       </div>
//    );
// };


// // --- Navbar Component (Handles routing and highlighting) ---
// const Navbar = ({ links }) => {
//    const [isOpen, setIsOpen] = useState(false);
//    const location = useLocation();
//    const navigate = useNavigate(); // Used for navigation after logout
//    const { currentUser, signOut } = useAuth(); // <--- USE AUTH HOOK

//    const toggleMenu = () => {
//       setIsOpen(!isOpen);
//    };

//    useEffect(() => {
//       // Close menu when route changes (watch pathname only)
//       setIsOpen(false);
//    }, [location.pathname]);

//    // Handle logout action
//    const handleLogout = async () => {
//       await signOut();
//       navigate('/'); // Navigate to home after logging out
//    };

//    // Determine the text/destination for the main CTA button
//    const ctaButton = currentUser
//       ? { path: '/', name: 'Log Out', icon: LogIn, action: handleLogout } // Changed action to call handleLogout
//       : { path: '/signup', name: 'Enroll / Sign In', icon: UserPlus };

//    return (
//       <nav className="fixed w-full z-30 bg-gray-900/90 backdrop-blur-sm shadow-xl border-b border-gray-800">
//          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
//                {/* Brand Logo and Name */}
//                <Link to="/" className="flex items-center space-x-2">
//                   <Code className="w-8 h-8 text-academy-accent" />
//                   <span className="text-2xl font-bold text-white">
//                      Davidson Tech Academy
//                   </span>
//                </Link>

//                {/* Desktop Menu - All navigation links */}
//                <div className="hidden md:flex items-center space-x-6">
//                   {links.map((link) => (
//                      <Link
//                         key={link.path}
//                         to={link.path}
//                         className={`text-sm font-medium transition duration-150 ease-in-out px-3 py-2 rounded-lg 
//                                         ${
//                                            location.pathname === link.path
//                                               ? 'text-academy-accent bg-gray-800 shadow-inner'
//                                               : 'text-gray-300 hover:text-white hover:bg-gray-800'
//                                         }`}
//                      >
//                         {link.name}
//                      </Link>
//                   ))}

//                   {/* User Email Display (if logged in) */}
//                   {currentUser && (
//                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-academy-accent/50 max-w-[150px] truncate">
//                         {currentUser.email}
//                      </span>
//                   )}

//                   {/* Enrollment/Sign-In/Logout Button */}
//                   <button
//                      onClick={
//                         ctaButton.action || (() => navigate(ctaButton.path))
//                      } // Use navigate for path if action is missing
//                      className="inline-flex items-center justify-center h-10 px-6 font-bold text-gray-900 bg-orange-600 rounded-lg hover:bg-orange-500 transition duration-300 shadow-lg ml-4"
//                   >
//                      {ctaButton.name}
//                   </button>
//                </div>

//                {/* Mobile Menu Button */}
//                <div className="md:hidden flex items-center">
//                   <button
//                      onClick={toggleMenu}
//                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-academy-accent"
//                   >
//                      {isOpen ? (
//                         <X className="block h-6 w-6" />
//                      ) : (
//                         <Menu className="block h-6 w-6" />
//                      )}
//                   </button>
//                </div>
//             </div>
//          </div>

//          {/* Mobile Menu Content */}
//          {isOpen && (
//             <div className="md:hidden">
//                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                   {links.map((link) => (
//                      <Link
//                         key={link.path}
//                         to={link.path}
//                         className={`block px-3 py-2 rounded-md text-base font-medium 
//                                         ${
//                                            location.pathname === link.path
//                                               ? 'text-academy-accent bg-gray-800'
//                                               : 'text-gray-300 hover:text-white hover:bg-gray-800'
//                                         }`}
//                      >
//                         {link.name}
//                      </Link>
//                   ))}
//                   {/* User Email Display in Mobile (if logged in) */}
//                   {currentUser && (
//                      <div className="px-3 py-2 text-sm text-gray-400 bg-gray-800 rounded-md border border-academy-accent/50 max-w-full truncate">
//                         Logged in as: {currentUser.email}
//                      </div>
//                   )}
//                   {/* Enrollment/Sign-In/Logout Button (Mobile) */}
//                   <button
//                      onClick={
//                         ctaButton.action || (() => navigate(ctaButton.path))
//                      }
//                      className="block w-full text-left px-3 py-2 rounded-md text-base font-bold text-gray-900 bg-orange-600 hover:bg-orange-500 transition duration-300 mt-2"
//                   >
//                      {ctaButton.name}
//                   </button>
//                </div>
//             </div>
//          )}
//       </nav>
//    );
// };

// // --- Footer Component ---
// const Footer = () => {
//    return (
//       <footer className="bg-gray-900 border-t border-gray-800 py-10">
//          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
//             <div className="flex justify-center items-center space-x-2 mb-4">
//                <Code className="w-6 h-6 text-academy-accent" />
//                <p className="text-xl font-bold text-white">
//                   Davidson Tech Academy
//                </p>
//             </div>
//             <p className="text-sm">
//                &copy; {new Date().getFullYear()} Davidson Tech Academy. All
//                rights reserved.
//             </p>
//             <div className="flex justify-center space-x-4 mt-4 text-sm">
//                <Link
//                   to="/about"
//                   className="hover:text-academy-accent transition"
//                >
//                   About
//                </Link>
//                <Link
//                   to="/pricing"
//                   className="hover:text-academy-accent transition"
//                >
//                   Pricing
//                </Link>
//                <Link
//                   to="/contact"
//                   className="hover:text-academy-accent transition"
//                >
//                   Contact
//                </Link>
//             </div>
//          </div>
//       </footer>
//    );
// };

// // --- Main App Component ---
// function App() {
//    // Define all Navbar links
//    const navLinks = [
//       { name: 'Home', path: '/', icon: HomeIcon },
//       { name: 'Courses', path: '/courses', icon: BookOpen },
//       { name: 'Learning Paths', path: '/learning-paths', icon: Compass },
//       { name: 'About Us', path: '/about', icon: Users },
//       { name: 'Pricing', path: '/pricing', icon: DollarSign },
//       { name: 'Lifetime', path: '/lifetime', icon: Award }, // fixed path
//       { name: 'Contact', path: '/contact', icon: Phone },
//       // { name: 'LifetimeAccess', path: '/contact', icon: Phone }, // Commented out duplicate
//    ];

//    return (
//       <div className="min-h-screen bg-academy-bg flex flex-col">
//          <Navbar links={navLinks} />
//          <main className="flex-grow">
//             <Routes>
//                <Route path="/" element={<Home />} />
//                <Route path="/courses" element={<CoursesPage />} />
//                <Route path="/about" element={<AboutPage />} />
//                {/* Learning Paths Routes */}
//                <Route path="/learning-paths" element={<LearningPathsPage />} />
//                <Route
//                   path="/learning-paths/:pathSlug"
//                   element={<DetailedLearningPathPage />}
//                />
//                <Route
//                   path="/lifetimeAccess/:pathSlug"
//                   element={<DetailedLearningPathPage />}
//                />
//                <Route path="/pricing" element={<PricingPage />} />
//                <Route path="/lifetime" element={<LifetimeAccessPage />} />
//                <Route path="/contact" element={<ContactPage />} />
//                <Route path="/CourseDetailPage" element={<CourseDetailPage />} />
//                <Route path="/CoursesWithSlugs" element={<CoursesWithSlugs />} />
//                <Route path="/update-password" element={<UpdatePassword />} />
//                <Route path="/auth/callback" element={<AuthCallback />} />
//                <Route
//                   path="/reset-password"
//                   element={<ResetPasswordPage />}
//                />{' '}
//                // Create this if needed
//                <Route
//                   path="/courses/:courseId"
//                   element={<CourseDetailPage />}
//                />
//                {/* NEW SIGNUP/LOGIN ROUTE ADDED HERE */}
//                <Route path="/signup" element={<SignupPage />} />
//                {/* 404/Fallback Route */}
//                <Route
//                   path="*"
//                   element={
//                      <div className="pt-20 text-center text-white text-3xl min-h-screen">
//                         404 | Page Not Found
//                      </div>
//                   }
//                />
//             </Routes>
//          </main>
//          <Footer />
//       </div>
//    );
// }


// export default App;import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react'; // ADD THIS AT TOP
import UpdatePassword from './pages/UpdatePassword';
import AuthCallback from './pages/AuthCallback';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';

// We use the functional imports, expecting the Router context to be provided higher up (e.g., index.js)
import {
   Routes,
   Route,
   Link,
   useLocation,
   useParams,
   useNavigate,
} from 'react-router-dom'; // Added useNavigate
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
} from 'lucide-react';

// Page imports (File extensions removed for better module resolution)
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import LearningPathsPage from './pages/LearningPathsPage';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import LifetimeAccessPage from './pages/LifetimeAccessPage';
import ContactPage from './pages/Contact';
import CourseDetailPage from './pages/CourseDetailPage';
import CoursesWithSlugs from './pages/CoursesWithSlugs';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import { AuthProvider, useAuth } from './context/AuthContext'; // IMPORT BOTH

// Placeholder for DetailedLearningPathPage (keeps routing stable)
const DetailedLearningPathPage = () => {
   const { pathSlug } = useParams();
   return (
      <div className="min-h-screen bg-academy-bg pt-20 flex flex-col justify-center items-center text-center px-4">
         <h1 className="text-5xl font-extrabold text-academy-accent mb-4">
            Path Details:
         </h1>
         <p className="text-3xl text-white">
            You are viewing the <strong>{pathSlug}</strong> roadmap.
         </p>
         <p className="text-xl text-gray-400 mt-4">
            Detailed content and curriculum coming soon!
         </p>
      </div>
   );
};

// --- Navbar Component (Handles routing and highlighting) ---
const Navbar = ({ links }) => {
   const [isOpen, setIsOpen] = useState(false); // NEEDS REACT IMPORT
   const location = useLocation();
   const navigate = useNavigate();
   const { user, signOut } = useAuth();

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      // NEEDS REACT IMPORT
      // Close menu when route changes
      setIsOpen(false);
   }, [location.pathname]);

   // Handle logout action
   const handleLogout = async () => {
      await signOut();
      navigate('/');
   };

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

                  {/* User Welcome Display (if logged in) */}
                  {user ? (
                     <div className="flex items-center space-x-4">
                        <Link
                           to="/dashboard"
                           className="flex items-center space-x-3 bg-gray-800 px-4 py-2 rounded-full border border-academy-accent/50 hover:bg-gray-700 transition"
                        >
                           <div className="w-8 h-8 bg-academy-accent rounded-full flex items-center justify-center">
                              <span className="text-white font-bold">
                                 {user.email.charAt(0).toUpperCase()}
                              </span>
                           </div>
                           <div className="text-sm">
                              <p className="text-gray-300">Welcome back,</p>
                              <p className="text-academy-accent font-medium truncate max-w-[150px]">
                                 {user.email.split('@')[0]}
                              </p>
                           </div>
                        </Link>

                        <button
                           onClick={handleLogout}
                           className="text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition border border-gray-700"
                        >
                           Log Out
                        </button>
                     </div>
                  ) : (
                     /* Enrollment/Sign-In Button (when NOT logged in) */
                     <button
                        onClick={() => navigate('/signup')}
                        className="inline-flex items-center justify-center h-10 px-6 font-bold text-gray-900 bg-orange-600 rounded-lg hover:bg-orange-500 transition duration-300 shadow-lg ml-4"
                     >
                        Enroll / Sign In
                     </button>
                  )}
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

                  {/* User Welcome Display in Mobile (if logged in) */}
                  {user && (
                     <div className="px-3 py-2 bg-gray-800 rounded-md border border-academy-accent/50">
                        <div className="flex items-center space-x-3">
                           <div className="w-8 h-8 bg-academy-accent rounded-full flex items-center justify-center">
                              <span className="text-white font-bold">
                                 {user.email.charAt(0).toUpperCase()}
                              </span>
                           </div>
                           <div className="text-sm">
                              <p className="text-gray-300">Welcome back,</p>
                              <p className="text-academy-accent font-medium">
                                 {user.email.split('@')[0]}
                              </p>
                           </div>
                        </div>
                     </div>
                  )}

                  {/* Enrollment/Sign-In/Logout Button (Mobile) */}
                  {user ? (
                     <button
                        onClick={handleLogout}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-bold text-gray-900 bg-orange-600 hover:bg-orange-500 transition duration-300 mt-2"
                     >
                        Log Out
                     </button>
                  ) : (
                     <button
                        onClick={() => navigate('/signup')}
                        className="block w-full text-left px-3 py-2 rounded-md text-base font-bold text-gray-900 bg-orange-600 hover:bg-orange-500 transition duration-300 mt-2"
                     >
                        Enroll / Sign In
                     </button>
                  )}
               </div>
            </div>
         )}
      </nav>
   );
};

// --- Footer Component ---
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
function AppContent() {
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

   return (
      <div className="min-h-screen bg-academy-bg flex flex-col">
         <Navbar links={navLinks} />
         <main className="flex-grow">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/courses" element={<CoursesPage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/learning-paths" element={<LearningPathsPage />} />
               <Route
                  path="/learning-paths/:pathSlug"
                  element={<DetailedLearningPathPage />}
               />
               <Route
                  path="/lifetimeAccess/:pathSlug"
                  element={<DetailedLearningPathPage />}
               />
               <Route path="/pricing" element={<PricingPage />} />
               <Route path="/lifetime" element={<LifetimeAccessPage />} />
               <Route path="/contact" element={<ContactPage />} />
               <Route path="/CourseDetailPage" element={<CourseDetailPage />} />
               <Route path="/CoursesWithSlugs" element={<CoursesWithSlugs />} />
               <Route path="/update-password" element={<UpdatePassword />} />
               <Route path="/auth/callback" element={<AuthCallback />} />
               <Route path="/reset-password" element={<ResetPasswordPage />} />
               <Route path="/forgot-password" element={<ForgotPassword />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/profile" element={<Profile />} />
               <Route
                  path="/courses/:courseId"
                  element={<CourseDetailPage />}
               />
               <Route path="/signup" element={<SignupPage />} />
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

// Main App wrapper with AuthProvider
function App() {
   return (
      <AuthProvider>
         <AppContent />
      </AuthProvider>
   );
}

export default App;