import { format } from "date-fns"
import { requestCreateComment } from "../services/requests"
import { requestCreatePostVote } from "../services/requests"
import { chooseVote } from "../services/requests"

export default function PostCard(props) {
  const { id, userId, title, body, createdAt, voteSum, commentCount } = props.post
  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy")
  const renderVoteButton = props.isFeed && ()
  userVote && isDisliked ?
    <Button onClick={() => removeVote("dislike")}>Remove dislike</Button>
    : <Button onClick={() => chooseVote("dislike")}>{isLiked ? `Change your vote to DISLIKE: `Dislike`}</Button>
  userVote && isLiked ?
    <Button onClick={() => removeVote("like")}>Remove like</Button>
    : <Button onClick={() => chooseVote("like")}>
      {isDisliked ? `Change your vote to LIKE`
        : `Like`
      }
    </Button>
}

return (
  <article>
    <h3>{title}</h3>
    <span>
      <b>Autor: </b>
      {userId}
    </span>
    <p>Criado em {date}</p>
    <img
      src={"https://picsum.photos/200/300?random=" + id}
      alt="Imagem aleatória do post"
    />
    <p>
      <b>Descrição: </b>
      {body}
    </p>
    <p>Votos: {voteSum ? voteSum : 0}</p>
    {/* <button>Votar em "Não Gostei"</button> */}
    <br />
    {/* <button>Votar em "Gostei"</button> */}
    <p>Comentários: {commentCount ? commentCount : 0}</p>
    <button>Ver comentários</button>
  </article>
)


export const requestCreateComment = (form, clear, getPostComments, postId) => {
    const headers = { headers: { Authorization: localStorage.getItem("token") } }
    const body = { body: form.body }
    axios.post(`${BASE_URL}/posts/${postId}/comments`, body, headers)
        .then((res) => {
            alert("Your comment was created!")
            getPostComments(postId)
            clear()
        })
        .catch((error) => {
            console.log(error.menssage)
        })
}

export const requestCreatePostVote = (postId, direction, getPosts) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    const body = {
        direction: direction
    }
    axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers)
        .then(() => {
            alert("Registered vote!")
            getPosts()
        })
        .catch((error) => {
            alert("Something got wrong with your vote. Try again!")
        })
}

export const chooseVote = (typeVote) => {
    if (typeVote === "like") {
        if (isDisliked) {
            requestChangePostVote(id, 1, getPosts)
            setIsLiked(true)
            setIsDisliked(false)
        } else {
            requestCreatePostVote(id, 1, getPosts)
            setIsLiked(true)
        }
    } else {
        if (isLiked) {
            requestChangePostVote(id, -1, getPosts)
            setIsLiked(false)
            setIsDisliked(true)
        } else {
            requestCreatePostVote(id, -1, getPosts)
            setIsDisliked(true)
        }
    }
}

