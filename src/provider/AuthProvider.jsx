import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const userRegister = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogout = ()=>{
        return signOut(auth)
    }

    const userLogin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentuser=>{
            setUser(currentuser)
            setLoading(false)
            // console.log(currentuser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authData = {
        user,
        userRegister,
        userLogout,
        userLogin,
        setUser,
        loading,
        updateUser
    }


    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;