import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ForgotPassword() {
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(false);

   const { resetPassword } = useAuth();
   const navigate = useNavigate();

   async function handleSubmit(e) {
      e.preventDefault();
      setMessage('');
      setLoading(true);

      try {
         const { error } = await resetPassword(email);

         if (error) {
            throw error;
         }

         setMessage('✅ Password reset link sent! Check your email.');
         setTimeout(() => navigate('/signup'), 3000);
      } catch (err) {
         setMessage(`❌ Error: ${err.message}`);
      } finally {
         setLoading(false);
      }
   }

   return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
         <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md">
            <h1 className="text-3xl font-bold text-white text-center mb-6">
               Reset Password
            </h1>

            {message && (
               <div
                  className={`p-3 rounded mb-4 ${
                     message.includes('✅')
                        ? 'bg-green-900/50 border border-green-500 text-green-200'
                        : 'bg-red-900/50 border border-red-500 text-red-200'
                  }`}
               >
                  {message}
               </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
               <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg"
                  required
                  disabled={loading}
               />

               <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 transition"
               >
                  {loading ? 'Sending...' : 'Send Reset Link'}
               </button>
            </form>

            <div className="mt-6 text-center">
               <Link
                  to="/dashboard"
                  className="text-orange-400 hover:text-orange-300"
               >
                  Back to Sign In
               </Link>
            </div>
         </div>
      </div>
   );
}
