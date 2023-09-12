// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
  return (
    <li className="blog-item-list">
      <Link to={`/blogs/${id}`} className="link-ele">
        <img src={imageUrl} className="blog-item-image" alt={title} />
        <div className="blog-item-description">
          <p className="blog-item-topic-name">{topic}</p>
          <h1 className="blog-item-title">{title}</h1>
          <div className="blog-item-profile-card">
            <img src={avatarUrl} className="blog-item-avatar" alt="avatar" />
            <p className="blog-item-author">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
