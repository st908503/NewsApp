import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { BookmarkContext } from '../context/Context'
// import {BsFillBookmarkFill} from 'react-icons/bs'
import './NewsList.css'
import NewsItem from './NewsItem'


const NewsList = ({ handleClick }) => {
    const [articles, setArticles] = useState([])
    

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=science&from=2023-02-14&sortBy=publishedAt&apiKey=c6e7f1afe6e04cf0b8f1aa6ebf2201ad')
            setArticles(response.data.articles)
        }
        getArticles();
    }, [])

    return (
        <div className='container'>
            {
                articles.map((article,id) => {
                    return (
                        <NewsItem
                            key={id}
                            article={article}
                            handleClick={handleClick}
                        />
                    )
                })
            }
        </div>
    )
}

export default NewsList