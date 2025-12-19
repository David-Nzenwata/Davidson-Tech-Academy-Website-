// import React from 'react';
// import { Menu, X } from 'lucide-react';

// const StickyNavbar = () => {
//    const [isOpen, setIsOpen] = React.useState(false);

//    const navItems = [
//       { name: 'Courses', href: '/courses' },
//       { name: 'Learning Paths', href: '/learning-paths' }, // ADDED
//       { name: 'Lifetime Access', href: '/lifetime-access' }, // ADDED
//       { name: 'Pricing', href: '/pricing' },
//       { name: 'About Us', href: '/about' },
//    ];

//    return (
//       <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 shadow-lg">
//          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//                {/* Logo/Academy Name */}
//                <div className="flex items-center">
//                   <a href="/" className="text-2xl font-bold tracking-wider">
//                      <span className="text-academy-accent">Davidson</span>
//                      <span className="text-white">Tech Academy</span>
//                   </a>
//                </div>

//                {/* Desktop Links & CTA */}
//                <div className="hidden md:flex items-center space-x-8">
//                   {navItems.map((item) => (
//                      <a
//                         key={item.name}
//                         href={item.href}
//                         className="text-gray-300 hover:text-academy-accent transition duration-150 text-sm font-medium"
//                      >
//                         {item.name}
//                      </a>
//                   ))}
//                   <a
//                      href="./lifetimeAccessPage"
//                      className="text-gray-900 bg-academy-accent hover:bg-opacity-90 py-2 px-4 rounded-lg font-semibold transition duration-150 shadow-md"
//                   >
//                      Enroll / Sign In
//                   </a>
//                </div>

//                {/* Mobile Menu Button */}
//                <div className="md:hidden">
//                   <button
//                      onClick={() => setIsOpen(!isOpen)}
//                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
//                   >
//                      {isOpen ? (
//                         <X className="h-6 w-6" />
//                      ) : (
//                         <Menu className="h-6 w-6" />
//                      )}
//                   </button>
//                </div>
//             </div>
//          </div>

//          {/* Mobile Menu Drawer */}
//          {isOpen && (
//             <div className="md:hidden bg-gray-900">
//                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
//                   {navItems.map((item) => (
//                      <a
//                         key={item.name}
//                         href={item.href}
//                         className="w-full text-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                      >
//                         {item.name}
//                      </a>
//                   ))}
//                   <a
//                      href="/login"
//                      className="w-full text-center py-2 px-4 rounded-lg font-semibold bg-academy-accent text-gray-900 mt-4"
//                   >
//                      Enroll / Sign In
//                   </a>
//                </div>
//             </div>
//          )}
//       </nav>
//    );
// };

// export default StickyNavbar;import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
   { name: 'Home', path: '/' },
   { name: 'Courses', path: '/courses' },
   { name: 'Learning Paths', path: '/learning-paths' },
   { name: 'About Us', path: '/about' },
   { name: 'Pricing', path: '/pricing' },
   { name: 'Lifetime', path: '/lifetime' },
   { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
   // --- State and Hooks ---
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isSticky, setIsSticky] = useState(false);
   // FIXED: Changed 'signOutUser' to 'logOut' to match AuthContext.js
   const { currentUser, logOut } = useAuth();
   const location = useLocation();

   // --- Utility Functions ---

   // Toggles the mobile menu open/closed state
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   // Handles the sign-out process
   const handleSignOut = async () => {
      try {
         // FIXED: Calling the correct function name 'logOut'
         await logOut();
         setIsMenuOpen(false);
         console.log('User signed out successfully.');
      } catch (error) {
         console.error('Error signing out: ', error);
      }
   };

   // --- Effects ---

   // Effect for handling the sticky navigation bar on scroll
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsSticky(true);
         } else {
            setIsSticky(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener('scroll', handleScroll);
   }, []); // Empty dependency array means this runs once on mount and clean up on unmount

   // Effect to close the menu when the route changes
   useEffect(() => {
      setIsMenuOpen(false);
   }, [location.pathname]);

   // --- Conditional Styling ---
   const stickyClass = isSticky
      ? 'shadow-lg backdrop-blur-md bg-gray-900/80 transition-all duration-300'
      : 'bg-transparent';

   // --- Rendering Logic ---
   return (
      <header className={`w-full fixed top-0 left-0 z-50 ${stickyClass}`}>
         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center transition-all duration-300">
            {/* Logo and Brand Name */}
            <Link
               to="/"
               className="flex items-center space-x-2 text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors"
            >
               <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
               </svg>
               <span></span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-6 items-center">
               {navItems.map((item) => (
                  <Link
                     key={item.name}
                     to={item.path}
                     className={`text-base font-medium transition-colors hover:text-orange-500 ${
                        location.pathname === item.path
                           ? 'text-orange-500 border-b-2 border-orange-500 pb-1'
                           : 'text-gray-300'
                     }`}
                  >
                     {item.name}
                  </Link>
               ))}

               {/* Authentication Button/Profile */}
               {currentUser ? (
                  <div className="relative group">
                     <button className="flex items-center space-x-2 p-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <span className="text-sm font-semibold">
                           {currentUser.email || 'Profile'}
                        </span>
                     </button>
                     <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                        <button
                           onClick={handleSignOut}
                           className="w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 rounded-lg transition-colors"
                        >
                           Sign Out
                        </button>
                     </div>
                  </div>
               ) : (
                  <Link
                     to="/signup"
                     className="inline-block px-6 py-2 text-white bg-orange-600 rounded-full font-semibold shadow-md hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
                  >
                     Enroll / Sign In
                  </Link>
               )}
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <button
               onClick={toggleMenu}
               className="lg:hidden text-gray-300 hover:text-orange-500 focus:outline-none"
               aria-label="Toggle navigation menu"
            >
               <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  {isMenuOpen ? (
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  ) : (
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                     />
                  )}
               </svg>
            </button>
         </nav>

         {/* Mobile Menu Content (Transitioning) */}
         <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
               isMenuOpen
                  ? 'max-h-screen bg-gray-900/95 py-4 shadow-xl'
                  : 'max-h-0'
            }`}
         >
            <div className="flex flex-col space-y-3 px-4 sm:px-6">
               {navItems.map((item) => (
                  <Link
                     key={item.name}
                     to={item.path}
                     className={`text-lg font-medium py-2 rounded-lg text-left transition-colors hover:bg-gray-700 hover:text-orange-500 ${
                        location.pathname === item.path
                           ? 'text-orange-500 bg-gray-800'
                           : 'text-gray-300'
                     }`}
                  >
                     {item.name}
                  </Link>
               ))}

               {/* Mobile Auth Button/Profile */}
               <div className="pt-4 border-t border-gray-700">
                  {currentUser ? (
                     <>
                        <p className="text-gray-400 text-sm mb-2 px-2">
                           Signed in as:{' '}
                           <span className="text-white font-medium">
                              {currentUser.email || 'User'}
                           </span>
                        </p>
                        <button
                           onClick={handleSignOut}
                           className="w-full text-left px-4 py-2 text-lg text-white bg-orange-600 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                        >
                           Sign Out
                        </button>
                     </>
                  ) : (
                     <Link
                        to="/signup"
                        className="w-full text-center px-4 py-3 text-lg text-white bg-orange-600 rounded-lg font-semibold shadow-md hover:bg-orange-700 transition-all duration-300"
                     >
                        Enroll / Sign In
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
