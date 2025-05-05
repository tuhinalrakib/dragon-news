import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png"
import AuthContext from '../../provider/AuthContext';
// import AuthContext from '../../provider/AuthContext';

const Navbar = () => {
    const {user, userLogout} = use(AuthContext)

    const handleLogOut = ()=>{
        userLogout()
        .then(()=>{
            alert("You logged Out Successfully")
        })
        .catch(e=>{
            alert(e.message)
        })
    }
    
    return (
        <div className='flex justify-around items-center'>
            <div className=''></div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-3">
                <img className='rounded-full' src={`${user ? user.photoURL : userIcon}`} width={50} height={50} alt="" />
                {
                    user ? (<button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>) 
                    :
                    (<Link to="/auth/login" className='btn btn-primary'>login</Link>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;