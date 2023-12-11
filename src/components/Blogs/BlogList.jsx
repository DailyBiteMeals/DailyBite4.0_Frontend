import React from "react";
import { Link } from "react-router-dom";
import BlogData from "./BlogData";

function BlogList() {
  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-wrap px-20">
        {BlogData.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="w-full md:w-1/3 p-4"
          >
            <div className="bg-white rounded shadow hover:shadow-lg">
              <div className="flex items-center p-4">
                <img
                  src={blog.author.profileImage}
                  alt={blog.author.name}
                  className="rounded-full mr-2 w-20 h-20"
                />
                <div>
                  <p className="text-sm text-gray-500">{blog.author.name}</p>
                  <p className="text-xs text-gray-400">
                    {blog.author.position}
                  </p>
                </div>
                <p className="ml-auto text-sm text-gray-500">{blog.date}</p>
              </div>
              <img src={blog.image} alt={blog.title} className="rounded" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
