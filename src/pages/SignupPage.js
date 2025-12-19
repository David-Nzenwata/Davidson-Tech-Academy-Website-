// // // import React, { useState } from 'react';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import { useAuth } from '../context/AuthContext';
// // // import { User, Lock, Mail, ChevronLeft, Loader2, LogIn } from 'lucide-react'; // Added LogIn icon for use in the button

// // // const SignupPage = () => {
// // //    const { signUp, signIn, resetPassword, loading } = useAuth();
// // //    const navigate = useNavigate();

// // //    const [mode, setMode] = useState('login'); // 'login', 'signup', 'reset'
// // //    const [email, setEmail] = useState('');
// // //    const [password, setPassword] = useState('');
// // //    const [passwordConfirm, setPasswordConfirm] = useState('');
// // //    const [error, setError] = useState('');
// // //    const [message, setMessage] = useState('');
// // //    const [isSubmitting, setIsSubmitting] = useState(false);

// // //    // Clear messages/errors when switching modes
// // //    const switchMode = (newMode) => {
// // //       setMode(newMode);
// // //       setError('');
// // //       setMessage('');
// // //       setIsSubmitting(false);
// // //       setEmail('');
// // //       setPassword('');
// // //       setPasswordConfirm('');
// // //    };

// // //    const handleSubmit = async (e) => {
// // //       e.preventDefault();
// // //       setError('');
// // //       setMessage('');
// // //       setIsSubmitting(true);

// // //       try {
// // //          if (mode === 'signup') {
// // //             if (password !== passwordConfirm) {
// // //                return setError('Passwords do not match.');
// // //             }
// // //             await signUp(email, password);
// // //             setMessage("Success! You've signed up. Logging you in now...");
// // //             setTimeout(() => navigate('/courses'), 1500);
// // //          } else if (mode === 'login') {
// // //             await signIn(email, password);
// // //             setMessage('Login successful! Redirecting...');
// // //             setTimeout(() => navigate('/courses'), 1500);
// // //          } else if (mode === 'reset') {
// // //             await resetPassword(email);
// // //             setMessage('Password reset email sent. Check your inbox.');
// // //          }
// // //       } catch (err) {
// // //          console.error('Auth Error:', err);
// // //          // Firebase error codes are usually in error.code
// // //          setError(err.message || 'Failed to complete the action.');
// // //       } finally {
// // //          setIsSubmitting(false);
// // //       }
// // //    };

// // //    // Style classes
// // //    const inputClass =
// // //       'w-full px-4 py-3 bg-gray-700 text-white border-2 border-transparent rounded-lg focus:outline-none focus:border-academy-accent transition duration-200';
// // //    const buttonClass =
// // //       'w-full flex items-center justify-center space-x-2 py-3 mt-6 font-bold text-gray-900 rounded-lg transition duration-300 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed';

// // //    return (
// // //       <div className="min-h-screen bg-academy-bg flex items-center justify-center pt-16 p-4">
// // //          <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 transform transition-all duration-500">
// // //             {/* Header */}
// // //             <h2 className="text-3xl font-extrabold text-white text-center mb-6">
// // //                {mode === 'login'
// // //                   ? 'Welcome Back'
// // //                   : mode === 'signup'
// // //                   ? 'Create Account'
// // //                   : 'Reset Password'}
// // //             </h2>
// // //             <p className="text-gray-400 text-center mb-8">
// // //                {mode === 'login'
// // //                   ? 'Sign in to access your dashboard and courses.'
// // //                   : mode === 'signup'
// // //                   ? 'Join Davidson Tech Academy in one minute!'
// // //                   : 'Enter your email to receive a password reset link.'}
// // //             </p>

// // //             {/* Status Messages */}
// // //             {error && (
// // //                <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg mb-4 text-sm">
// // //                   {error}
// // //                </div>
// // //             )}
// // //             {message && (
// // //                <div className="bg-green-900/50 border border-green-700 text-green-300 px-4 py-3 rounded-lg mb-4 text-sm">
// // //                   {message}
// // //                </div>
// // //             )}

// // //             <form onSubmit={handleSubmit}>
// // //                {/* Email Input */}
// // //                <div className="mb-4">
// // //                   <label
// // //                      className="text-sm font-medium text-gray-300 mb-2 block"
// // //                      htmlFor="email"
// // //                   >
// // //                      Email Address
// // //                   </label>
// // //                   <div className="relative">
// // //                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
// // //                      <input
// // //                         id="email"
// // //                         type="email"
// // //                         value={email}
// // //                         onChange={(e) => setEmail(e.target.value)}
// // //                         required
// // //                         placeholder="name@example.com"
// // //                         className={`pl-10 ${inputClass}`}
// // //                         disabled={isSubmitting || loading}
// // //                      />
// // //                   </div>
// // //                </div>

// // //                {/* Password Input (for login/signup) */}
// // //                {(mode === 'login' || mode === 'signup') && (
// // //                   <div className="mb-4">
// // //                      <label
// // //                         className="text-sm font-medium text-gray-300 mb-2 block"
// // //                         htmlFor="password"
// // //                      >
// // //                         Password
// // //                      </label>
// // //                      <div className="relative">
// // //                         <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
// // //                         <input
// // //                            id="password"
// // //                            type="password"
// // //                            value={password}
// // //                            onChange={(e) => setPassword(e.target.value)}
// // //                            required
// // //                            placeholder="••••••••"
// // //                            className={`pl-10 ${inputClass}`}
// // //                            disabled={isSubmitting || loading}
// // //                         />
// // //                      </div>
// // //                   </div>
// // //                )}

// // //                {/* Password Confirm Input (for signup) */}
// // //                {mode === 'signup' && (
// // //                   <div className="mb-6">
// // //                      <label
// // //                         className="text-sm font-medium text-gray-300 mb-2 block"
// // //                         htmlFor="password-confirm"
// // //                      >
// // //                         Confirm Password
// // //                      </label>
// // //                      <div className="relative">
// // //                         <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
// // //                         <input
// // //                            id="password-confirm"
// // //                            type="password"
// // //                            value={passwordConfirm}
// // //                            onChange={(e) => setPasswordConfirm(e.target.value)}
// // //                            required
// // //                            placeholder="••••••••"
// // //                            className={`pl-10 ${inputClass}`}
// // //                            disabled={isSubmitting || loading}
// // //                         />
// // //                      </div>
// // //                   </div>
// // //                )}

// // //                {/* Action Button */}
// // //                <button
// // //                   type="submit"
// // //                   className={`${buttonClass} bg-academy-accent hover:bg-orange-500 text-white`}
// // //                   disabled={isSubmitting || loading}
// // //                >
// // //                   {isSubmitting ? (
// // //                      <Loader2 className="w-5 h-5 animate-spin" />
// // //                   ) : mode === 'login' ? (
// // //                      <>
// // //                         <LogIn className="w-5 h-5" /> <span>Sign In</span>
// // //                      </>
// // //                   ) : mode === 'signup' ? (
// // //                      <>
// // //                         <User className="w-5 h-5" /> <span>Sign Up</span>
// // //                      </>
// // //                   ) : (
// // //                      <span>Send Reset Link</span>
// // //                   )}
// // //                </button>
// // //             </form>

