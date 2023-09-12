import PropTypes from 'prop-types'
import { BsBookmarks } from 'react-icons/bs';
const Blog = ({blog, handleAddToBookmark, handleAddToMarkAsRead}) => {
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='my-20'>
            <img className='w-full rounded-lg mb-8' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between mb-8'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className=''>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'><BsBookmarks></BsBookmarks></button>
                </div>
            </div>
            <h2 className="text-4xl mb-5">{title}</h2>
            <p className='mb-5
            '>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='text-gray-500 font-medium' href=''> #{hash}</a></span>)
                }
            </p>
            <a href='#' className='underline text-purple-800' onClick={() => handleAddToMarkAsRead(id, reading_time)} >Mark as read</a>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleAddToMarkAsRead: PropTypes.func
}
export default Blog;