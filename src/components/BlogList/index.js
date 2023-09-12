// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem/index'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogsList = await response.json()
    const updatedList = blogsList.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
    }))
    this.setState({blogsList: updatedList, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#8a69b5" height={50} width={50} />
      </div>
    ) : (
      <ul className="blog-list-container">
        {blogsList.map(blogItem => (
          <BlogItem blogItem={blogItem} key={blogItem.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