// // //             {/* Footer Links (Switching Modes) */}
// // //             <div className="mt-6 text-center text-sm">
// // //                {mode === 'login' && (
// // //                   <>
// // //                      <p className="text-gray-400">
// // //                         Need an account?{' '}
// // //                         <button
// // //                            onClick={() => switchMode('signup')}
// // //                            className="text-academy-accent font-semibold hover:text-orange-500 transition"
// // //                            disabled={isSubmitting || loading}
// // //                         >
// // //                            Sign Up Here
// // //                         </button>
// // //                      </p>
// // //                      <p className="mt-2">
// // //                         <button
// // //                            onClick={() => switchMode('reset')}
// // //                            className="text-gray-500 hover:text-gray-300 transition"
// // //                            disabled={isSubmitting || loading}
// // //                         >
// // //                            Forgot Password?
// // //                         </button>
// // //                      </p>
// // //                   </>
// // //                )}
// // //                {mode === 'signup' && (
// // //                   <p className="text-gray-400">
// // //                      Already have an account?{' '}
// // //                      <button
// // //                         onClick={() => switchMode('login')}
// // //                         className="text-academy-accent font-semibold hover:text-orange-500 transition"
// // //                         disabled={isSubmitting || loading}
// // //                      >
// // //                         Log In
// // //                      </button>
// // //                   </p>
// // //                )}
// // //                {mode === 'reset' && (
// // //                   <button
// // //                      onClick={() => switchMode('login')}
// // //                      className="text-gray-400 hover:text-academy-accent transition flex items-center justify-center mx-auto"
// // //                      disabled={isSubmitting || loading}
// // //                   >
// // //                      <ChevronLeft className="w-4 h-4 mr-1" /> Back to Login
// // //                   </button>
// // //                )}
// // //             </div>
// // //          </div>
// // //       </div>
// // //    );
// // // };

// // // export default SignupPage;

// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';
// // import { User, Lock, Mail, ChevronLeft, Loader2, LogIn, Google } from 'lucide-react';

// // const SignupPage = () => {
// //    // Destructure the new signInWithGoogle function
// //    const { signUp, signIn, resetPassword, signInWithGoogle, loading } = useAuth();
// //    const navigate = useNavigate();

// //    const [mode, setMode] = useState('login'); // 'login', 'signup', 'reset'
// //    const [email, setEmail] = useState('');
// //    const [password, setPassword] = useState('');
// //    const [passwordConfirm, setPasswordConfirm] = useState('');
// //    const [error, setError] = useState('');
// //    const [message, setMessage] = useState('');
// //    const [isSubmitting, setIsSubmitting] = useState(false);

// //    // Clear messages/errors when switching modes
// //    const switchMode = (newMode) => {
// //       setMode(newMode);
// //       setError('');
// //       setMessage('');
// //       setIsSubmitting(false);
// //       setEmail('');
// //       setPassword('');
// //       setPasswordConfirm('');
// //    };

// //    // ==============================================
// //    // HANDLER FOR EMAIL/PASSWORD SUBMISSION
// //    // ==============================================
// //    const handleSubmit = async (e) => {
// //       e.preventDefault();
// //       setError('');
// //       setMessage('');
// //       setIsSubmitting(true);

// //       try {
// //          if (mode === 'signup') {
// //             if (password !== passwordConfirm) {
// //                return setError('Passwords do not match.');
// //             }
// //             await signUp(email, password);
// //             navigate('/');
// //          } else if (mode === 'login') {
// //             await signIn(email, password);
// //             navigate('/');
// //          } else if (mode === 'reset') {
// //             await resetPassword(email);
// //             setMessage('Password reset link sent to your email!');
// //          }
// //       } catch (err) {
// //          console.error('Firebase Auth Error:', err.code, err.message);
// //          setError(
// //             err.message.includes('auth/')
// //                ? err.code.replace('auth/', '').replace(/-/g, ' ').toUpperCase()
// //                : 'Failed to complete action.'
// //          );
// //       } finally {
// //          setIsSubmitting(false);
// //       }
// //    };

// //    // ==============================================
// //    // HANDLER FOR GOOGLE SIGN-IN
// //    // ==============================================
// //    const handleGoogleSignIn = async () => {
// //       setError('');
// //       setIsSubmitting(true);
// //       try {
// //          await signInWithGoogle();
// //          navigate('/');
// //       } catch (err) {
// //          console.error('Google Sign-in Error:', err.code, err.message);
// //          // Display a user-friendly error message, extracting the code if available
// //          setError(
// //             err.message.includes('auth/')
// //                ? `Sign-in failed: ${err.code.replace('auth/', '').replace(/-/g, ' ')}`
// //                : 'Failed to sign in with Google. Check console for details.'
// //          );
// //       } finally {
// //          setIsSubmitting(false);
// //       }
// //    };

// //    const title =
// //       mode === 'login'
// //          ? 'Welcome Back'
// //          : mode === 'signup'
// //          ? 'Create Your Account'
// //          : 'Reset Password';

// //    const buttonText =
// //       mode === 'login'
// //          ? 'Log In'
// //          : mode === 'signup'
// //          ? 'Sign Up'
// //          : 'Send Reset Link';

// //    const isLogin = mode === 'login';
// //    const isSignup = mode === 'signup';
// //    const isReset = mode === 'reset';
// //    const isDisabled = isSubmitting || loading;

// //    return (
// //       <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
// //          <div className="w-full max-w-md">
// //             <div className="bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl border border-gray-700">
// //                <h2 className="text-3xl font-extrabold text-white text-center mb-6">
// //                   {title}
// //                </h2>
// //                <p className="text-gray-400 text-center mb-8">
// //                   {isReset
// //                      ? 'Enter your email address below.'
// //                      : 'Access the world-class courses.'}
// //                </p>

// //                {/* Success/Error Message Display */}
// //                {error && (
// //                   <div className="bg-red-900/50 border border-red-700 text-red-300 p-3 rounded-lg mb-4 text-center text-sm">
// //                      {error}
// //                   </div>
// //                )}
// //                {message && (
// //                   <div className="bg-green-900/50 border border-green-700 text-green-300 p-3 rounded-lg mb-4 text-center text-sm">
// //                      {message}
// //                   </div>
// //                )}

// //                {/* Google Sign-in Button (Shown only for Login/Signup) */}
// //                {!isReset && (
// //                   <button
// //                      onClick={handleGoogleSignIn}
// //                      disabled={isDisabled}
// //                      className="w-full flex items-center justify-center py-3 px-6 mb-4 text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md shadow-blue-600/50 disabled:opacity-50"
// //                   >
// //                      {isDisabled ? (
// //                         <Loader2 className="w-5 h-5 animate-spin mr-2" />
// //                      ) : (
// //                         <Google className="w-5 h-5 mr-2" />
// //                      )}
// //                      Sign in with Google
// //                   </button>
// //                )}

// //                {/* Separator (Shown only for Login/Signup) */}
// //                {!isReset && (
// //                   <div className="relative flex items-center py-5">
// //                      <div className="flex-grow border-t border-gray-700"></div>
// //                      <span className="flex-shrink mx-4 text-gray-500 font-medium">
// //                         OR
// //                      </span>
// //                      <div className="flex-grow border-t border-gray-700"></div>
// //                   </div>
// //                )}

// //                <form onSubmit={handleSubmit} className="space-y-6">
// //                   {/* Email Input */}
// //                   <div className="relative">
// //                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
// //                      <input
// //                         type="email"
// //                         placeholder="Email Address"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         required
// //                         className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
// //                         disabled={isDisabled}
// //                      />
// //                   </div>

// //                   {/* Password Input (Login/Signup Only) */}
// //                   {!isReset && (
// //                      <div className="relative">
// //                         <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
// //                         <input
// //                            type="password"
// //                            placeholder="Password"
// //                            value={password}
// //                            onChange={(e) => setPassword(e.target.value)}
// //                            required
// //                            className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
// //                            disabled={isDisabled}
// //                         />
// //                      </div>
// //                   )}

