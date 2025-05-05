import React, { use } from 'react';
import AuthContext from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext)

    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    //if user thake return children
    if(user && user.email){
        return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    
    // user na thakle navigate login page
}


export default PrivateRoute