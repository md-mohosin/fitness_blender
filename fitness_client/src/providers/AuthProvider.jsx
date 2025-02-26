import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
          return setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const authInfo = {
        loading,
        user,
        googleLogin,
        signUp,
        login,
        logOut,
        profileUpdate
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;