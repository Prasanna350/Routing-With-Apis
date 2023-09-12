// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedDetails = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemDetails: updatedDetails, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogItemDetails
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#8a69b5" height={50} width={50} />
      </div>
    ) : (
      <div className="blog-details-card">
        <h1 className="blog-details-head">{title}</h1>
        <div className="blog-details-profile-card">
          <img src={avatarUrl} className="blog-details-profile" alt="avatar" />
          <p className="blog-details-author">{author}</p>
        </div>
        <img src={imageUrl} className="blog-details-image" alt={title} />
        <p className="blog-details-content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
