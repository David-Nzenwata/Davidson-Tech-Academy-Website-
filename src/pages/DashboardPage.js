import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
   LogOut,
   User,
   Mail,
   Zap,
   CheckCircle,
   Clock,
   BookOpen,
   Link,
   Settings,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
   // Retrieve the user object and signOut function from the Supabase-backed context
   const { currentUser, signOut } = useAuth();
   const navigate = useNavigate();

   // Simple check to ensure the user is logged in before rendering the dashboard
   if (!currentUser) {
      // If user is not logged in, redirect them back to the sign-up page
      // This is primarily a safety check, as the router should also handle redirection.
      navigate('/signup');
      return null;
   }

   const handleSignOut = async () => {
      try {
         await signOut();
         // Redirect to the sign-up page after successful sign out
         navigate('/signup');
      } catch (error) {
         // Supabase errors are often helpful; log the specific error
         console.error('Failed to sign out:', error);
         alert('Failed to sign out. Check console for details.');
      }
   };

   // Mock data representing a student's progress in the Davidson Tech Academy
   const mockProgress = [
      {
         id: 1,
         name: 'HTML & CSS Fundamentals',
         progress: 100,
         status: 'Completed',
      },
      {
         id: 2,
         name: 'JavaScript: The Basics',
         progress: 75,
         status: 'In Progress',
      },
      { id: 3, name: 'React for Beginners', progress: 30, status: 'Started' },
      {
         id: 4,
         name: 'Advanced TypeScript',
         progress: 0,
         status: 'Not Started',
      },
   ];

   const getProgressColor = (progress) => {
      if (progress === 100) return 'bg-green-500';
      if (progress > 50) return 'bg-yellow-500';
      return 'bg-red-500';
   };

   // ===============================================
   // === RENDER LOGIC
   // ===============================================

   return (
      <div className="min-h-screen bg-academy-bg py-10 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            {/* Header and Welcome Message */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700/50 mb-10">
               <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center">
                     <Zap className="w-8 h-8 text-academy-accent mr-3" />
                     Welcome, {currentUser.email.split('@')[0]}!
                  </h1>
                  <p className="text-gray-400 mt-2 text-lg">
                     Your personalized learning journey is waiting.
                  </p>
               </div>
               <button
                  onClick={handleSignOut}
                  className="mt-4 sm:mt-0 flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors shadow-md disabled:opacity-50"
               >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
               </button>
            </div>

            {/* Dashboard Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {/* Column 1: Profile and Quick Actions */}
               <div className="lg:col-span-1 space-y-8">
                  {/* User Profile Card */}
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700/50">
                     <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center">
                        <User className="w-5 h-5 mr-2 text-academy-accent" />{' '}
                        Account Info
                     </h2>
                     <div className="space-y-3 text-gray-400">
                        <div className="flex items-center">
                           <Mail className="w-4 h-4 mr-3 text-gray-500" />
                           <span className="font-semibold text-white">
                              Email:
                           </span>{' '}
                           {currentUser.email}
                        </div>
                        <div className="flex items-center">
                           <Link className="w-4 h-4 mr-3 text-gray-500" />
                           <span className="font-semibold text-white">
                              User ID:
                           </span>{' '}
                           {currentUser.uid.substring(0, 8)}...
                        </div>
                        <div className="flex items-center">
                           <Clock className="w-4 h-4 mr-3 text-gray-500" />
                           <span className="font-semibold text-white">
                              Member Since:
                           </span>{' '}
                           {new Date().toLocaleDateString()}
                        </div>
                     </div>
                     <button
                        className="mt-6 w-full flex items-center justify-center py-2 px-4 text-sm font-semibold rounded-lg text-white bg-gray-700 hover:bg-gray-600 transition-colors shadow-md"
                        onClick={() => console.log('Navigate to settings')}
                     >
                        <Settings className="w-4 h-4 mr-2" />
                        Manage Profile
                     </button>
                  </div>

                  {/* Quick Links / Resources */}
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700/50">
                     <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-academy-accent" />{' '}
                        Quick Access
                     </h2>
                     <ul className="space-y-2 text-gray-400">
                        <li>
                           <a
                              href="/courses"
                              className="flex items-center hover:text-academy-accent transition"
                           >
                              <span className="text-xl mr-2">&rarr;</span> View
                              All Courses
                           </a>
                        </li>
                        <li>
                           <a
                              href="/chat"
                              className="flex items-center hover:text-academy-accent transition"
                           >
                              <span className="text-xl mr-2">&rarr;</span> Live
                              Tutor Chat
                           </a>
                        </li>
                        <li>
                           <a
                              href="/certificates"
                              className="flex items-center hover:text-academy-accent transition"
                           >
                              <span className="text-xl mr-2">&rarr;</span>{' '}
                              Download Certificates
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>

               {/* Column 2 & 3: Course Progress Overview */}
               <div className="lg:col-span-2">
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700/50">
                     <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-academy-accent" />{' '}
                        My Course Progress
                     </h2>

                     <div className="space-y-6">
                        {mockProgress.map((course) => (
                           <div
                              key={course.id}
                              className="bg-gray-700/50 p-4 rounded-lg shadow-inner hover:shadow-lg transition duration-200"
                           >
                              <div className="flex items-center justify-between mb-2">
                                 <h3 className="text-lg font-semibold text-white">
                                    {course.name}
                                 </h3>
                                 <span
                                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                       course.status === 'Completed'
                                          ? 'bg-green-800 text-green-300'
                                          : 'bg-orange-800 text-orange-300'
                                    }`}
                                 >
                                    {course.status}
                                 </span>
                              </div>

                              {/* Progress Bar */}
                              <div className="w-full bg-gray-600 rounded-full h-3">
                                 <div
                                    className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(
                                       course.progress
                                    )}`}
                                    style={{ width: `${course.progress}%` }}
                                 ></div>
                              </div>

                              <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                                 <span>{course.progress}% Complete</span>
                                 <button
                                    onClick={() =>
                                       console.log(
                                          `Maps to course: ${course.name}`
                                       )
                                    }
                                    className="text-academy-accent hover:text-orange-500 font-medium text-sm transition"
                                 >
                                    {course.status === 'Completed'
                                       ? 'Review Course'
                                       : 'Continue Learning'}{' '}
                                    &rarr;
                                 </button>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DashboardPage;
