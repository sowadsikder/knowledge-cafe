import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
       <div className='w-1/3 mt-20'>
            <div className='bg-slate-100 border-2 border-[#6047EC] rounded-xl mb-11'>
                <h3 className='text-2xl font-bold p-4 m-4 text-[#6047EC]'>Spent time on read: {readingTime} </h3>
            </div>
            <div className="bg-gray-100 rounded-xl py-7 ">
                <h2 className="text-2xl font-bold mx-7 ">Bookmarks Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
       </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;