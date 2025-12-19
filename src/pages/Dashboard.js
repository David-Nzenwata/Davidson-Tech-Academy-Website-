import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
   const { user, signOut } = useAuth();

   if (!user) {
      return (
         <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="text-center">
               <h1 className="text-2xl text-white mb-4">
                  Please sign in to access dashboard
               </h1>
               <Link to="/signup" className="text-orange-400">
                  Go to Sign In
               </Link>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
         <nav className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center space-x-4">
               <Link to="/profile" className="text-gray-300 hover:text-white">
                  Profile
               </Link>
               <button
                  onClick={signOut}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
               >
                  Log Out
               </button>
            </div>
         </nav>

         {/* Welcome Section */}
         <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-4">
               <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                     {user.email.charAt(0).toUpperCase()}
                  </span>
               </div>
               <div>
                  <h1 className="text-3xl font-bold">
                     Welcome back, {user.email.split('@')[0]}! 👋
                  </h1>
                  <p className="text-gray-400">
                     Member since{' '}
                     {new Date(user.created_at).toLocaleDateString()}
                  </p>
               </div>
            </div>
         </div>

         {/* Dashboard Content */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
               <h3 className="text-xl font-bold mb-4">Your Courses</h3>
               <p className="text-gray-400">No courses enrolled yet.</p>
               <Link
                  to="/courses"
                  className="text-orange-400 mt-4 inline-block"
               >
                  Browse Courses →
               </Link>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
               <h3 className="text-xl font-bold mb-4">Progress</h3>
               <div className="space-y-4">
                  <div>
                     <div className="flex justify-between mb-1">
                        <span>Learning Path</span>
                        <span>0%</span>
                     </div>
                     <div className="h-2 bg-gray-700 rounded-full">
                        <div className="h-full bg-orange-600 rounded-full w-0"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl">
               <h3 className="text-xl font-bold mb-4">Quick Links</h3>
               <div className="space-y-3">
                  <Link
                     to="/profile"
                     className="block text-gray-300 hover:text-white"
                  >
                     Edit Profile
                  </Link>
                  <Link
                     to="/courses"
                     className="block text-gray-300 hover:text-white"
                  >
                     Browse Courses
                  </Link>
                  <Link
                     to="/settings"
                     className="block text-gray-300 hover:text-white"
                  >
                     Settings
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
