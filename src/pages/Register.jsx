import React, { use } from 'react';
import { Link } from 'react-router';
import AuthContext from '../provider/AuthContext';

const Register = () => {
    const {userRegister, setUser, updateUser} = use(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value 
        const photo = e.target.photo.value 
        const email = e.target.email.value 
        const password = e.target.password.value 
        
        // console.log({name, email, photo, password})
        userRegister(email, password)
        .then(res=>{
            const user = res.user
            updateUser({
                displayName:name,
                photoURL : photo
            })
            .then(()=>{
                setUser({...user,displayName:name,photoURL : photo})
            })
            .catch(e=>{
                console.log(e.message)
                setUser(user)
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
        
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 py-5 shadow-2xl">
                <h1 className="text-2xl font-semibold text-center">Register your account</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label">Your Name</label>
                        <input type="text" className="input" placeholder="Enter your name" name='name'/>
                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Enter your Photo URL" name='photo'/>
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Enter your Email address" name='email'/>
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Enter your Password" name='password'/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center mt-3'>Already Have An Account ? <Link to="/auth/login" className='text-blue-600 underline'>Log In</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;