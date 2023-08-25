import React, { useEffect, useState } from "react";

import sanityClient from "../sanity";
import imageUrlFor from "./imageUrlFor";

const Blog = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "post"]{
            title,
            slug,
      mainImage{
              asset{
                _ref
              }
            },
       publishedAt,
            body[0]{
                  children[0]{
                    text
                  }
                },
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
    }, []);
  return (<div>
    {blogs &&
        blogs.map((blog, index) => (
          <div key={index} className="bg-[#F6F6F9] p-3 mr-5">
            <div>
              <h2>{blog.title}</h2>
              <img
                src={imageUrlFor(blog.mainImage.asset._ref)
                  .width(200)
                  .url()}
                alt=""
                className="h-"
              />
              <p>{blog.body.children.text}</p> <h3>{blog.publishedAt}</h3>
            </div>
          </div>
        ))}
  </div>)
}

export default Blog