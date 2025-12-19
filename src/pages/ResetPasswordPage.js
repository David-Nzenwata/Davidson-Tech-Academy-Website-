import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ResetPasswordPage() {
   const [email, setEmail] = useState('');
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState('');
   const { resetPassword } = useAuth();
   const navigate = useNavigate();

   const handleResetPassword = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage('');

      try {
         const result = await resetPassword(email);
         setMessage(`✅ ${result.message}`);
         setTimeout(() => navigate('/signup'), 3000);
      } catch (error) {
         setMessage(`❌ Error: ${error.message}`);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="min-h-screen pt-20 flex justify-center items-center px-4">
         <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
               Reset Password
            </h2>

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

            <p className="text-gray-400 mb-6">
               Enter your email address and we'll send you a link to reset your
               password.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-4">
               <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg"
                  required
                  disabled={loading}
               />
               <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-academy-accent text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 transition"
               >
                  {loading ? 'Sending...' : 'Send Reset Link'}
               </button>
            </form>

            <div className="mt-6 text-center">
               <button
                  onClick={() => navigate('/signup')}
                  className="text-academy-accent hover:text-orange-400"
               >
                  Back to Sign In
               </button>
            </div>
         </div>
      </div>
   );
}

export default ResetPasswordPage;
