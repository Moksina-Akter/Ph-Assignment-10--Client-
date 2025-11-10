import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { toast } from "react-toastify";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("Logged in successfully!");
        return res.user;
      })
      .catch((err) => toast.error(err.message));

  const loginWithGoogle = () =>
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success("Logged in with Google!");
        return res.user;
      })
      .catch((err) => toast.error(err.message));

  const register = (name, email, password, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        return updateProfile(res.user, { displayName: name, photoURL }).then(
          () => {
            toast.success(`Welcome, ${name}`);
            return res.user;
          }
        );
      })
      .catch((err) => toast.error(err.message));

  const logout = () =>
    signOut(auth)
      .then(() => toast.success("Logged out successfully!"))
      .catch((err) => toast.error(err.message));

  return (
    <AuthContext.Provider
      value={{ user, loading, login, loginWithGoogle, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
