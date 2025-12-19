// /* global __firebase_config, __initial_auth_token */
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import {
//    getAuth,
//    createUserWithEmailAndPassword,
//    signInWithEmailAndPassword,
//    signOut as firebaseSignOut,
//    onAuthStateChanged,
//    sendPasswordResetEmail,
//    signInWithCustomToken,
//    signInAnonymously,
// } from 'firebase/auth';

// // Define the shape of the Auth Context
// const AuthContext = createContext();

// // Hook to use the authentication context
// export const useAuth = () => {
//    return useContext(AuthContext);
// };

// // ===============================================
// // === FIREBASE INITIALIZATION AND CONTEXT PROVIDER
// // ===============================================

// export const AuthProvider = ({ children }) => {
//    const [currentUser, setCurrentUser] = useState(null);
//    const [loading, setLoading] = useState(true);
//    const [app, setApp] = useState(null);
//    const [auth, setAuth] = useState(null);

//    // Get global variables
//    const firebaseConfig =
//       typeof __firebase_config !== 'undefined'
//          ? JSON.parse(__firebase_config)
//          : null;
//    const initialAuthToken =
//       typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

//    useEffect(() => {
//       if (!firebaseConfig) {
//          console.error('Firebase configuration is missing.');
//          setLoading(false);
//          return;
//       }

//       // Initialize Firebase App and Auth service
//       const firebaseApp = initializeApp(firebaseConfig);
//       const authService = getAuth(firebaseApp);
//       setApp(firebaseApp);
//       setAuth(authService);

//       // 1. Initial Authentication Logic
//       const authenticate = async () => {
//          try {
//             if (initialAuthToken) {
//                await signInWithCustomToken(authService, initialAuthToken);
//             } else {
//                await signInAnonymously(authService);
//             }
//          } catch (error) {
//             console.error('Firebase initial authentication failed:', error);
//          }
//       };

//       // 2. Set up Auth State Listener
//       // This listener automatically manages currentUser state after initial auth or user actions (login/logout)
//       const unsubscribe = onAuthStateChanged(authService, (user) => {
//          setCurrentUser(user);
//          setLoading(false);
//       });

//       authenticate();

//       // Cleanup subscription on unmount
//       return unsubscribe;
//    }, []);

//    // 3. Authentication Action Functions
//    const signUp = (email, password) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return createUserWithEmailAndPassword(auth, email, password);
//    };

//    const signIn = (email, password) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return signInWithEmailAndPassword(auth, email, password);
//    };

//    const signOut = () => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return firebaseSignOut(auth);
//    };

//    const resetPassword = (email) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return sendPasswordResetEmail(auth, email);
//    };

//    const value = {
//       currentUser,
//       signIn,
//       signUp,
//       signOut,
//       resetPassword,
//       loading,
//       app,
//    };

//    return (
//       <AuthContext.Provider value={value}>
//          {!loading && children}
//       </AuthContext.Provider>
//    );
// };

/* global __firebase_config, __initial_auth_token */
/* global __firebase_config, __initial_auth_token */
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import {
//    getAuth,
//    createUserWithEmailAndPassword,
//    signInWithEmailAndPassword,
//    signOut as firebaseSignOut,
//    onAuthStateChanged,
//    sendPasswordResetEmail,
//    signInWithCustomToken,
//    signInAnonymously,
//    // --- ADDED IMPORTS FOR GOOGLE SIGN-IN ---
//    GoogleAuthProvider,
//    signInWithPopup,
// } from 'firebase/auth';

// // Define the shape of the Auth Context
// const AuthContext = createContext();

// // Hook to use the authentication context
// export const useAuth = () => {
//    return useContext(AuthContext);
// };

// // ===============================================
// // === FIREBASE INITIALIZATION AND CONTEXT PROVIDER
// // ===============================================

// export const AuthProvider = ({ children }) => {
//    const [currentUser, setCurrentUser] = useState(null);
//    const [loading, setLoading] = useState(true);
//    const [app, setApp] = useState(null);
//    const [auth, setAuth] = useState(null);

//    // Get global variables
//    const firebaseConfig =
//       typeof __firebase_config !== 'undefined'
//          ? JSON.parse(__firebase_config)
//          : null;
//    const initialAuthToken =
//       typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

//    useEffect(() => {
//       if (!firebaseConfig) {
//          console.error('Firebase configuration is missing.');
//          setLoading(false);
//          return;
//       }

//       // 1. Initialize Firebase App and Auth Service
//       const appService = initializeApp(firebaseConfig);
//       const authService = getAuth(appService);
//       setApp(appService);
//       setAuth(authService);

//       // Function to handle initial sign-in via custom token or anonymously
//       const authenticate = async () => {
//          try {
//             if (initialAuthToken) {
//                await signInWithCustomToken(authService, initialAuthToken);
//             } else {
//                await signInAnonymously(authService);
//             }
//          } catch (error) {
//             console.error('Firebase initial authentication failed:', error);
//          }
//       };

//       // 2. Set up Auth State Listener
//       const unsubscribe = onAuthStateChanged(authService, (user) => {
//          setCurrentUser(user);
//          setLoading(false);
//       });

//       authenticate();

//       // Cleanup subscription on unmount
//       return unsubscribe;
//    }, []);

//    // 3. Authentication Action Functions
//    const signUp = (email, password) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return createUserWithEmailAndPassword(auth, email, password);
//    };

//    const signIn = (email, password) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return signInWithEmailAndPassword(auth, email, password);
//    };

//    // --- NEW: Google Sign-in function ---
//    const signInWithGoogle = () => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       const provider = new GoogleAuthProvider();
//       // This uses a pop-up window for the Google OAuth flow
//       return signInWithPopup(auth, provider);
//    };

//    const signOut = () => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return firebaseSignOut(auth);
//    };

//    const resetPassword = (email) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return sendPasswordResetEmail(auth, email);
//    };

//    const value = {
//       currentUser,
//       signIn,
//       signUp,
//       signOut,
//       resetPassword,
//       signInWithGoogle, // <<< CRITICAL: Export the new function
//       loading,
//       app,
//    };

//    return (
//       <AuthContext.Provider value={value}>
//          {!loading && children}
//       </AuthContext.Provider>
//    );
// };

/* global __firebase_config, __initial_auth_token */
/* global __firebase_config */
/* global __firebase_config, __initial_auth_token */

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import {
//    getAuth,
//    createUserWithEmailAndPassword,
//    signInWithEmailAndPassword,
//    signOut as firebaseSignOut,
//    onAuthStateChanged,
//    sendPasswordResetEmail,
//    signInWithCustomToken, // Required for Canvas environment
//    signInAnonymously, // Required as fallback
//    // Google Auth
//    GoogleAuthProvider,
//    signInWithPopup,
// } from 'firebase/auth';

// // Define the shape of the Auth Context
// const AuthContext = createContext();

// // Hook to use the authentication context
// export const useAuth = () => {
//    // Throw an error if used outside AuthProvider
//    const context = useContext(AuthContext);
//    if (context === undefined) {
//       throw new Error('useAuth must be used within an AuthProvider');
//    }
//    return context;
// };

// // ===============================================
// // === FIREBASE INITIALIZATION AND CONTEXT PROVIDER
// // ===============================================

// export const AuthProvider = ({ children }) => {
//    const [currentUser, setCurrentUser] = useState(null);
//    // Set loading to true initially until auth state is determined
//    const [loading, setLoading] = useState(true);
//    const [app, setApp] = useState(null);
//    const [auth, setAuth] = useState(null);

//    // Get global variables
//    const firebaseConfig =
//       typeof __firebase_config !== 'undefined'
//          ? JSON.parse(__firebase_config)
//          : null;
//    const initialAuthToken =
//       typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

//    useEffect(() => {
//       if (!firebaseConfig) {
//          console.error('Firebase configuration is missing.');
//          setLoading(false);
//          return;
//       }

//       // 1. Initialize Firebase
//       const appInstance = initializeApp(firebaseConfig);
//       const authService = getAuth(appInstance);
//       setApp(appInstance);
//       setAuth(authService);

//       const authenticate = async () => {
//          try {
//             // Use custom token if available, otherwise sign in anonymously
//             if (initialAuthToken) {
//                await signInWithCustomToken(authService, initialAuthToken);
//             } else {
//                await signInAnonymously(authService);
//             }
//          } catch (error) {
//             console.error('Firebase initial authentication failed:', error);
//          }
//       };

//       // 2. Set up Auth State Listener
//       // This listener automatically manages currentUser state after initial auth or user actions (login/logout)
//       // The listener is set up *before* the initial sign-in to catch the resulting state change.
//       const unsubscribe = onAuthStateChanged(authService, (user) => {
//          setCurrentUser(user);
//          // Set loading to false once we know the initial state
//          setLoading(false);
//       });

//       // Perform initial authentication
//       authenticate();

//       // Cleanup subscription on unmount
//       return unsubscribe;
//    }, [initialAuthToken, firebaseConfig]); // Re-run if environment variables change (unlikely, but good practice)

//    // 3. Authentication Action Functions
//    const signUp = (email, password) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return createUserWithEmailAndPassword(auth, email, password);
//    };

//    const signIn = (email, password) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return signInWithEmailAndPassword(auth, email, password);
//    };

//    const signInWithGoogle = () => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       const provider = new GoogleAuthProvider();
//       // Use a pop-up to handle the Google flow
//       return signInWithPopup(auth, provider);
//    };

//    const signOut = () => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return firebaseSignOut(auth);
//    };

//    const resetPassword = (email) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return sendPasswordResetEmail(auth, email);
//    };

//    const value = {
//       currentUser,
//       signIn,
//       signUp,
//       signOut,
//       resetPassword,
//       signInWithGoogle, // Export the Google Sign-in function
//       loading,
//       app, // Export the Firebase App instance for other services (like Firestore)
//       auth, // Export the Auth instance
//    };

//    return (
//       <AuthContext.Provider value={value}>
//          {/* Only render children once loading is complete */}
//          {!loading && children}
//       </AuthContext.Provider>
//    );
// };

// /* global __firebase_config, __initial_auth_token */
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import {
//    getAuth,
//    createUserWithEmailAndPassword,
//    signInWithEmailAndPassword,
//    signOut as firebaseSignOut,
//    onAuthStateChanged,
//    sendPasswordResetEmail,
//    signInWithCustomToken,
//    signInAnonymously,
//    GoogleAuthProvider,
//    signInWithPopup,
// } from 'firebase/auth';

// const AuthContext = createContext();

// export const useAuth = () => {
//    return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//    const [currentUser, setCurrentUser] = useState(null);
//    const [loading, setLoading] = useState(true);
//    const [app, setApp] = useState(null);
//    const [auth, setAuth] = useState(null);

//    const firebaseConfig =
//       typeof __firebase_config !== 'undefined'
//          ? JSON.parse(__firebase_config)
//          : null;
//    const initialAuthToken =
//       typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

//    useEffect(() => {
//       if (!firebaseConfig) {
//          console.error('Firebase configuration is missing.');
//          setLoading(false);
//          return;
//       }

//       const firebaseApp = initializeApp(firebaseConfig);
//       const authService = getAuth(firebaseApp);

//       setApp(firebaseApp);
//       setAuth(authService);

//       const authenticate = async () => {
//          try {
//             if (initialAuthToken) {
//                await signInWithCustomToken(authService, initialAuthToken);
//             } else {
//                await signInAnonymously(authService);
//             }
//          } catch (error) {
//             console.error('Firebase initial authentication failed:', error);
//          }
//       };

//       const unsubscribe = onAuthStateChanged(authService, (user) => {
//          setCurrentUser(user);
//          setLoading(false);
//       });

//       authenticate();

//       return unsubscribe;
//    }, [firebaseConfig, initialAuthToken]);

//    const signUp = (email, password) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return createUserWithEmailAndPassword(auth, email, password);
//    };

//    const signIn = (email, password) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return signInWithEmailAndPassword(auth, email, password);
//    };

//    const signInWithGoogle = () => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       const provider = new GoogleAuthProvider();
//       return signInWithPopup(auth, provider);
//    };

//    const signOut = () => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return firebaseSignOut(auth);
//    };

//    const resetPassword = (email) => {
//       if (!auth) throw new Error('Firebase Auth not initialized.');
//       return sendPasswordResetEmail(auth, email);
//    };

//    const value = {
//       currentUser,
//       signIn,
//       signUp,
//       signOut,
//       resetPassword,
//       signInWithGoogle,
//       loading, // Export loading state
//       app,
//    };

//    return (
//       <AuthContext.Provider value={value}>
//          {/* This ensures children only render when Firebase is ready */}
//          {!loading && children}
//       </AuthContext.Provider>
//    );
// };

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js'; // Supabase Client
// import { getFirestore } from 'firebase/firestore'; // Keep Firestore for Canvas environment checks
// import { initializeApp } from 'firebase/app'; // <--- FIX: Added initializeApp import

// // ===============================================
// // === SUPABASE INITIALIZATION AND CLIENT SETUP
// // ===============================================

// // NOTE: In a real environment, these would be loaded from environment variables (e.g., .env)
// // For demonstration, we use placeholders. Replace these with your actual Supabase URL and Anon Key.
// // IMPORTANT: You MUST replace these values with the keys from your Supabase project dashboard.
// const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
// const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // This key is safe to expose in client-side applications

// // Check for global Firebase config to ensure Canvas environment is ready for initialization
// const isCanvasReady =
//    typeof __firebase_config !== 'undefined' && __firebase_config;

// // 1. Initialize Supabase Client
// const supabase = isCanvasReady
//    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
//    : null;

// // ===============================================
// // === CONTEXT DEFINITION
// // ===============================================

// const AuthContext = createContext();

// // Hook to use the authentication context
// export const useAuth = () => {
//    const context = useContext(AuthContext);
//    if (context === undefined) {
//       throw new Error('useAuth must be used within an AuthProvider');
//    }
//    return context;
// };

// export const AuthProvider = ({ children }) => {
//    const [currentUser, setCurrentUser] = useState(null);
//    const [loading, setLoading] = useState(true);
//    const [db, setDb] = useState(null); // Firestore/Supabase client placeholder

//    useEffect(() => {
//       // Supabase Module Errors in Node/Browser environments:
//       // In a real project, the `Module not found` errors for `@supabase/auth-js`
//       // typically indicate a misconfigured bundler or an issue with the `@supabase/supabase-js` installation.
//       // In this environment, we rely on the bundled library, so we will focus on the code logic error.

//       if (!supabase) {
//          console.error(
//             'Supabase client failed to initialize. Check SUPABASE_URL and SUPABASE_ANON_KEY placeholders.'
//          );
//          setLoading(false);
//          return;
//       }

//       // We initialize Firebase/Firestore here solely because the Canvas environment
//       // relies on these globals being available and sometimes requires the app object for internal checks.
//       if (isCanvasReady) {
//          try {
//             // FIX: The global __firebase_config is a string and must be parsed before initializing.
//             const firebaseConfig = JSON.parse(__firebase_config);
//             const firebaseApp = initializeApp(firebaseConfig); // Fixes 'initializeApp' is not defined
//             setDb(getFirestore(firebaseApp));
//          } catch (e) {
//             console.error(
//                'Error initializing Firebase/Firestore client (keeping it for Canvas compatibility):',
//                e
//             );
//          }
//       }

//       // ===============================================
//       // 2. SUPABASE AUTH LISTENER
//       // ===============================================
//       // The onAuthStateChange returns a subscription object, which we de-structure to get the listener.
//       const { data: authListener } = supabase.auth.onAuthStateChange(
//          (event, session) => {
//             if (session) {
//                // Map Supabase session user to our expected currentUser structure
//                setCurrentUser({
//                   uid: session.user.id,
//                   email: session.user.email,
//                   // Add other necessary properties
//                });
//             } else {
//                setCurrentUser(null);
//             }
//             // Set loading to false only after initial auth check
//             setLoading(false);
//          }
//       );

//       // Initial check to ensure we have the session before setting loading=false
//       supabase.auth.getSession().then(({ data: { session } }) => {
//          if (session && !currentUser) {
//             // Check only if currentUser is not already set by the listener
//             setCurrentUser({
//                uid: session.user.id,
//                email: session.user.email,
//             });
//          }
//          // setLoading(false); // The listener sets loading=false on the first event, avoiding race condition.
//       });

//       // Cleanup subscription on unmount
//       return () => {
//          authListener.subscription.unsubscribe();
//       };
//    }, []);

//    // ===============================================
//    // 3. AUTHENTICATION ACTION FUNCTIONS (Supabase)
//    // ===============================================

//    const signUp = async (email, password) => {
//       // Use the email/password signup method
//       const { data, error } = await supabase.auth.signUp({ email, password });
//       if (error) throw error;
//       return data;
//    };

//    const signIn = async (email, password) => {
//       // Use the email/password login method
//       const { data, error } = await supabase.auth.signInWithPassword({
//          email,
//          password,
//       });
//       if (error) throw error;
//       return data;
//    };

//    const signInWithGoogle = async () => {
//       // Use the Google social login method
//       const { data, error } = await supabase.auth.signInWithOAuth({
//          provider: 'google',
//          // NOTE: The redirect URL must be configured in your Supabase project dashboard
//          // and must match the URL where this app is hosted (e.g., localhost:3000 or the Canvas URL).
//       });
//       if (error) throw error;
//       return data;
//    };

//    const signOut = async () => {
//       const { error } = await supabase.auth.signOut();
//       if (error) throw error;
//    };

//    const resetPassword = async (email) => {
//       // Supabase sends a password reset email
//       const { error } = await supabase.auth.resetPasswordForEmail(email);
//       if (error) throw error;
//    };

//    const value = {
//       currentUser,
//       signIn,
//       signUp,
//       signOut,
//       resetPassword,
//       signInWithGoogle,
//       loading,
//       db, // Pass the database client (Firestore or Supabase)
//       supabase, // Expose the Supabase client for data operations
//    };

//    return (
//       <AuthContext.Provider value={value}>
//          {/* Only render children once loading is complete */}
//          {!loading && children}
//       </AuthContext.Provider>
//    );
// };

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// // ========== PUT YOUR SUPABASE CREDENTIALS HERE ==========
// const SUPABASE_URL = 'https://yjnmhtjplhougjoygdcz.supabase.co'; // From Supabase dashboard
// const SUPABASE_ANON_KEY =
//    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqbm1odGpwbGhvdWdqb3lnZGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTQyMDksImV4cCI6MjA4MDg3MDIwOX0.4YX-aW15wpMXlxqsM4w9_sesgyQkBCIN_TqSriYotSc'; // From Supabase dashboard
// // ========================================================

// // Create Supabase client
// const signInWithGoogle = async () => {
//    const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//          redirectTo: `${window.location.origin}/auth/callback`, // Important!
//          queryParams: {
//             access_type: 'offline',
//             prompt: 'consent',
//          },
//       },
//    });

//    if (error) throw error;
//    return data;
// };

// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// const AuthContext = createContext();

// export const useAuth = () => {
//    const context = useContext(AuthContext);
//    if (!context) {
//       throw new Error('useAuth must be used within AuthProvider');
//    }
//    return context;
// };

// export const AuthProvider = ({ children }) => {
//    const [user, setUser] = useState(null);
//    const [loading, setLoading] = useState(true);

//    useEffect(() => {
//       // Check active sessions and sets the user
//       supabase.auth.getSession().then(({ data: { session } }) => {
//          setUser(session?.user ?? null);
//          setLoading(false);
//       });

//       // Listen for changes on auth state (sign in, sign out, etc.)
//       const {
//          data: { subscription },
//       } = supabase.auth.onAuthStateChange((_event, session) => {
//          setUser(session?.user ?? null);
//       });

//       return () => subscription.unsubscribe();
//    }, []);

//    // Sign up with email and password
//    const signUp = async (email, password) => {
//       const { data, error } = await supabase.auth.signUp({
//          email,
//          password,
//       });
//       if (error) throw error;
//       return data;
//    };

//    // Sign in with email and password
//    const signIn = async (email, password) => {
//       const { data, error } = await supabase.auth.signInWithPassword({
//          email,
//          password,
//       });
//       if (error) throw error;
//       return data;
//    };

//    // Sign in with Google
//    const signInWithGoogle = async () => {
//       const { data, error } = await supabase.auth.signInWithOAuth({
//          provider: 'google',
//          options: {
//             redirectTo: `${window.location.origin}/dashboard`, // Change this to your redirect URL
//          },
//       });
//       if (error) throw error;
//       return data;
//    };

//    // Reset password
//    // In your resetPassword function, change this:
//    const resetPassword = async (email) => {
//       const { error } = await supabase.auth.resetPasswordForEmail(email, {
//          redirectTo: `${window.location.origin}/update-password`,
//          // ADD THIS LINE:
//          redirectTo: 'http://localhost:3000/update-password', // Use YOUR actual URL
//       });
//       if (error) throw error;
//       return { success: true };
//    };

//    const value = {
//       user,
//       signUp,
//       signIn,
//       signInWithGoogle,
//       resetPassword,
//       signOut,
//       loading,
//       supabase,
//    };

//    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
// ./src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase'; // Import from your lib file

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthContext: Setting up auth listeners');
    
    // Check if supabase is defined
    if (!supabase) {
      console.error('Supabase client is undefined!');
      setLoading(false);
      return;
    }

    // Check existing session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.error('Session error:', error);
      }
      console.log('Initial session:', session?.user?.email || 'No user');
      setUser(session?.user || null);
      setLoading(false);
    }).catch(error => {
      console.error('Failed to get session:', error);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth event:', event, 'User:', session?.user?.email);
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  // Sign Up with Email
  const signUp = async (email, password) => {
    if (!supabase?.auth) throw new Error('Supabase auth not available');
    return await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`
      }
    });
  };

  // Sign In with Email
  const signIn = async (email, password) => {
    if (!supabase?.auth) throw new Error('Supabase auth not available');
    return await supabase.auth.signInWithPassword({ email, password });
  };

  // Sign In with Google
  const signInWithGoogle = async () => {
    if (!supabase?.auth) throw new Error('Supabase auth not available');
    return await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });
  };

  // Reset Password
  const resetPassword = async (email) => {
    if (!supabase?.auth) throw new Error('Supabase auth not available');
    return await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`
    });
  };

  // Sign Out
  const signOut = async () => {
    if (!supabase?.auth) throw new Error('Supabase auth not available');
    return await supabase.auth.signOut();
  };

  // Update Profile
  const updateProfile = async (data) => {
    if (!supabase?.auth) throw new Error('Supabase auth not available');
    return await supabase.auth.updateUser(data);
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    resetPassword,
    signOut,
    updateProfile,
    supabase // Include supabase client if needed elsewhere
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );

  
}