// //                   {/* Password Confirm Input (Signup Only) */}
// //                   {isSignup && (
// //                      <div className="relative">
// //                         <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
// //                         <input
// //                            type="password"
// //                            placeholder="Confirm Password"
// //                            value={passwordConfirm}
// //                            onChange={(e) => setPasswordConfirm(e.target.value)}
// //                            required
// //                            className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
// //                            disabled={isDisabled}
// //                         />
// //                      </div>
// //                   )}

// //                   {/* Submit Button */}
// //                   <button
// //                      type="submit"
// //                      disabled={isDisabled}
// //                      className="w-full inline-flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg text-gray-900 bg-academy-accent hover:bg-orange-500 transition duration-300 shadow-lg shadow-academy-accent/50 disabled:opacity-50"
// //                   >
// //                      {isDisabled ? (
// //                         <Loader2 className="w-5 h-5 animate-spin mr-2" />
// //                      ) : isLogin ? (
// //                         <LogIn className="w-5 h-5 mr-2" />
// //                      ) : (
// //                         <User className="w-5 h-5 mr-2" />
// //                      )}
// //                      {buttonText}
// //                   </button>
// //                </form>

// //                {/* Mode Switcher / Forgot Password */}
// //                <div className="mt-8 text-center">
// //                   {isLogin && (
// //                      <>
// //                         <p className="text-gray-400 mb-4">
// //                            Don't have an account?{' '}
// //                            <button
// //                               onClick={() => switchMode('signup')}
// //                               className="text-academy-accent font-semibold hover:text-orange-500 transition"
// //                               disabled={isDisabled}
// //                            >
// //                               Sign Up
// //                            </button>
// //                         </p>
// //                         <p className="mt-2">
// //                            <button
// //                               onClick={() => switchMode('reset')}
// //                               className="text-gray-500 hover:text-gray-300 transition"
// //                               disabled={isDisabled}
// //                            >
// //                               Forgot Password?
// //                            </button>
// //                         </p>
// //                      </>
// //                   )}
// //                   {isSignup && (
// //                      <p className="text-gray-400">
// //                         Already have an account?{' '}
// //                         <button
// //                            onClick={() => switchMode('login')}
// //                            className="text-academy-accent font-semibold hover:text-orange-500 transition"
// //                            disabled={isDisabled}
// //                         >
// //                            Log In
// //                         </button>
// //                      </p>
// //                   )}
// //                   {isReset && (
// //                      <button
// //                         onClick={() => switchMode('login')}
// //                         className="text-gray-400 hover:text-academy-accent transition flex items-center justify-center mx-auto"
// //                         disabled={isDisabled}
// //                      >
// //                         <ChevronLeft className="w-4 h-4 mr-1" /> Back to Login
// //                      </button>
// //                   )}
// //                </div>
// //             </div>
// //          </div>
// //       </div>
// //    );
// // };

// // export default SignupPage;

// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';
// // import {
// //    Lock,
// //    Mail,
// //    ChevronLeft,
// //    Loader2,
// //    LogIn,
// //    Chrome,
// //    AlertTriangle,
// // } from 'lucide-react';

// // const SignupPage = () => {
// //    // Assuming useAuth now includes signInWithGoogle
// //    const { signUp, signIn, resetPassword, signInWithGoogle, loading } =
// //       useAuth();
// //    const navigate = useNavigate();

// //    const [mode, setMode] = useState('login'); // 'login', 'signup', 'reset'
// //    const [email, setEmail] = useState('');
// //    const [password, setPassword] = useState('');
// //    const [passwordConfirm, setPasswordConfirm] = useState('');
// //    const [error, setError] = useState('');
// //    const [message, setMessage] = useState('');
// //    const [isSubmitting, setIsSubmitting] = useState(false);

// //    // Clear messages/errors when switching modes
// //    const switchMode = (newMode) => {
// //       setMode(newMode);
// //       setError('');
// //       setMessage('');
// //       setIsSubmitting(false);
// //       setEmail('');
// //       setPassword('');
// //       setPasswordConfirm('');
// //    };

// //    const handleSubmit = async (e) => {
// //       e.preventDefault();
// //       setError('');
// //       setMessage('');
// //       setIsSubmitting(true);

// //       try {
// //          if (mode === 'signup') {
// //             if (password !== passwordConfirm) {
// //                setIsSubmitting(false);
// //                return setError('Passwords do not match.');
// //             }
// //             await signUp(email, password);
// //             navigate('/'); // Redirect on successful signup
// //          } else if (mode === 'login') {
// //             await signIn(email, password);
// //             navigate('/'); // Redirect on successful login
// //          } else if (mode === 'reset') {
// //             await resetPassword(email);
// //             setMessage('Check your inbox for further instructions.');
// //          }
// //       } catch (err) {
// //          let errorMessage = 'Failed to process request.';
// //          if (err.code) {
// //             // Handle common Firebase errors
// //             if (err.code === 'auth/email-already-in-use') {
// //                errorMessage = 'This email is already in use.';
// //             } else if (
// //                err.code === 'auth/user-not-found' ||
// //                err.code === 'auth/wrong-password'
// //             ) {
// //                errorMessage = 'Invalid email or password.';
// //             } else if (err.code === 'auth/weak-password') {
// //                errorMessage = 'Password must be at least 6 characters.';
// //             } else if (err.code === 'auth/operation-not-allowed') {
// //                // Specific fix for your reported Email/Password error!
// //                errorMessage =
// //                   'Email/Password sign-in is disabled. Please use Google or enable it in your Firebase Console settings.';
// //             }
// //          }
// //          setError(errorMessage);
// //       } finally {
// //          setIsSubmitting(false);
// //       }
// //    };

// //    const handleGoogleSignIn = async () => {
// //       setError('');
// //       setMessage('');
// //       setIsSubmitting(true);
// //       try {
// //          await signInWithGoogle();
// //          navigate('/'); // Redirect on successful Google sign-in
// //       } catch (err) {
// //          console.error('Google Sign-in failed:', err);
// //          let errorMessage = 'Failed to sign in with Google.';
// //          if (err.code === 'auth/popup-closed-by-user') {
// //             errorMessage = 'Sign-in window closed. Please try again.';
// //          } else if (err.code === 'auth/cancelled-popup-request') {
// //             errorMessage =
// //                'Cancelled previous sign-in attempt. Please try again.';
// //          } else if (err.code === 'auth/operation-not-allowed') {
// //             // Catches if Google provider is disabled in Firebase
// //             errorMessage =
// //                'Google sign-in is disabled. Please ensure the provider is enabled in the Firebase Console.';
// //          } else if (
// //             err.code === 'auth/account-exists-with-different-credential'
// //          ) {
// //             errorMessage =
// //                'You already have an account with this email using a different method (e.g., Email/Password). Please sign in with that method.';
// //          }
// //          setError(errorMessage);
// //       } finally {
// //          setIsSubmitting(false);
// //       }
// //    };

// //    // Determine the main button text based on the current mode
// //    const buttonText =
// //       mode === 'signup'
// //          ? 'Create Account'
// //          : mode === 'login'
// //          ? 'Log In'
// //          : 'Reset Password';

// //    // Conditional utility class for Tailwind (for custom color)
// //    const accentBg = 'bg-orange-600 hover:bg-orange-700';
// //    const accentText = 'text-orange-500';

// //    return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
// //          <div className="max-w-md w-full space-y-8 p-10 bg-gray-800 rounded-xl shadow-2xl">
// //             {/* Header */}
// //             <div className="text-center">
// //                <h2 className="mt-6 text-3xl font-extrabold text-white">
// //                   {mode === 'signup' && 'Create Your Account'}
// //                   {mode === 'login' && 'Sign In to Your Account'}
// //                   {mode === 'reset' && 'Reset Your Password'}
// //                </h2>
// //                <p className="mt-2 text-sm text-gray-400">
// //                   <Link
// //                      to="/"
// //                      className={`font-medium ${accentText} hover:text-orange-400 transition`}
// //                   >
// //                      Go back to Davidson Tech Academy
// //                   </Link>
// //                </p>
// //             </div>

