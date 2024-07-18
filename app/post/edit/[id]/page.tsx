'use client'
import { Button, Input, Spinner, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

const EditPost = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const [isloading, setIsloading] = useState(false)
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: ""
  })
  useEffect(() => {

    setIsloading(true)
    const fetchBlog = async () => {
      const res: Blog = await fetch(`http://localhost:3001/Blog/${params.id}`).then((res) => res.json())

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


    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col gap-3 p-4 border-1 rounded-md mt-4 w-[40%] shadow-sm shadow-slate-50 bg-gray-900'>
        <form
          className="flex flex-col gap-2 p-4"
          id="edit-blog"
          onSubmit={async (e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const content = e.target.content.value;
            const author = e.target.author.value;

            try {
              setIsloading(true)
              await fetch(`http://localhost:3001/Blog/${params.id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content, author }),
              })
              setIsloading(false)
              await fetch("http://localhost:3001/Blog")
              router.push("/")

            } catch (error) {
              console.log(error);
            }

          }}
        >
          <label className=" text-sm font-medium text-gray-500 font-serif">Title</label>
          <input
            className='w-full p-3 border-1 rounded-lg mb-6 font-mono'
            aria-label='title'
            placeholder='A big title :)'
            id="title"
            name="title"
            defaultValue={blog.title}
          />

          <label className="  text-sm  text-gray-500 font-medium font-serif">Content</label>
          <textarea
            className='w-full p-3 border-1 rounded-lg h-[150px] mb-6 font-mono'
            aria-label='content'
            placeholder="your thoughts....."
            id="content"
            name="content"
            defaultValue={blog.content}
          />

          <label className="text-sm font-medium text-gray-500 font-serif">Author</label>
          <input
            className='w-full p-3 border-1 rounded-lg font-mono'
            aria-label='author'
            placeholder="Who is writing this?"
            id="author"
            name="author"
            defaultValue={blog.author}
          />

        </form>

        <div className='flex justify-around  w-full px-[40px] mt-3 items-center'>


          <Button color="primary" form="edit-blog" type="submit" variant='ghost' disabled={isloading} className='w-[40px] '>
            {isloading ? <CgSpinner className="animate-spin" /> : "Edit"}
          </Button></div>
      </div>
    </div>
  )
}

export default EditPost
