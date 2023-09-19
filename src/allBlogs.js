import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import Newsletter from "./component/newsletter";
import sanityClient from "./sanity";
import imageUrlFor from "./component/imageUrlFor";
import Footer from "./component/footer";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const BlockContent = require("@sanity/block-content-to-react");
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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

    // Simulate a 5-second delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="px-[16px] md:px-[30px] lg:px-[80px] mb-[42px] md:mb-[70px]  ">
        <div className="mt-[32px] md:mt-[60px] py-[60px] md:py-[90px] lg:py-[130px] bg-[#FAFAFA] rounded-2xl relative">
          <h2 className="text-[24px] md:text-[32px] lg:text-[70px] font-bold text-center   transition-all  text-transparent bg-clip-text bg-gradient-to-b to-white via-black from-[#111111] mb-2 md:mb-4">
            Blogs
          </h2>
          <p className="text-center text-[#2E2E2E] text-[16px] md:text-[18px]">
            Latest insights, stories, and news from Eaglion Technologies.{" "}
          </p>
          {/* <img
            src="/man-exclaim.png"
            alt="exclaim"
            className="absolute hidden lg:flex right-0 bottom-0"
          /> */}
        </div>
      </div>{" "}
      {isLoading ? (
        "loading..."
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[40px] md:mb-[60px] px-[16px] md:px-[30px] lg:px-[80px]">
          {blogs ? (
            blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white p-3 md:p-4 mr-5 rounded-lg max-w-[350px]"
              >
                <div classname="prose">
                  <img
                    src={imageUrlFor(blog.mainImage.asset._ref).url()}
                    alt=""
                    className="rounded-lg mb-[24px] md:mb-[38px] h-[128px] md:h-[160px] w-full object-cover "
                  />
                  <h2 className="text-[18px] md:text-[20px] line-clamp-2 lg:text-[24px] mb-2 font-semibold">
                    {blog.title}
                  </h2>
                  <div className="prose line-clamp-2">
                    <BlockContent
                      blocks={blog.body}
                      projectId="pzl9rov9"
                      dataset="production"
                    />
                  </div>
                  {/* <p className="text-md prose ">{blog.body.children.text} </p>{" "} */}
                  {/* <h3>{blog.publishedAt}</h3> */}
                </div>
                <Link to={"/blog/" + blog.slug.current}>
                  <button className="border border-[#B9B9B9]   rounded-lg px-3 py-2 mt-[26px] md:mt-[32px] hover:-translate-y-2 transition ease-in-out duration-150">
                    read more
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <p>Blog Loading...</p>
            </div>
          )}
        </div>
      )}
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default AllBlogs;
