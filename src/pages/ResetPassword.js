// // Create src/pages/ResetPassword.js
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { Lock, Loader2 } from 'lucide-react';

// const ResetPassword = () => {
//    const [password, setPassword] = useState('');
//    const [confirmPassword, setConfirmPassword] = useState('');
//    const [error, setError] = useState('');
//    const [loading, setLoading] = useState(false);
//    const navigate = useNavigate();
//    const { supabase } = useAuth();

//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       if (password !== confirmPassword) {
//          return setError('Passwords do not match');
//       }

//       setLoading(true);
//       try {
//          const { error } = await supabase.auth.updateUser({
//             password: password,
//          });

//          if (error) throw error;

//          alert('Password updated successfully!');
//          navigate('/login');
//       } catch (err) {
//          setError(err.message);
//       } finally {
//          setLoading(false);
//       }
//    };

//    return (
//       <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center p-4">
//          <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl">
//             <h2 className="text-2xl font-bold text-white mb-2">
//                Set New Password
//             </h2>
//             <p className="text-gray-400 mb-6">Enter your new password below</p>

//             {error && (
//                <div className="bg-red-900/30 text-red-300 p-3 rounded-lg mb-4">
//                   {error}
//                </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//                <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//                   <input
//                      type="password"
//                      placeholder="New Password"
//                      value={password}
//                      onChange={(e) => setPassword(e.target.value)}
//                      className="w-full pl-10 pr-3 py-3 bg-gray-700 rounded-lg text-white"
//                      required
//                   />
//                </div>

//                <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//                   <input
//                      type="password"
//                      placeholder="Confirm New Password"
//                      value={confirmPassword}
//                      onChange={(e) => setConfirmPassword(e.target.value)}
//                      className="w-full pl-10 pr-3 py-3 bg-gray-700 rounded-lg text-white"
//                      required
//                   />
//                </div>

//                <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full bg-orange-500 text-white py-3 rounded-lg flex items-center justify-center"
//                >
//                   {loading ? (
//                      <Loader2 className="w-5 h-5 animate-spin" />
//                   ) : (
//                      'Reset Password'
//                   )}
//                </button>
//             </form>
//          </div>
//       </div>
//    );
// };


// export default ResetPassword;
// ./pages/UpdatePassword.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function UpdatePassword() {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState('');
   const [isValidSession, setIsValidSession] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      // Check if user has a valid session for password reset
      supabase.auth.getSession().then(({ data: { session } }) => {
         if (!session) {
            setMessage('❌ Invalid or expired password reset link');
            setTimeout(() => navigate('/signup'), 3000);
         } else {
            setIsValidSession(true);
         }
      });
   }, [navigate]);

   const handleUpdatePassword = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         setMessage('❌ Passwords do not match');
         return;
      }
      if (password.length < 6) {
         setMessage('❌ Password must be at least 6 characters');
         return;
      }

      setLoading(true);
      const { error } = await supabase.auth.updateUser({
         password: password
      });

      if (error) {
         setMessage(`❌ Error: ${error.message}`);
      } else {
         setMessage('✅ Password updated successfully! Redirecting...');
         setTimeout(() => navigate('/signup'), 2000);
      }
      setLoading(false);
   };

   if (!isValidSession) {
      return (
         <div className="min-h-screen pt-20 flex justify-center items-center px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
               <div className="text-red-400 text-center">{message}</div>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen pt-20 flex justify-center items-center px-4">
         <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
               Set New Password
            </h2>
            
            {message && (
               <div className={`p-3 rounded mb-4 ${
                  message.includes('✅') 
                     ? 'bg-green-900/50 border border-green-500 text-green-200'
                     : 'bg-red-900/50 border border-red-500 text-red-200'
               }`}>
                  {message}
               </div>
            )}

            <form onSubmit={handleUpdatePassword} className="space-y-4">
               <input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg"
                  required
                  disabled={loading}
               />
               <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg"
                  required
                  disabled={loading}
               />
               <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-academy-accent text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 transition"
               >
                  {loading ? 'Updating...' : 'Update Password'}
               </button>
            </form>
         </div>
      </div>
   );
}

export default UpdatePassword;