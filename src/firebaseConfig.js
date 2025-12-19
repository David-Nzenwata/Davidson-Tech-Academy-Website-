
import React, { createContext, useContext, useState, useEffect } from 'react';
import {getFirestore}from '@firebasefirestore'
import { initializeApp } from 'firebase/app';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut as firebaseSignOut,
   onAuthStateChanged,
   sendPasswordResetEmail,
   signInWithCustomToken,
   signInAnonymously,
} from 'firebase/auth';


const firebaseConfig = {
   apiKey: 'AIzaSyCCfUY-PRp08ga8dGFHdY7kGo7gzzvYeF8',
   authDomain: 'davidson-tech-academy-30ddb.firebaseapp.com',
   projectId: 'davidson-tech-academy-30ddb',
   storageBucket: 'davidson-tech-academy-30ddb.firebasestorage.app',
   messagingSenderId: '226243146790',
   appId: '1:226243146790:web:e77087b9f3c51d7fe862e7',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


// Define the shape of the Auth Context
const AuthContext = createContext();

// Hook to use the authentication context
export const useAuth = () => {
   return useContext(AuthContext);
};

// ===============================================
// === FIREBASE INITIALIZATION AND CONTEXT PROVIDER
// ===============================================

export const AuthProvider = ({ children }) => {
   const [currentUser, setCurrentUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [app, setApp] = useState(null);
   const [auth, setAuth] = useState(null);

   // Get global variables

   const firebaseConfig =
      typeof __firebase_config !== 'undefined'
         ? JSON.parse(__firebase_config)
         : null;
   const initialAuthToken =
      typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

   useEffect(() => {
      if (!firebaseConfig) {                                                                                                                
         console.error('Firebase configuration is missing.');
         setLoading(false);
         return;
      }

      // Initialize Firebase App and Auth service
      const firebaseApp = initializeApp(firebaseConfig);
      const authService = getAuth(firebaseApp);
      setApp(firebaseApp);
      setAuth(authService);

      // 1. Initial Authentication Logic
      const authenticate = async () => {
         try {
            if (initialAuthToken) {
               await signInWithCustomToken(authService, initialAuthToken);
            } else {
               await signInAnonymously(authService);
            }
         } catch (error) {
            console.error('Firebase initial authentication failed:', error);
         }
      };

      // 2. Set up Auth State Listener
      // This listener automatically manages currentUser state after initial auth or user actions (login/logout)
      const unsubscribe = onAuthStateChanged(authService, (user) => {
         setCurrentUser(user);
         setLoading(false);
      });

      authenticate();

      // Cleanup subscription on unmount
      return unsubscribe;
   }, []);

   // 3. Authentication Action Functions
   const signUp = (email, password) => {
      if (!auth) throw new Error('Firebase Auth not initialized.');
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      if (!auth) throw new Error('Firebase Auth not initialized.');
      return signInWithEmailAndPassword(auth, email, password);
   };

   const signOut = () => {
      if (!auth) throw new Error('Firebase Auth not initialized.');
      return firebaseSignOut(auth);
   };

   const resetPassword = (email) => { 
      if (!auth) throw new Error('Firebase Auth not initialized.');
      return sendPasswordResetEmail(auth, email);
   };

   const value = {
      currentUser,
      signIn,
      signUp,
      signOut,
      resetPassword,
      loading,
      app,
   };

   return (
      <AuthContext.Provider value={value}>
         {!loading && children}
      </AuthContext.Provider>
   );
};
