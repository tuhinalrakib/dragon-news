import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([])
    const {id} = useParams()
    const data = useLoaderData()
    
    useEffect(()=>{
        if(id == "0"){
            setCategoryNews(data)
            return
        }else if(id == "1"){
            const todayNews = data.filter(news=>news.others.is_today_pick === true)
            setCategoryNews(todayNews)
            return
        }else{
            const filteredNews = data.filter(news=>news.category_id == id)
            setCategoryNews(filteredNews)
            return 
        }
    },[data, id])


    return (
        <div>
            <h2 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;