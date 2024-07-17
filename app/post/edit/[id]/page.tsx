'use client'
import { Button, Input, Spinner } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

const EditPost = ({params}:{params:{id:string}}) => {
  const router = useRouter()
const [isloading, setIsloading] = useState(false)
   const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: ""
   } )
useEffect(() => {

  setIsloading(true)
  const fetchBlog = async () => {
    const res:Blog = await fetch(`http://localhost:3001/Blog/${params.id}`).then((res)=>res.json())
    
   setBlog({
    title: res.title,
    content: res.content,
    author: res.author
   })

    setIsloading(false)
  }
  fetchBlog()
  
}, [params.id])

  return (
    <div>
    <form
                className="flex flex-col gap-3"
                id="edit-blog"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const title = e.target.title.value;
                  const content = e.target.content.value;
                  const author = e.target.author.value;

                  try {
                    await fetch(`http://localhost:3001/Blog/${params.id}`, {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title, content, author }),
                   })
                 await  fetch("http://localhost:3001/Blog")
                 router.push("/")
                  
                  } catch (error) {
                    console.log(error);
                  }
                 
                }}
              >
                <input
                placeholder='title please'
                  id="title"
                  name="title"
                  defaultValue={blog.title}
                />
                <input
                  
                  placeholder='content please'
                  
                  id="content"
                  name="content"
                  defaultValue={blog.content}
                />
                <input
                placeholder='author please'
                  id="author"
                  name="author"
                  defaultValue={blog.author}
                />
              </form>
             {isloading? <Spinner color="secondary" />:<Button color="success" type="submit" form="edit-blog" >Edit</Button>}
  </div>
  )
}

export default EditPost
