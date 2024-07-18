'use client';

import { Button, Input, Textarea } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { CgSpinner } from 'react-icons/cg';

const PostBlog = () => {
  const router = useRouter()
  const [isloading, setIsloading] = useState(false)
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='flex flex-col gap-3 p-4 border-1 rounded-md mt-4 w-[30%] shadow-sm shadow-slate-50 bg-gray-900'>
        <form
          className="flex flex-col gap-6 p-4"
          id="add-blog"
          onSubmit={async (e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const content = e.target.content.value;
            const author = e.target.author.value;

            try {
              setIsloading(true)
              await fetch("http://localhost:3001/Blog", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content, author }),
              })

              await fetch("http://localhost:3001/Blog")
              setIsloading(false)
              router.push("/")
              router.refresh()
            } catch (error) {
              console.log(error);
            }

          }}
        >
          <Input
            isRequired
            labelPlacement="outside"
            label="Title"
            placeholder='A big title :)'
            id="title"
            name="title"
          />
          <Textarea
            isRequired
            label="Description"
            labelPlacement="outside"
            placeholder="your thoughts....."
            className="w-full"
            id="content"
            name="content"
          />

          <Input
            isRequired
            labelPlacement="outside"
            label="Author"
            placeholder="Who is writing this?"
            id="author"
            name="author"
          />
        </form>

        <div className='flex justify-around  w-full px-[40px] mt-4 items-center'>


          <Button color="primary" form="add-blog" type="submit" variant='ghost' disabled={isloading} className='w-[40px] '>
            {isloading ? <CgSpinner className="animate-spin" /> : "Post"}
          </Button></div>
      </div>
    </div>
  )
}

export default PostBlog
