import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
   const { user, updateProfile } = useAuth();
   const [displayName, setDisplayName] = useState('');
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (user?.user_metadata?.name) {
         setDisplayName(user.user_metadata.name);
      } else if (user?.email) {
         setDisplayName(user.email.split('@')[0]);
      }
   }, [user]);

   async function handleSubmit(e) {
      e.preventDefault();
      setMessage('');
      setLoading(true);

      try {
         const { error } = await updateProfile({
            data: { name: displayName },
         });
         if (error) throw error;
         setMessage('Profile updated successfully!');
      } catch (err) {
         setMessage(err.message);
      } finally {
         setLoading(false);
      }
   }

   if (!user) {
      return (
         <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="text-center">
               <h1 className="text-2xl text-white mb-4">
                  Please sign in to view profile
               </h1>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
         <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Your Profile</h1>

            <div className="bg-gray-800 rounded-xl p-6 mb-8">
               <div className="flex items-center space-x-6 mb-6">
                  <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center">
                     <span className="text-3xl font-bold">
                        {user.email.charAt(0).toUpperCase()}
                     </span>
                  </div>
                  <div>
                     <h2 className="text-2xl font-bold">{displayName}</h2>
                     <p className="text-gray-400">{user.email}</p>
                     <p className="text-gray-400 text-sm mt-2">
                        Joined {new Date(user.created_at).toLocaleDateString()}
                     </p>
                  </div>
               </div>

               {message && (
                  <div
                     className={`p-3 rounded mb-4 ${
                        message.includes('success')
                           ? 'bg-green-900/50 border border-green-500 text-green-200'
                           : 'bg-red-900/50 border border-red-500 text-red-200'
                     }`}
                  >
                     {message}
                  </div>
               )}

               <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                     <label className="block text-gray-400 mb-2">
                        Display Name
                     </label>
                     <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="w-full p-3 bg-gray-700 text-white rounded-lg"
                        disabled={loading}
                     />
                  </div>

                  <div>
                     <label className="block text-gray-400 mb-2">Email</label>
                     <input
                        type="email"
                        value={user.email}
                        className="w-full p-3 bg-gray-700 text-white rounded-lg cursor-not-allowed"
                        disabled
                     />
                     <p className="text-gray-500 text-sm mt-1">
                        Email cannot be changed
                     </p>
                  </div>

                  <button
                     type="submit"
                     disabled={loading}
                     className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 transition"
                  >
                     {loading ? 'Updating...' : 'Update Profile'}
                  </button>
               </form>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
               <h3 className="text-xl font-bold mb-4">Account Security</h3>
               <div className="space-y-4">
                  <button className="w-full text-left p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                     <div className="font-bold">Change Password</div>
                     <div className="text-gray-400 text-sm">
                        Update your password regularly
                     </div>
                  </button>
                  <button className="w-full text-left p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                     <div className="font-bold">Two-Factor Authentication</div>
                     <div className="text-gray-400 text-sm">
                        Add extra security to your account
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