// //             {/* Google Sign In Button */}
// //             {mode !== 'reset' && (
// //                <button
// //                   onClick={handleGoogleSignIn}
// //                   disabled={isSubmitting || loading}
// //                   className="w-full flex items-center justify-center px-4 py-3 border border-gray-700 rounded-lg shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 transition-colors disabled:opacity-50"
// //                >
// //                   <Chrome className="w-5 h-5 mr-3 text-orange-400" />
// //                   {mode === 'signup'
// //                      ? 'Sign up with Google'
// //                      : 'Sign in with Google'}
// //                </button>
// //             )}

// //             {/* Separator */}
// //             {mode !== 'reset' && (
// //                <div className="relative">
// //                   <div className="absolute inset-0 flex items-center">
// //                      <div className="w-full border-t border-gray-700"></div>
// //                   </div>
// //                   <div className="relative flex justify-center text-sm">
// //                      <span className="px-2 bg-gray-800 text-gray-400">
// //                         Or continue with email
// //                      </span>
// //                   </div>
// //                </div>
// //             )}

// //             {/* Error/Message Display */}
// //             {error && (
// //                <div className="bg-red-900/40 border border-red-500 text-red-300 p-3 rounded-lg flex items-start">
// //                   <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
// //                   <span className="text-sm font-medium">{error}</span>
// //                </div>
// //             )}
// //             {message && (
// //                <div className="bg-green-900/40 border border-green-500 text-green-300 p-3 rounded-lg text-center">
// //                   <span className="text-sm font-medium">{message}</span>
// //                </div>
// //             )}

// //             {/* Form */}
// //             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //                {/* Email Input */}
// //                <div className="relative">
// //                   <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
// //                   <input
// //                      id="email"
// //                      name="email"
// //                      type="email"
// //                      autoComplete="email"
// //                      required
// //                      value={email}
// //                      onChange={(e) => setEmail(e.target.value)}
// //                      className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-700 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-gray-700 sm:text-sm"
// //                      placeholder="Email address"
// //                      disabled={isSubmitting || loading}
// //                   />
// //                </div>

// //                {/* Password Input (Login/Signup) */}
// //                {mode !== 'reset' && (
// //                   <div className="relative">
// //                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
// //                      <input
// //                         id="password"
// //                         name="password"
// //                         type="password"
// //                         autoComplete={
// //                            mode === 'login'
// //                               ? 'current-password'
// //                               : 'new-password'
// //                         }
// //                         required
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-700 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-gray-700 sm:text-sm"
// //                         placeholder="Password"
// //                         disabled={isSubmitting || loading}
// //                      />
// //                   </div>
// //                )}

// //                {/* Password Confirmation (Signup Only) */}
// //                {mode === 'signup' && (
// //                   <div className="relative">
// //                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
// //                      <input
// //                         id="password-confirm"
// //                         name="password-confirm"
// //                         type="password"
// //                         autoComplete="new-password"
// //                         required
// //                         value={passwordConfirm}
// //                         onChange={(e) => setPasswordConfirm(e.target.value)}
// //                         className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-700 placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500 bg-gray-700 sm:text-sm"
// //                         placeholder="Confirm Password"
// //                         disabled={isSubmitting || loading}
// //                      />
// //                   </div>
// //                )}

// //                {/* Submit Button */}
// //                <div>
// //                   <button
// //                      type="submit"
// //                      className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${accentBg} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
// //                      disabled={isSubmitting || loading}
// //                   >
// //                      {isSubmitting || loading ? (
// //                         <Loader2 className="w-5 h-5 animate-spin mr-2" />
// //                      ) : (
// //                         <LogIn className="w-5 h-5 mr-2" />
// //                      )}
// //                      {isSubmitting ? 'Processing...' : buttonText}
// //                   </button>
// //                </div>
// //             </form>

// //             {/* Mode Switcher / Forgot Password */}
// //             <div className="text-center">
// //                {mode === 'login' && (
// //                   <>
// //                      <p className="text-gray-400">
// //                         Don't have an account?{' '}
// //                         <button
// //                            onClick={() => switchMode('signup')}
// //                            className={`font-semibold ${accentText} hover:text-orange-500 transition`}
// //                            disabled={isSubmitting || loading}
// //                         >
// //                            Sign Up
// //                         </button>
// //                      </p>
// //                      <p className="mt-2">
// //                         <button
// //                            onClick={() => switchMode('reset')}
// //                            className="text-gray-500 hover:text-gray-300 transition text-sm"
// //                            disabled={isSubmitting || loading}
// //                         >
// //                            Forgot Password?
// //                         </button>
// //                      </p>
// //                   </>
// //                )}
// //                {mode === 'signup' && (
// //                   <p className="text-gray-400">
// //                      Already have an account?{' '}
// //                      <button
// //                         onClick={() => switchMode('login')}
// //                         className={`font-semibold ${accentText} hover:text-orange-500 transition`}
// //                         disabled={isSubmitting || loading}
// //                      >
// //                         Log In
// //                      </button>
// //                   </p>
// //                )}
// //                {mode === 'reset' && (
// //                   <button
// //                      onClick={() => switchMode('login')}
// //                      className={`text-gray-400 hover:${accentText} transition flex items-center justify-center mx-auto`}
// //                      disabled={isSubmitting || loading}
// //                   >
// //                      <ChevronLeft className="w-4 h-4 mr-1" /> Back to Login
// //                   </button>
// //                )}
// //             </div>
// //          </div>
// //       </div>
// //    );
// // };

// // export default SignupPage;
// //////////////////////////////////////////////////
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';
// // import {
// //    User,
// //    Lock,
// //    Mail,
// //    ChevronLeft,
// //    Loader2,
// //    LogIn,
// //    UserPlus,
// //    AlertTriangle,
// //    Send,
// //    MessageCircle,
// //    AtSign,
// //    Shield,
// //    Chrome,
// // } from 'lucide-react';

// // // Utility function to map Firebase errors to user-friendly messages
// // const getFriendlyErrorMessage = (errorCode) => {
// //    switch (errorCode) {
// //       case 'auth/email-already-in-use':
// //          return 'This email address is already in use. Try logging in.';
// //       case 'auth/invalid-email':
// //          return 'The email address is not valid.';
// //       case 'auth/weak-password':
// //          return 'Password should be at least 6 characters.';
// //       case 'auth/user-not-found':
// //          return 'No user found with this email.';
// //       case 'auth/wrong-password':
// //          return 'Incorrect password. Please try again.';
// //       case 'auth/popup-closed-by-user':
// //          return 'Sign-in window closed. Please try again.';
// //       default:
// //          return `An unexpected error occurred. (${errorCode})`;
// //    }
// // };

// // const SignupPage = () => {
// //    // Destructure functions and state from AuthContext
// //    const {
// //       signUp,
// //       signIn,
// //       resetPassword,
// //       signInWithGoogle,
// //       loading: authLoading,
// //    } = useAuth();
// //    const navigate = useNavigate();

// //    const [mode, setMode] = useState('login'); // 'login', 'signup', 'reset'
// //    const [email, setEmail] = useState('');
// //    const [password, setPassword] = useState('');
// //    const [passwordConfirm, setPasswordConfirm] = useState('');
// //    const [error, setError] = useState('');
// //    const [message, setMessage] = useState('');
// //    const [isSubmitting, setIsSubmitting] = useState(false);

// //    // Clear messages/errors when switching modes
// //    const switchMode = (newMode) => {
// //       setMode(newMode);
// //       setError('');
// //       setMessage('');
// //       setIsSubmitting(false);
// //       // Reset input fields when switching modes
// //       setEmail('');
// //       setPassword('');
// //       setPasswordConfirm('');
// //    };

