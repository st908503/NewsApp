
import { useEffect, useState } from 'react';
import './NewsList.css'
const Bookmark = ({ bookmark, setBookmark }) => {
    // const [data,setData] = useState([])

    const handleRemove = (url) => {
        const arr = bookmark.filter((item) => item.url !== url);
       setBookmark(arr)

    }


    // useEffect(()=>{
    //     localStorage.setData()
    // })


    return (
        <div className='container'>
            {bookmark.map((item, id) => {
                return (
                    <div className='news-app' key={id}>
                        <div className="news-item">
                            <img className='news-img' src={item.urlToImage} alt="" />
                            <h3><a href={item.url} >{item.title}</a></h3>
                            <p>{item.description}</p>
                            <button className='rem_book_btn' onClick={() => handleRemove(item.url)}>Remove from Bookmark</button>
                        </div>
                    </div>

                )
            })
            }
        </div>
    )
}

export default Bookmark