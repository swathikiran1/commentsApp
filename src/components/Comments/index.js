import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', count: 0}

  onChangeName = e => this.setState({name: e.target.value})

  onChangeComment = e => this.setState({comment: e.target.value})

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const index = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const commentObj = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      time: formatDistanceToNow(new Date()),
      bgClsValue: initialContainerBackgroundClassNames[index],
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, commentObj],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onLikeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachObj => {
        if (id === eachObj.id) {
          return {...eachObj, isLiked: !eachObj.isLiked}
        }

        return eachObj
      }),
    }))
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(eachObj => id !== eachObj.id),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentsList, name, comment, count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="input-comments-container">
          <div>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <form className="input-container" onSubmit={this.onAddComment}>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                className="name-input"
                onChange={this.onChangeName}
              />
              <textarea
                value={comment}
                placeholder="Your Comment"
                className="comment-input"
                onChange={this.onChangeComment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>
        <hr />
        <p className="comment-name">
          <span>{count}</span> Comments
        </p>
        <ul>
          {commentsList.map(eachItem => (
            <CommentItem
              commentItem={eachItem}
              onLikeComment={this.onLikeComment}
              onDeleteComment={this.onDeleteComment}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
