import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../provider/AuthContext';

const Login = () => {
    const [error,setError] = useState("")
    const {userLogin} = use(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogIn = e=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email,password)
        userLogin(email, password)
        .then((res)=>{
            const user = res.user
            console.log(user)
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch(e=>{
            setError(e.code,e.message)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 py-5 shadow-2xl">
                <h1 className="text-2xl font-semibold text-center">Login your account</h1>
                <form onSubmit={handleLogIn} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" required placeholder="Email" name='email'/>
                        <label className="label">Password</label>
                        {/* password */}
                        <input type="password" className="input" required placeholder="Password" name='password'/>
                        {
                            error && <p className='text-red-400 text-xs font-bold'>{error}</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center mt-3'>Dont’t Have An Account ? <Link to="/auth/register" className='text-blue-600 underline'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;