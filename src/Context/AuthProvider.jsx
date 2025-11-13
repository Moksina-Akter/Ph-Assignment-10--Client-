// import { createContext, useContext, useState, useEffect } from "react";
// import { auth } from "../firebase/firebase.config";
// import {
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { toast } from "react-toastify";

// const AuthContext = createContext();
// const googleProvider = new GoogleAuthProvider();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(undefined);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const res = await signInWithEmailAndPassword(auth, email, password);
//       setUser(res.user);
//       toast.success("Logged in!");
//       return res.user;
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   const register = async (name, email, password, photoURL) => {
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       await updateProfile(res.user, { displayName: name, photoURL });
//       setUser(res.user);
//       toast.success("Registered!");
//       return res.user;
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const res = await signInWithPopup(auth, googleProvider);
//       setUser(res.user);
//       toast.success("Logged in with Google!");
//       return res.user;
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//       toast.success("Logged out!");
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, loading, login, register, loginWithGoogle, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
//----------------------------------------------
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register function
  const register = async (name, email, password, photo) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name, photoURL: photo });
      setUser({ ...user }); // state update
      toast.success("Registered successfully!");
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Google login
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.message);
      toast.error("Logged out successfully!");
    }
  };

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = { user, loading, register, login, loginWithGoogle, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => useContext(AuthContext);
