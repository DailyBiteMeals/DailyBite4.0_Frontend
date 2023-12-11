import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "./BlogData";

function BlogPage() {
  const { id } = useParams();
  const blog = BlogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="w-5/6 mx-auto flex flex-col lg:flex-row px-10">
        <div className="lg:w-1/4 mx-auto">
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-lg mb-4 h-48 w-full object-cover"
          />
        </div>
        <div className=" lg:w-3/4 mx-auto px-10">
          <div className="flex items-center mb-4">
            <img
              src={blog.author.profileImage}
              alt={blog.author.name}
              className="rounded-full mr-2 w-20 h-20"
            />
            <div>
              <p className="text-gray-700">{blog.author.name}</p>
              <p className="text-gray-500">{blog.author.position}</p>
            </div>
            <p className="ml-auto text-gray-500">{blog.date}</p>
          </div>

          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
          <p className="text-gray-600 mb-6">{blog.description}</p>
        </div>
      </div>
      <div className="w-5/6 mx-auto flex flex-col lg:flex-row px-10">
        <div>{blog.content}</div>
      </div>
    </div>
  );
}

export default BlogPage;
