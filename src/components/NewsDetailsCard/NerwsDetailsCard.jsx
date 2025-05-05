import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NerwsDetailsCard = ({news}) => {
    const {image_url,title, details, category_id} = news
    return (
        <div className='p-5 rounded-2xl shadow'>
            <img src={image_url} alt={title} className='w-full h-[350px] object-cover'/>
            <h2 className='text-2xl font-semibold my-5'>{title}</h2>
            <p className='text-accent'>{details}</p>
            <Link to={`/category/${category_id}`} className='btn btn-secondary'><FaArrowLeft size={24}/> All news in this category</Link>
        </div>
    );
};

export default NerwsDetailsCard;