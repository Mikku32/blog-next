import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { MdArrowCircleLeft, MdArrowLeft, MdDelete, MdEdit } from "react-icons/md";

const BlogDetail = async (
  {params}: {params: {id: string}}
) => {
  const blog:Blog = await fetch(`http://localhost:3001/Blog/${params.id}`).then((res)=>res.json())
  return (
    <div className="p-4 max-h-screen">
      <Link href={`/`}>
        <Button isIconOnly color="success" variant="ghost" size="sm"> <MdArrowCircleLeft /> </Button>
      </Link>
      <div className=" flex flex-col h-screen gap-2 max-w-full p-6   shadow  ">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {blog.title}
    </h5>
    <h5 className="mb-2 text-2sm font-bold tracking-tight text-gray-300 dark:text-red-400 underline">
      {blog.author}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {blog.content}
    </p>

    <div className="flex mt-auto  gap-3  justify-center align-bottom">
      <Button isIconOnly color="success" variant="ghost" size="sm">
        <MdEdit />
      </Button>

      <Button isIconOnly color="danger" variant="ghost" size="sm">
        <MdDelete />
      </Button>
    </div>
  </div>
    </div>
  );
};

export default BlogDetail;