// //    const handleSubmit = async (e) => {
// //       e.preventDefault();
// //       setError('');
// //       setMessage('');
// //       setIsSubmitting(true);

// //       try {
// //          if (mode === 'signup') {
// //             if (password !== passwordConfirm) {
// //                setError('Passwords do not match.');
// //                return;
// //             }
// //             await signUp(email, password);
// //             setMessage('Registration successful! You are now logged in.');
// //             navigate('/dashboard'); // Navigate to a protected route (e.g., dashboard)
// //          } else if (mode === 'login') {
// //             await signIn(email, password);
// //             setMessage('Login successful!');
// //             navigate('/dashboard'); // Navigate to a protected route
// //          } else if (mode === 'reset') {
// //             await resetPassword(email);
// //             setMessage(
// //                'Password reset link sent to your email! Check your inbox.'
// //             );
// //          }
// //       } catch (err) {
// //          console.error('Auth submission error:', err);
// //          const friendlyError = getFriendlyErrorMessage(err.code);
// //          setError(friendlyError);
// //       } finally {
// //          setIsSubmitting(false);
// //       }
// //    };

// //    const handleGoogleSignIn = async () => {
// //       setError('');
// //       setMessage('');
// //       setIsSubmitting(true);
// //       try {
// //          await signInWithGoogle();
// //          setMessage('Signed in with Google successfully!');
// //          navigate('/dashboard');
// //       } catch (err) {
// //          console.error('Google Sign-in error:', err);
// //          const friendlyError = getFriendlyErrorMessage(err.code);
// //          setError(friendlyError);
// //       } finally {
// //          setIsSubmitting(false);
// //       }
// //    };

// //    const isLogin = mode === 'login';
// //    const isSignup = mode === 'signup';
// //    const isReset = mode === 'reset';
// //    const isDisabled = isSubmitting || authLoading;

// //    // Determine the button text based on the mode
// //    let submitButtonText = 'Submit';
// //    let icon = <Send className="w-5 h-5 ml-2" />;

// //    if (isLogin) {
// //       submitButtonText = 'Log In';
// //       icon = <LogIn className="w-5 h-5 ml-2" />;
// //    } else if (isSignup) {
// //       submitButtonText = 'Register Account';
// //       icon = <UserPlus className="w-5 h-5 ml-2" />;
// //    } else if (isReset) {
// //       submitButtonText = 'Send Reset Email';
// //       icon = <Mail className="w-5 h-5 ml-2" />;
// //    }

// //    const title = isSignup
// //       ? 'Create Your Academy Account'
// //       : isLogin
// //       ? 'Welcome Back to Davidson Tech'
// //       : 'Reset Your Password';

// //    return (
// //       <div className="min-h-screen bg-gray-900 flex items-center justify-center p-20">
// //          <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8 border border-gray-700">
// //             <h1 className="text-3xl font-extrabold text-white text-center tracking-tight">
// //                {title}
// //             </h1>

// //             {/* Error Message Display */}
// //             {(error || message) && (
// //                <div
// //                   className={`p-4 rounded-lg flex items-center space-x-3 text-sm font-medium ${
// //                      error
// //                         ? 'bg-red-900/50 text-red-300 border border-red-700'
// //                         : 'bg-green-900/50 text-green-300 border border-green-700'
// //                   }`}
// //                >
// //                   {error ? (
// //                      <AlertTriangle className="w-5 h-5 flex-shrink-0" />
// //                   ) : (
// //                      <MessageCircle className="w-5 h-5 flex-shrink-0" />
// //                   )}
// //                   <p>{error || message}</p>
// //                </div>
// //             )}

// //             <form onSubmit={handleSubmit} className="space-y-6">
// //                {/* Email Field (Required for all modes) */}
// //                <div className="relative">
// //                   <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
// //                   <input
// //                      id="email"
// //                      type="email"
// //                      placeholder="Email Address"
// //                      value={email}
// //                      onChange={(e) => setEmail(e.target.value)}
// //                      required
// //                      className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150 shadow-inner"
// //                      disabled={isDisabled}
// //                   />
// //                </div>

// //                {/* Password Field (Login & Signup) */}
// //                {(isLogin || isSignup) && (
// //                   <div className="relative">
// //                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
// //                      <input
// //                         id="password"
// //                         type="password"
// //                         placeholder="Password (min 6 characters)"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         required
// //                         className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150 shadow-inner"
// //                         disabled={isDisabled}
// //                      />
// //                   </div>
// //                )}

// //                {/* Confirm Password Field (Signup only) */}
// //                {isSignup && (
// //                   <div className="relative">
// //                      <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
// //                      <input
// //                         id="password-confirm"
// //                         type="password"
// //                         placeholder="Confirm Password"
// //                         value={passwordConfirm}
// //                         onChange={(e) => setPasswordConfirm(e.target.value)}
// //                         required
// //                         className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150 shadow-inner"
// //                         disabled={isDisabled}
// //                      />
// //                   </div>
// //                )}

// //                {/* Submit Button */}
// //                <button
// //                   type="submit"
// //                   disabled={isDisabled}
// //                   className="w-full inline-flex items-center justify-center py-3 px-6 text-lg font-bold rounded-xl text-gray-900 bg-academy-accent hover:bg-orange-500 transition duration-300 shadow-lg shadow-academy-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
// //                >
// //                   {isSubmitting || authLoading ? (
// //                      <Loader2 className="w-6 h-6 animate-spin" />
// //                   ) : (
// //                      <>
// //                         {submitButtonText}
// //                         {icon}
// //                      </>
// //                   )}
// //                </button>
// //             </form>

// //             {/* OR Divider and Google Sign-in */}
// //             {(isLogin || isSignup) && (
// //                <>
// //                   <div className="flex items-center">
// //                      <div className="flex-grow border-t border-gray-700"></div>
// //                      <span className="flex-shrink mx-4 text-gray-500 font-medium">
// //                         OR
// //                      </span>
// //                      <div className="flex-grow border-t border-gray-700"></div>
// //                   </div>

// //                   <button
// //                      onClick={handleGoogleSignIn}
// //                      disabled={isDisabled}
// //                      className="w-full inline-flex items-center justify-center py-3 px-6 text-lg font-bold rounded-xl text-white border border-gray-600 bg-gray-700 hover:bg-gray-600 transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
// //                   >
// //                      <Chrome className="w-5 h-5 mr-3" />
// //                      {isLogin ? 'Sign In with Google' : 'Sign Up with Google'}
// //                   </button>
// //                </>
// //             )}

// //             {/* Mode Switchers */}
// //             <div className="text-center text-sm">
// //                {isLogin && (
// //                   <>
// //                      <p className="text-gray-400 mb-4">
// //                         New student?{' '}
// //                         <button
// //                            onClick={() => switchMode('signup')}
// //                            className="text-academy-accent font-semibold hover:text-orange-500 transition"
// //                            disabled={isDisabled}
// //                         >
// //                            Create an Account
// //                         </button>
// //                      </p>
// //                      <button
// //                         onClick={() => switchMode('reset')}
// //                         className="text-gray-500 hover:text-gray-300 transition"
// //                         disabled={isDisabled}
// //                      >
// //                         Forgot Password?
// //                      </button>
// //                   </>
// //                )}
// //                {isSignup && (
// //                   <p className="text-gray-400">
// //                      Already have an account?{' '}
// //                      <button
// //                         onClick={() => switchMode('login')}
// //                         className="text-academy-accent font-semibold hover:text-orange-500 transition"
// //                         disabled={isDisabled}
// //                      >
// //                         Log In
// //                      </button>
// //                   </p>
// //                )}
// //                {isReset && (
// //                   <button
// //                      onClick={() => switchMode('login')}
// //                      className="text-gray-400 hover:text-academy-accent transition flex items-center justify-center mx-auto"
// //                      disabled={isDisabled}
// //                   >
// //                      <ChevronLeft className="w-4 h-4 mr-1" /> Back to Login
// //                   </button>
// //                )}
// //             </div>
// //          </div>
// //       </div>
// //    );
// // };

