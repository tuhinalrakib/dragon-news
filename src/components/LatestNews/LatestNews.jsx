import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex justify-center p-3 gap-5 bg-base-200'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad explicabo voluptate qui maiores praesentium quo voluptatibus distinctio molestias ullam nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad explicabo voluptate qui maiores praesentium quo voluptatibus distinctio molestias ullam nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad explicabo voluptate qui maiores praesentium quo voluptatibus distinctio molestias ullam nulla.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;