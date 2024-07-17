'use client';

import { Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react'

const PostBlog = () => {
  const router=useRouter()
  return (
    <div>
      <form
                  className="flex flex-col gap-3"
                  id="add-blog"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const content = e.target.content.value;
                    const author = e.target.author.value;

                    try {
                      await fetch("http://localhost:3001/Blog", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ title, content, author }),
                     })
                   await  fetch("http://localhost:3001/Blog")
                   router.push("/")
                     console.log("Blog added successfully");
                    } catch (error) {
                      console.log(error);
                    }
                   
                  }}
                >
                  <Input
                    isRequired
                    labelPlacement="outside"
                    label="Title"
                    id="title"
                    name="title"
                  />
                  <Input
                    isRequired
                    labelPlacement="outside"
                    label="Content"
                    id="content"
                    name="content"
                  />
                  <Input
                    isRequired
                    labelPlacement="outside"
                    label="Author"
                    id="author"
                    name="author"
                  />
                </form>
                <Button color="success" form="add-blog" type="submit">
                  Post
                </Button>
    </div>
  )
}

export default PostBlog
