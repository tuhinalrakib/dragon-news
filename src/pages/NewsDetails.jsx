import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NerwsDetailsCard from '../components/NewsDetailsCard/NerwsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const [news,setNews] = useState({})
    const data = useLoaderData()
    const {id} = useParams()
    // console.log(news)

    useEffect(()=>{
        const singleNews = data.find(news=>news.id == id)
        setNews(singleNews)
    },[data, id])
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold'>News Details</h2>
                    <NerwsDetailsCard news={news}></NerwsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;