// // export default SignupPage;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import {
//    User,
//    Lock,
//    Mail,
//    ChevronLeft,
//    Loader2,
//    LogIn,
//    MailCheck,
//    AlertTriangle,
//    UserPlus,
//    LogOut,
// } from 'lucide-react';

// const SignupPage = () => {
//    // Destructure the Supabase-backed functions and state from the context
//    const {
//       signUp,
//       signIn,
//       resetPassword,
//       signInWithGoogle,
//       loading: authLoading,
//    } = useAuth();
//    const navigate = useNavigate();

//    const [mode, setMode] = useState('login'); // 'login', 'signup', 'reset'
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//    const [passwordConfirm, setPasswordConfirm] = useState('');
//    const [error, setError] = useState('');
//    const [message, setMessage] = useState('');
//    const [isSubmitting, setIsSubmitting] = useState(false);

//    // Determine the main loading state (either auth context loading or local form submitting)
//    const loading = authLoading || isSubmitting;

//    // Clear messages/errors when switching modes
//    const switchMode = (newMode) => {
//       setMode(newMode);
//       setError('');
//       setMessage('');
//       setIsSubmitting(false);
//       setEmail('');
//       setPassword('');
//       setPasswordConfirm('');
//    };

//    const handleSupabaseError = (err) => {
//       // Supabase errors often contain complex messages; we try to extract a user-friendly part.
//       let displayError = 'An unexpected error occurred.';
//       if (err.message) {
//          // Example: "Password should be at least 6 characters."
//          displayError = err.message.replace(
//             'For more information, visit https://postgrest.org/en/stable/api.html#errors',
//             ''
//          );

//          // Specific handling for common Supabase messages
//          if (displayError.includes('Email not confirmed')) {
//             displayError =
//                'Please check your email to confirm your account before logging in.';
//          } else if (displayError.includes('Invalid login credentials')) {
//             displayError = 'Invalid email or password.';
//          }
//       }
//       setError(displayError);
//    };

//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       setError('');
//       setMessage('');
//       setIsSubmitting(true);

//       try {
//          if (mode === 'signup') {
//             if (password !== passwordConfirm) {
//                setIsSubmitting(false);
//                return setError('Passwords do not match.');
//             }

//             // --- SUPABASE SIGNUP ---
//             const {} = await signUp(email, password);

//             // Supabase returns a user object on signup, but the user is not automatically signed in
//             // if Email Confirmation is required (which is the default).
//             setMessage(
//                'Success! Please check your email inbox (and spam folder) to confirm your account, then log in.'
//             );
//             switchMode('login'); // Switch to login after successful registration
//          } else if (mode === 'login') {
//             // --- SUPABASE LOGIN ---
//             const { user } = await signIn(email, password);
//             if (user) {
//                navigate('/dashboard'); // Redirect to dashboard on successful login
//             }
//          } else if (mode === 'reset') {
//             // --- SUPABASE PASSWORD RESET ---
//             await resetPassword(email);
//             setMessage(
//                'Password reset email sent! Check your inbox (and spam) for instructions.'
//             );
//             switchMode('login'); // Return to login after sending email
//          }
//       } catch (err) {
//          handleSupabaseError(err);
//       } finally {
//          setIsSubmitting(false);
//       }
//    };

//    const handleGoogleSignIn = async () => {
//       setError('');
//       setMessage('');
//       setIsSubmitting(true);

//       try {
//          // --- SUPABASE GOOGLE SIGN IN (Redirect or Popup initiated by Supabase SDK) ---
//          await signInWithGoogle();
//          // Note: Supabase handles the redirection/popup for OAuth flows.
//          // If a successful session is returned, the AuthContext listener will update currentUser
//          // and we rely on routing in App.js to handle the redirect.
//       } catch (err) {
//          handleSupabaseError(err);
//       } finally {
//          setIsSubmitting(false);
//       }
//    };

//    const getTitle = () => {
//       if (mode === 'login') return 'Welcome Back';
//       if (mode === 'signup') return 'Create Account';
//       if (mode === 'reset') return 'Reset Password';
//       return '';
//    };

//    const getIcon = () => {
//       if (mode === 'login')
//          return <LogIn className="w-8 h-8 text-academy-accent" />;
//       if (mode === 'signup')
//          return <UserPlus className="w-8 h-8 text-academy-accent" />;
//       if (mode === 'reset')
//          return <Lock className="w-8 h-8 text-academy-accent" />;
//       return null;
//    };

//    // ===============================================
//    // === RENDER LOGIC
//    // ===============================================

//    return (
//       <div className="min-h-screen bg-academy-bg pt-20 flex flex-col items-center justify-center px-4">
//          <div className="w-full max-w-md">
//             <div className="text-center mb-8">
//                {getIcon()}
//                <h1 className="text-4xl font-extrabold text-white mt-3">
//                   {getTitle()}
//                </h1>
//             </div>

//             {/* MESSAGE/ERROR BOX */}
//             {message && (
//                <div className="bg-green-600/20 text-green-300 p-3 rounded-lg flex items-start mb-4 border border-green-600">
//                   <MailCheck className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
//                   <p className="text-sm font-medium">{message}</p>
//                </div>
//             )}
//             {error && (
//                <div className="bg-red-600/20 text-red-300 p-3 rounded-lg flex items-start mb-4 border border-red-600">
//                   <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
//                   <p className="text-sm font-medium">{error}</p>
//                </div>
//             )}

//             <form method='post'
//                onSubmit={handleSubmit}
//                className="bg-gray-800 p-8 rounded-xl shadow-2xl space-y-6 border border-gray-700/50"
//             >
//                {/* Email Input */}
//                {(mode === 'login' || mode === 'signup' || mode === 'reset') && (
//                   <div className="relative">
//                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//                      <input
//                         type="email"
//                         placeholder="Email Address"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
//                         disabled={loading}
//                      />
//                   </div>
//                )}

//                {/* Password Input (Login/Signup) */}
//                {(mode === 'login' || mode === 'signup') && (
//                   <div className="relative">
//                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//                      <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
//                         disabled={loading}
//                      />
//                   </div>
//                )}

//                {/* Confirm Password (Signup only) */}
//                {mode === 'signup' && (
//                   <div className="relative">
//                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//                      <input
//                         type="password"
//                         placeholder="Confirm Password"
//                         value={passwordConfirm}
//                         onChange={(e) => setPasswordConfirm(e.target.value)}
//                         required
//                         className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-academy-accent transition duration-150"
//                         disabled={loading}
//                      />
//                   </div>
//                )}

//                {/* Submit Button */}
//                <button
//                   type="submit"
//                   className="w-full flex items-center justify-center py-3 px-6 text-lg font-bold rounded-lg text-gray-900 bg-academy-accent hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-academy-accent/50 disabled:opacity-50"
//                   disabled={loading}
//                >
//                   {loading ? (
//                      <>
//                         <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                         Processing...
//                      </>
//                   ) : mode === 'login' ? (
//                      <>
//                         <LogIn className="w-5 h-5 mr-2" />
//                         Log In
//                      </>
//                   ) : mode === 'signup' ? (
//                      <>
//                         <UserPlus className="w-5 h-5 mr-2" />
//                         Sign Up
//                      </>
//                   ) : (
//                      'Send Reset Link'
//                   )}
//                </button>

