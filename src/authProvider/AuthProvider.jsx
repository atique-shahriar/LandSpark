import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInGithub = (githubProvider) => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const updateCreateUser = (userName, photoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
    });
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    user,
    createUser,
    updateCreateUser,
    signInUser,
    signInGoogle,
    signInGithub,
    signOutUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
