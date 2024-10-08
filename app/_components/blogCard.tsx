"use client";

import { Button } from "@nextui-org/react";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";


const BlogCard = ({ blog }: { blog: Blog }) => {
  const router = useRouter()
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className=" flex flex-col  gap-2 max-w-sm  p-6 bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-900 dark:border-gray-70 dark:hover:bg-gray-800 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-mono">
          {blog.title}
        </h5>
        <h5 className="mb-2 text-2sm font-bold tracking-tight text-gray-300 dark:text-red-600 underline font-sans">
          {blog.author}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 font-mono">
          {blog.content}
        </p>

        <div className="flex mt-auto  gap-3  justify-end align-bottom">
          <Link href={`/post/edit/${blog.id}`}>
            <Button isIconOnly color="success" variant="ghost" size="sm">
              <MdEdit />
            </Button>
          </Link>

          <Button isIconOnly color="danger" variant="ghost" size="sm" onClick={async (e) => {
            e.preventDefault()
            try {
              await fetch(`http://localhost:3001/Blog/${blog.id}`, { method: "DELETE" })
            } catch (error) {
              console.log(error)
            }
            await fetch("http://localhost:3001/Blog")
            router.refresh()


          }

          }>
            <MdDelete />
          </Button>
        </div>
      </div>

    </Link>
  );
};

export default BlogCard;
