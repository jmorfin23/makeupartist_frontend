import {
  FETCH_BLOG_POSTS,
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  GET_SINGLE_BLOGPOST,
  GET_REQUESTED_NUM_BLOGPOST,
  APP_ERROR,
  POST_ERROR
} from "./types.js";

// Retrieves all blogposts from db
export const fetchBlogPosts = () => {
  return async function(dispatch) {
    try {
      await fetch("http://127.0.0.1:5000/api/get-blogpost")
        .then(response => response.json())
        .then(res => {
          if (res.status == "ok") {
            dispatch({
              type: FETCH_BLOG_POSTS,
              payload: res.data
            });
          } else {
            dispatch({
              type: APP_ERROR,
              payload: res.error
            });
          }
        });
    } catch (error) {
      dispatch({
        type: APP_ERROR,
        payload: error
      });
    }
  };
};

//Commented out for testing other ideas
// // Retrieves all blogposts from db
// export const fetchBlogPosts = () => {
//   return function(dispatch) {
//     console.log("inside fetch blog posts");
//     fetch("http://127.0.0.1:5000/api/get-blogpost")
//       .then(response => response.json())
//       .then(posts =>
//         dispatch({
//           type: FETCH_BLOG_POSTS,
//           payload: posts
//         })
//       );
//   };
// };

// Retrieves specified number of blogposts
export const getRequestedNumBlogPost = num => {
  return async function(dispatch) {
    console.log("inside getRequestedNumBlogPost");
    await fetch("http://127.0.0.1:5000/api/get-requested-number-blogpost", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        number: num
      }
    })
      .then(response => response.json())
      .then(res => {
        try {
          if (res.status === "ok") {
            dispatch({
              type: GET_REQUESTED_NUM_BLOGPOST,
              payload: res.data
            });
          } else {
            dispatch({
              type: APP_ERROR,
              payload: res.error
            });
          }
        } catch (error) {
          dispatch({
            type: APP_ERROR,
            payload: error
          });
        }
      });
  };
};

// Add blogpost to db
export const addBlogPost = blogPostInfo => {
  return async function(dispatch) {
    await fetch("http://127.0.0.1:5000/api/add-blogpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        postInfo: JSON.stringify(blogPostInfo)
      }
    })
      .then(response => response.json())
      .then(res => {
        try {
          if (res.status === "ok") {
            dispatch({
              type: ADD_BLOG_POST,
              message: res.message
            });
          } else {
            dispatch({
              type: APP_ERROR,
              payload: res.error
            });
          }
        } catch (error) {
          dispatch({
            type: APP_ERROR,
            payload: error
          });
        }
      });
  };
};

// dispatch({
//   type: ADD_BLOG_POST,
//   payload: res.data
// })

// Delete blogpost based on id
export const deleteBlogPost = id => {
  return async function(dispatch) {
    await fetch("http://127.0.0.1:5000/api/delete-blog-post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        id: id
      }
    })
      .then(response => response.json())
      .then(res => {
        try {
          if (res.status === "ok") {
            dispatch({
              type: DELETE_BLOG_POST,
              payload: res.data,
              message: res.message
            });
          } else {
            dispatch({
              type: APP_ERROR,
              payload: res.error
            });
          }
        } catch (error) {
          dispatch({
            type: APP_ERROR,
            payload: error
          });
        }
      });
  };
};

// Retrieves blogpost based on path
export const getSinglePost = path => {
  console.log("inside get single post");
  return async function(dispatch) {
    await fetch("http://127.0.0.1:5000/api/single-post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        path: path
      }
    })
      .then(response => response.json())
      .then(res => {
        try {
          if (res.status === "ok") {
            dispatch({
              type: GET_SINGLE_BLOGPOST,
              payload: res.data
            });
          } else {
            dispatch({
              type: POST_ERROR,
              payload: res.error
            });
          }
        } catch (error) {
          dispatch({
            type: APP_ERROR,
            payload: error
          });
        }
      });
  };
};
