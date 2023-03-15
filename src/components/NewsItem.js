import React from 'react'

const NewsItem = ({article,handleClick}) => {
    const {urlToImage,url,description,title} = article;
    return (
        <div>
            <div className='news-app'>
                <div className="news-item">
                    <img className='news-img' src={urlToImage} alt="" />
                    <h3><a href={url} >{title}</a></h3>
                    <p>{description}</p>
                    <button className='book_btn' onClick={()=>handleClick(article)}>Bookmark</button>
                </div>
            </div>
        </div>
    )
}

export default NewsItem