import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            <p>Cartegories News- {id}</p>
            <p>Categories - {categoryNews.length}</p>
        </div>
    );
};

export default CategoryNews;