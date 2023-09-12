import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
 const handleAddToMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  // remove the bookmarks
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id );
  setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto gap-10'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleAddToMarkAsRead={handleAddToMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App;
