import React, { useEffect, useState } from "react";
import sanityClient from "./sanity";
import imageUrlFor from "./component/imageUrlFor";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import Navbar from "./component/navbar";

const Blog = () => {
  const BlockContent = require('@sanity/block-content-to-react')

  const { slug } = useParams();
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current=="${slug}"]{
          title,
          slug,
    mainImage{
            asset{
              _ref
            }
          },
     publishedAt,
          body,
          image{
            asset->{
              _ref,
              url
            },
          },
         
        }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);

      console.log(blogs)
  },);

  return (
    <div>
        <Navbar/>
    <div className="px-[16px] md:px-[30px] lg:px-[80px] bg-[#F6F6F9] ">
      <div>
        {blogs &&
          blogs.map((blog, index) => (
            <div key={index} className=" p-3 mr-5">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-5">{blog.title}</h2>
              <img
                src={imageUrlFor(blog.mainImage.asset._ref).url()}
                alt=""
                className="h-[200px] md:h-[350px] "
              />
              <div className = "prose mr-0 w-full">
                        <BlockContent blocks = {blog.body} projectId = "pzl9rov9" dataset = "production" />
                    </div> <h3>{blog.publishedAt}</h3>
            </div>
          ))}
      </div>
    </div></div>
  );
};

export default Blog;
