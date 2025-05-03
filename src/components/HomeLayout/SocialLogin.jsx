import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Login with</h1>
            <div className='space-y-3'>
                <button className='btn btn-outline btn-secondaey w-full'><FaGithub size={24}/> Login with Github</button>
                <button className='btn btn-outline btn-primary w-full'><FaGoogle size={24}/> Login with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;