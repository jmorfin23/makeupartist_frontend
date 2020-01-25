import { FETCH_BLOG_POSTS, ADD_BLOG_POST, DELETE_BLOG_POST } from "./types.js";

export const fetchBlogPosts = () => {
  return function(dispatch) {
    console.log("inside fetch blog posts");
    fetch("http://127.0.0.1:5000/api/get-blogpost")
      .then(response => response.json())
      .then(posts =>
        dispatch({
          type: FETCH_BLOG_POSTS,
          payload: posts
        })
      );
  };
};

export const addBlogPost = () => {
  console.log("inside of blog post action");
};

export const deleteBlogPost = () => {
  console.log("inside delete blog post");
};
