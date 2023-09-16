import './index.css'

const CommentItem = props => {
  const {commentItem, onLikeComment, onDeleteComment} = props
  const {id, name, comment, isLiked, time, bgClsValue} = commentItem

  const onClickLikeButton = () => {
    onLikeComment(id)
  }

  const onClickDeleteButton = () => {
    onDeleteComment(id)
  }

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClsValue = isLiked ? 'liked' : 'like'

  return (
    <li className="container1">
      <div className="commentItem-container">
        <p className={`profile-pic ${bgClsValue}`}>{name[0]}</p>
        <div>
          <div className="name-time-container">
            <p className="name">{name}</p>
            <p className="time">{`${time} ago`}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button
          type="button"
          className="like-button"
          onClick={onClickLikeButton}
        >
          <div className="like-container">
            <img src={likeImageUrl} alt="like" className="like-image" />
            <p className={likeClsValue}>Like</p>
          </div>
        </button>
        <button
          data-testid="delete"
          type="button"
          className="like-button"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="like-image"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
