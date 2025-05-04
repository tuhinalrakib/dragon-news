import React from 'react';
import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us on</h2>
            <div className="join join-vertical w-full">
                <button className="btn py-5 bg-base-100 justify-start join-item"><CiFacebook size={24}/> Facebook</button>
                <button className="btn py-5 bg-base-100 justify-start join-item"><CiTwitter size={24}/> Twitter</button>
                <button className="btn py-5 bg-base-100 justify-start join-item"><CiInstagram size={24}/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;