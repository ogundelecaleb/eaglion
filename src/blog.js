import React, { useEffect, useState } from "react";
import sanityClient from "./sanity";
import imageUrlFor from "./component/imageUrlFor";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import Navbar from "./component/navbar";

const Blog = () => {
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

      console.log(blogs)
  },);

  return (
    <div>
        <Navbar/>
    <div className="px-[16px] md:px-[30px] lg:px-[80px]  md:mx-[60px] lg:mx-[108px] my-9">
      <div>
        {blogs &&
          blogs.map((blog, index) => (
            <div key={index} className="bg-[#F6F6F9] p-3 mr-5">
              <h2>{blog.title}</h2>
              <img
                src={imageUrlFor(blog.mainImage.asset._ref).width(200).url()}
                alt=""
                className="h-"
              />
              <p>{blog.body.children.text}</p> <h3>{blog.publishedAt}</h3>
            </div>
          ))}
      </div>
    </div></div>
  );
};

export default Blog;
