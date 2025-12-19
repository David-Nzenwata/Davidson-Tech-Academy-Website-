// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { Loader2 } from 'lucide-react';

// const AuthCallback = () => {
//    const navigate = useNavigate();
//    const { supabase } = useAuth();

//    useEffect(() => {
//       // Handle the OAuth callback
//       supabase.auth.onAuthStateChange((event, session) => {
//          if (event === 'SIGNED_IN' && session) {
//             // Redirect to dashboard after successful sign-in
//             navigate('/dashboard');
//          } else {
//             // If something went wrong, go back to login
//             navigate('/login');
//          }
//       });
//    }, [navigate, supabase]);

//    return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//          <div className="text-center">
//             <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
//             <h2 className="text-white text-xl font-semibold">
//                Completing Google Sign-in...
//             </h2>
//             <p className="text-gray-400 mt-2">Please wait a moment</p>
//          </div>
//       </div>
//    );
// };

// export default AuthCallback;// ./pages/AuthCallback.js
// ./src/pages/AuthCallback.js
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createClient } from '@supabase/supabase-js';

// // Create supabase client directly in this file
// const supabase = createClient(
//   'https://yjnmhtjplhougjoygdcz.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqbm1odGpwbGhvdWdqb3lnZGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTQyMDksImV4cCI6MjA4MDg3MDIwOX0.4YX-aW15wpMXlxqsM4w9_sesgyQkBCIN_TqSriYotSc'
// );

// export default function AuthCallback() {
//    const navigate = useNavigate();

//    useEffect(() => {
//       const handleCallback = async () => {
//          const { data: { session }, error } = await supabase.auth.getSession();
         
//          if (error) {
//             console.error('Auth callback error:', error);
//             navigate('/signup?error=auth_failed');
//          } else if (session) {
//             navigate('/');
//          } else {
//             navigate('/signup');
//          }
//       };

//       handleCallback();
//    }, [navigate]);

//    return (
//       <div className="min-h-screen bg-academy-bg flex items-center justify-center">
//          <div className="text-white text-xl">Completing sign in...</div>
//       </div>
//    );
// }

// ./src/pages/AuthCallback.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthCallback() {
   const navigate = useNavigate();

   useEffect(() => {
      const handleCallback = async () => {
         try {
            // Wait a moment for Supabase to process the OAuth callback
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Get the current URL hash (contains the OAuth data)
            const hash = window.location.hash;
            
            if (hash) {
               // Parse the hash to get access token
               const params = new URLSearchParams(hash.substring(1));
               const accessToken = params.get('access_token');
               const refreshToken = params.get('refresh_token');
               
               if (accessToken) {
                  // Redirect to home - Supabase will handle session automatically
                  window.location.href = '/';
                  return;
               }
            }
            
            // If no hash or tokens, redirect to signup
            navigate('/signup');
            
         } catch (error) {
            console.error('Auth callback error:', error);
            navigate('/signup?error=auth_failed');
         }
      };

      handleCallback();
   }, [navigate]);

   return (
      <div className="min-h-screen bg-academy-bg flex items-center justify-center">
         <div className="text-center">
            <div className="text-white text-xl mb-4">Completing sign in...</div>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-academy-accent mx-auto"></div>
         </div>
      </div>
   );
}