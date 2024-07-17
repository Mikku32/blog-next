import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const BlogCard = async ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className=" flex flex-col  gap-2 max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-700 dark:border-gray-70 dark:hover:bg-gray-600 hover:scale-105">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.title}
        </h5>
        <h5 className="mb-2 text-2sm font-bold tracking-tight text-gray-300 dark:text-red-400 underline">
          {blog.author}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {blog.content}
        </p>

        <div className="flex mt-auto  gap-3  justify-end align-bottom">
          <Link href={`/post/edit/${blog.id}`}>
          <Button isIconOnly color="success" variant="ghost" size="sm">
            <MdEdit />
          </Button>
          </Link>

          <Button isIconOnly color="danger" variant="ghost" size="sm" onClick={ async(e) =>  {
e.preventDefault()
await fetch(`http://localhost:3001/Blog/${blog.id}`,{method:"DELETE"})
          }}>
            <MdDelete />
          </Button>
        </div>
      </div>
      
    </Link>
  );
};

export default BlogCard;
