import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { GlobalStateContext } from "./GlobalStateContest"

export const GlobalState = (props) => {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  const [postComments, setPostComments] = useState([])
  const getPosts = () => {
    const header = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    axios.get(`${BASE_URL}/posts?page=1&size=10`, header)
      .then((res) => {
        setPosts(res.data)
      })
      .catch((error) => {
        console.log(error.menssage)
      })
  }
  const getPostComments = (postId) => {
    const header = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }
    axios.get(`${BASE_URL}/posts/${postId}/comments`, header)
      .then((res) => {
        setPostComments(res.data)
      }).catch((error) => {
        console.log(error.menssage)
      })
  }
  const states = { posts, post, postComments }
  const setters = { setPosts, setPost, setPostComments }
  const getters = { getPosts, getPostComments }
  return (
    <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}