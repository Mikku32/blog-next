import React from "react";
import BlogCard from "./blogCard";

const BlogHome = async () => {
  const blog: Blog[] = await fetch("http://localhost:3001/Blog",{cache:"no-store",}).then((res) =>
    res.json()
  );
  return (
    <div className=" mt-24 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full ">
      {blog.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogHome;
