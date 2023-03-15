import NewsList from './components/NewsList'
import Header from './components/Header';
import Bookmark from './components/Bookmark';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  const [show, setShow] = useState(true);
  const [bookmark, setBookmark] = useState([]);
  






  const handleClick = (item) => {
    let isPresent = false;
    bookmark.forEach((news) => {
      if (item.url === news.url)
        isPresent = true;
    })
    if (isPresent) {
      
    }
    else{
    setBookmark([...bookmark, item])
    }

  }


  return (
    <BrowserRouter >
      <Header className="count" size={bookmark.length} setShow={setShow} />
      <Routes>
        {show ?

          <Route path='/' element={<NewsList handleClick={handleClick} />} /> :
          <Route path='/bookmark' element={<Bookmark bookmark={bookmark} setBookmark={setBookmark} />} />
        }
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
