import React from 'react'
import PostForm from '../components/PostForm'

const PostUpload = () => {

  const createPost = async (newPost) => {
    try {
      console.log(newPost)
			await fetch("http://localhost:3001/api/posts/createPost", {
				method: "POST",
				headers: {
					"Content-Type": "application/json", 
				},
				body: JSON.stringify(newPost)
			});
			alert("Post created Successfully!");
    } catch(error) {
      console.log("Error", error)
			alert(" Failed to make a post, try again later")
    }
  }

  return (
    <div className='bg-yellow-300'>
      <PostForm postSubmit={createPost}  />
    </div>
  )
}

export default PostUpload
