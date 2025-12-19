import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, Loader2, Check } from 'lucide-react';

const UpdatePassword = () => {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');
   const [success, setSuccess] = useState(false);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const { supabase } = useAuth();

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (password.length < 6) {
         return setError('Password must be at least 6 characters');
      }

      if (password !== confirmPassword) {
         return setError('Passwords do not match');
      }

      setLoading(true);
      setError('');

      try {
         const { error } = await supabase.auth.updateUser({
            password: password,
         });

         if (error) throw error;

         setSuccess(true);
         setTimeout(() => navigate('/login'), 3000);
      } catch (err) {
         setError(err.message);
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center p-4">
         <div className="w-full max-w-md bg-gray-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">
               {success ? 'Password Updated!' : 'Set New Password'}
            </h2>

            {success ? (
               <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Check className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-green-400 mb-2">
                     Password updated successfully!
                  </p>
                  <p className="text-gray-400 text-sm">
                     Redirecting to login in 3 seconds...
                  </p>
               </div>
            ) : (
               <>
                  <p className="text-gray-400 mb-6">
                     Enter your new password below
                  </p>

                  {error && (
                     <div className="bg-red-900/30 text-red-300 p-3 rounded-lg mb-4">
                        {error}
                     </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                     <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                           type="password"
                           placeholder="New Password (min. 6 characters)"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           className="w-full pl-10 pr-3 py-3 bg-gray-700 rounded-lg text-white"
                           required
                        />
                     </div>

                     <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                           type="password"
                           placeholder="Confirm New Password"
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           className="w-full pl-10 pr-3 py-3 bg-gray-700 rounded-lg text-white"
                           required
                        />
                     </div>

                     <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center"
                     >
                        {loading ? (
                           <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                           'Update Password'
                        )}
                     </button>
                  </form>
               </>
            )}
         </div>
      </div>
   );
};

export default UpdatePassword;