//                {/* Or Divider (Login/Signup) */}
//                {(mode === 'login' || mode === 'signup') && (
//                   <div className="flex items-center space-x-2 my-4">
//                      <span className="flex-grow border-t border-gray-700"></span>
//                      <span className="text-xs font-medium text-gray-500 uppercase">
//                         OR
//                      </span>
//                      <span className="flex-grow border-t border-gray-700"></span>
//                   </div>
//                )}

//                {/* Google Button (Login/Signup) */}
//                {(mode === 'login' || mode === 'signup') && (
//                   <button
//                      onClick={handleGoogleSignIn}
//                      type="button"
//                      className="w-full flex items-center justify-center py-3 px-6 text-base font-semibold rounded-lg text-white bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-md disabled:opacity-50"
//                      disabled={loading}
//                   >
//                      {loading ? (
//                         <>
//                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                            Loading Google...
//                         </>
//                      ) : (
//                         <>
//                            <img
//                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/48px-Google_%22G%22_logo.svg.png"
//                               alt="Google"
//                               className="w-5 h-5 mr-2"
//                            />
//                            {mode === 'login'
//                               ? 'Continue with Google'
//                               : 'Sign Up with Google'}
//                         </>
//                      )}
//                   </button>
//                )}
//             </form>

//             {/* Mode Switcher / Reset Link */}
//             <div className="text-center mt-6">
//                {mode === 'login' && (
//                   <>
//                      <p className="text-gray-400">
//                         Don't have an account?{' '}
//                         <button
//                            onClick={() => switchMode('signup')}
//                            className="text-academy-accent font-semibold hover:text-orange-500 transition"
//                            disabled={loading}
//                         >
//                            Sign Up
//                         </button>
//                      </p>
//                      <p className="mt-2">
//                         <button
//                            onClick={() => switchMode('reset')}
//                            className="text-gray-500 hover:text-gray-300 transition"
//                            disabled={loading}
//                         >
//                            Forgot Password?
//                         </button>
//                      </p>
//                   </>
//                )}
//                {mode === 'signup' && (
//                   <p className="text-gray-400">
//                      Already have an account?{' '}
//                      <button
//                         onClick={() => switchMode('login')}
//                         className="text-academy-accent font-semibold hover:text-orange-500 transition"
//                         disabled={loading}
//                      >
//                         Log In
//                      </button>
//                   </p>
//                )}
//                {mode === 'reset' && (
//                   <button
//                      onClick={() => switchMode('login')}
//                      className="text-gray-400 hover:text-academy-accent transition flex items-center justify-center mx-auto"
//                      disabled={loading}
//                   >
//                      <ChevronLeft className="w-4 h-4 mr-1" /> Back to Login
//                   </button>
//                )}
//             </div>
//          </div>
//       </div>
//    );
// // };
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import {
//    Mail,
//    Lock,
//    Loader2,
//    LogIn,
//    UserPlus,
//    Eye,
//    EyeOff,
//    CheckCircle,
//    XCircle,
//    AlertCircle,
//    Sparkles,
// } from 'lucide-react';

// const SignupPage = () => {
//    const { signUp, signIn, signInWithGoogle, resetPassword, authState } =
//       useAuth();
//    const navigate = useNavigate();

//    // States
//    const [mode, setMode] = useState('login');
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//    const [confirmPassword, setConfirmPassword] = useState('');
//    const [showPassword, setShowPassword] = useState(false);
//    const [error, setError] = useState('');
//    const [message, setMessage] = useState('');
//    const [isSubmitting, setIsSubmitting] = useState(false);
//    const [successAnimation, setSuccessAnimation] = useState(false);



   
//    // Switch modes
//    const switchMode = (newMode) => {
//       setMode(newMode);
//       setError('');
//       setMessage('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//    };

//    // Handle Email/Password Auth
//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       setError('');
//       setMessage('');
//       setIsSubmitting(true);

//       try {
//          if (mode === 'signup') {
//             if (password !== confirmPassword) {
//                throw new Error('Passwords do not match');
//             }
//             if (password.length < 6) {
//                throw new Error('Password must be at least 6 characters');
//             }

//             const result = await signUp(email, password);
//             setSuccessAnimation(true);
//             setMessage(result.message);

//             // Auto switch to login after 3 seconds
//             setTimeout(() => {
//                switchMode('login');
//                setSuccessAnimation(false);
//             }, 3000);
//          } else if (mode === 'login') {
//             const result = await signIn(email, password);
//             setSuccessAnimation(true);
//             setMessage(result.message);

//             // Redirect to dashboard after 2 seconds
//             setTimeout(() => {
//                navigate('/dashboard');
//             }, 2000);
//          } else if (mode === 'forgot') {
//             const result = await resetPassword(email);
//             setMessage(result.message);
//          }
//       } catch (err) {
//          setError(err.message);
//       } finally {
//          setIsSubmitting(false);
//       }
//    };

//    // Handle Google Sign In
//    const handleGoogleSignIn = async () => {
//       setError('');
//       setMessage('');
//       try {
//          await signInWithGoogle();
//          // Supabase handles the redirect automatically
//       } catch (err) {
//          setError(err.message || 'Failed to sign in with Google');
//       }
//    };

//    const isLogin = mode === 'login';
//    const isSignup = mode === 'signup';
//    const isForgot = mode === 'forgot';

//    // SUCCESS ANIMATION COMPONENT
//    const SuccessAnimation = () => (
//       <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
//          <div className="bg-gray-800 p-8 rounded-2xl text-center animate-pulse">
//             <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                <CheckCircle className="w-12 h-12 text-white" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-2">Success! 🎉</h3>
//             <p className="text-green-400">Account created successfully!</p>
//             <div className="mt-4 flex justify-center space-x-2">
//                <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce" />
//                <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce delay-100" />
//                <Sparkles className="w-5 h-5 text-yellow-400 animate-bounce delay-200" />
//             </div>
//          </div>
//       </div>
//    );

//    return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-20 flex items-center justify-center p-4">
//          {successAnimation && <SuccessAnimation />}

//          <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-2xl">
//             {/* Header with Icon */}
//             <div className="text-center mb-8">
//                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   {isLogin ? (
//                      <LogIn className="w-8 h-8 text-white" />
//                   ) : isSignup ? (
//                      <UserPlus className="w-8 h-8 text-white" />
//                   ) : (
//                      <Mail className="w-8 h-8 text-white" />
//                   )}
//                </div>
//                <h2 className="text-3xl font-bold text-white">
//                   {isLogin
//                      ? 'Welcome Back'
//                      : isSignup
//                      ? 'Join Our Academy'
//                      : 'Reset Password'}
//                </h2>
//                <p className="text-gray-400 mt-2">
//                   {isLogin
//                      ? 'Sign in to continue learning'
//                      : isSignup
//                      ? 'Start your tech journey today'
//                      : "We'll help you get back in"}
//                </p>
//             </div>

//             {/* Status Indicators */}
//             <div className="space-y-4 mb-6">
//                {authState === 'loading' && (
//                   <div className="flex items-center bg-blue-900/30 text-blue-300 p-3 rounded-lg">
//                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
//                      <span>Processing your request...</span>
//                   </div>
//                )}

//                {error && (
//                   <div className="flex items-center bg-red-900/30 text-red-300 p-3 rounded-lg border border-red-700">
//                      <XCircle className="w-5 h-5 mr-2 flex-shrink-0" />
//                      <span>{error}</span>
//                   </div>
//                )}

//                {message && (
//                   <div className="flex items-center bg-green-900/30 text-green-300 p-3 rounded-lg border border-green-700">
//                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
//                      <span>{message}</span>
//                   </div>
//                )}
//             </div>

//             {/* Google Button */}
//             {(isLogin || isSignup) && (
//                <button
//                   onClick={handleGoogleSignIn}
//                   disabled={isSubmitting}
//                   className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 mb-6 shadow-lg hover:shadow-xl"
//                >
//                   <img
//                      src="https://www.google.com/favicon.ico"
//                      alt="Google"
//                      className="w-5 h-5"
//                   />
//                   <span className="font-medium">
//                      {isSignup ? 'Sign up with Google' : 'Sign in with Google'}
//                   </span>
//                </button>
//             )}

//             {/* Divider */}
//             {(isLogin || isSignup) && (
//                <div className="flex items-center my-6">
//                   <div className="flex-grow border-t border-gray-700"></div>
//                   <span className="mx-4 text-gray-500 text-sm font-medium">
//                      OR
//                   </span>
//                   <div className="flex-grow border-t border-gray-700"></div>
//                </div>
//             )}

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-5">
//                {/* Email */}
//                <div>
//                   <label className="text-sm font-medium text-gray-300 mb-2 block">
//                      Email Address
//                   </label>
//                   <div className="relative">
//                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//                      <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full pl-10 pr-3 py-3.5 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
//                         placeholder="you@example.com"
//                         required
//                         disabled={isSubmitting}
//                      />
//                   </div>
//                </div>

//                {/* Password (for login/signup) */}
//                {(isLogin || isSignup) && (
//                   <div>
//                      <label className="text-sm font-medium text-gray-300 mb-2 block">
//                         Password
//                      </label>
//                      <div className="relative">
//                         <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//                         <input
//                            type={showPassword ? 'text' : 'password'}
//                            value={password}
//                            onChange={(e) => setPassword(e.target.value)}
//                            className="w-full pl-10 pr-10 py-3.5 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
//                            placeholder="••••••••"
//                            required
//                            disabled={isSubmitting}
//                         />
//                         <button
//                            type="button"
//                            onClick={() => setShowPassword(!showPassword)}
//                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
//                         >
//                            {showPassword ? (
//                               <EyeOff size={20} />
//                            ) : (
//                               <Eye size={20} />
//                            )}
//                         </button>
//                      </div>
//                   </div>
//                )}

//                {/* Confirm Password (signup only) */}
//                {isSignup && (
//                   <div>
//                      <label className="text-sm font-medium text-gray-300 mb-2 block">
//                         Confirm Password
//                      </label>
//                      <div className="relative">
//                         <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
//                         <input
//                            type="password"
//                            value={confirmPassword}
//                            onChange={(e) => setConfirmPassword(e.target.value)}
//                            className="w-full pl-10 pr-3 py-3.5 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
//                            placeholder="••••••••"
//                            required
//                            disabled={isSubmitting}
//                         />
//                      </div>
//                   </div>
//                )}

//                {/* Submit Button */}
//                <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
//                >
//                   {isSubmitting ? (
//                      <>
//                         <Loader2 className="w-5 h-5 animate-spin" />
//                         Processing...
//                      </>
//                   ) : isLogin ? (
//                      <>
//                         <LogIn className="w-5 h-5" />
//                         Sign In
//                      </>
//                   ) : isSignup ? (
//                      <>
//                         <UserPlus className="w-5 h-5" />
//                         Create Account
//                      </>
//                   ) : (
//                      'Send Reset Link'
//                   )}
//                </button>
//             </form>

//             {/* Mode Switcher */}
//             <div className="mt-8 text-center space-y-4">
//                {isLogin && (
//                   <>
//                      <p className="text-gray-400">
//                         New here?{' '}
//                         <button
//                            onClick={() => switchMode('signup')}
//                            className="text-orange-400 hover:text-orange-300 font-semibold"
//                         >
//                            Create an account
//                         </button>
//                      </p>
//                      <p>
//                         <button
//                            onClick={() => switchMode('forgot')}
//                            className="text-gray-500 hover:text-gray-300 text-sm"
//                         >
//                            Forgot your password?
//                         </button>
//                      </p>
//                   </>
//                )}

//                {isSignup && (
//                   <p className="text-gray-400">
//                      Already have an account?{' '}
//                      <button
//                         onClick={() => switchMode('login')}
//                         className="text-orange-400 hover:text-orange-300 font-semibold"
//                      >
//                         Sign in here
//                      </button>
//                   </p>
//                )}

//                {isForgot && (
//                   <button
//                      onClick={() => switchMode('login')}
//                      className="text-gray-400 hover:text-white font-medium"
//                   >
//                      ← Back to Sign In
//                   </button>
//                )}
//             </div>
//          </div>
//       </div>
//    );
// };

// export default SignupPage;
// ./pages/SignupPage.jsimport React, { useState } from 'react';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignupPage() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   const [isLogin, setIsLogin] = useState(false);

   const auth = useAuth(); // Don't destructure immediately
   const navigate = useNavigate();

   // Safely extract functions from auth
   const signUp = auth?.signUp;
   const signIn = auth?.signIn;
   const signInWithGoogle = auth?.signInWithGoogle;
   const user = auth?.user;

   async function handleSubmit(e) {
      e.preventDefault();
      setError('');
      setLoading(true);

      try {
         if (!signUp || !signIn) {
            throw new Error('Auth functions not available');
         }

         if (isLogin) {
            // LOGIN
            const { error } = await signIn(email, password);
            if (error) throw error;
            navigate('/dashboard');
         } else {
            // SIGNUP
            const { error } = await signUp(email, password);
            if (error) throw error;
            alert('Account created! Check your email to verify.');
            setEmail('');
            setPassword('');
         }
      } catch (err) {
         setError(err.message);
      } finally {
         setLoading(false);
      }
   }

   async function handleGoogleSignIn() {
      try {
         if (!signInWithGoogle) {
            throw new Error('Google sign-in not available');
         }
         await signInWithGoogle();
         // Will redirect automatically
      } catch (err) {
         setError(err.message);
      }
   }

   // If already logged in, show welcome
   if (user) {
      return (
         <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="text-center">
               <h1 className="text-3xl font-bold text-white mb-4">
                  ✅ Already logged in as {user.email}
               </h1>
               <Link to="/dashboard" className="text-orange-400 text-lg">
                  Go to Dashboard
               </Link>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
         <div className="bg-gray-800 p-8 rounded-xl w-full max-w-md">
            <h1 className="text-3xl font-bold text-white text-center mb-6">
               {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>

            {error && (
               <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded mb-4">
                  {error}
               </div>
            )}

            {/* Google Button */}
            <button
               onClick={handleGoogleSignIn}
               disabled={loading}
               className="w-full bg-white text-gray-900 font-bold py-3 px-4 rounded-lg mb-6 hover:bg-gray-100 transition flex items-center justify-center"
            >
               <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5 mr-2"
               />
               Continue with Google
            </button>

            <div className="relative mb-6">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
               </div>
               <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">
                     Or with email
                  </span>
               </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
               <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg"
                  required
                  disabled={loading}
               />
               <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 bg-gray-700 text-white rounded-lg"
                  required
                  disabled={loading}
               />

               <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 transition"
               >
                  {loading ? 'Processing...' : isLogin ? 'Log In' : 'Sign Up'}
               </button>
            </form>

            {/* Toggle Login/Signup */}
            <div className="mt-6 text-center">
               <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-orange-400 hover:text-orange-300"
               >
                  {isLogin
                     ? "Don't have an account? Sign up"
                     : 'Already have an account? Log in'}
               </button>
            </div>

            {/* Forgot Password */}
            {isLogin && (
               <div className="mt-4 text-center">
                  <Link
                     to="/forgot-password"
                     className="text-gray-400 hover:text-white text-sm"
                  >
                     Forgot password?
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
}