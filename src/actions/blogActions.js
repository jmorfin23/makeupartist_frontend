import {
  FETCH_BLOG_POSTS,
  ADD_BLOG_POST,
  DELETE_BLOG_POST,
  GET_SINGLE_BLOGPOST,
  GET_REQUESTED_NUM_BLOGPOST,
  APP_ERROR,
  POST_ERROR,
  LOADING_DATA,
  LOADING_FINISHED,
  FETCH_NEXT_POSTS
} from "./types.js";

const token = localStorage.getItem("token");

// Retrieves all blogposts
export const fetchBlogPosts = () => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/get-blogpost"
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({
          type: FETCH_BLOG_POSTS,
          payload: res.data
        });
      } //else {
      //   dispatch({
      //     type: APP_ERROR,
      //     payload: res.error
      //   });
      // }
    } catch (error) {
      dispatch({
        type: APP_ERROR,
        payload: error.toString()
      });
    }
  };
};

// Retrieves specified number of blogposts for home page (3)
export const getRequestedNumBlogPost = num => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/get-requested-number-blogpost",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            number: num
          }
        }
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({
          type: GET_REQUESTED_NUM_BLOGPOST,
          payload: res.data
        });
      } //else {
      //   dispatch({
      //     type: APP_ERROR,
      //     payload: res.error
      //   });
      // }
    } catch (error) {
      dispatch({
        type: APP_ERROR,
        payload: error.toString()
      });
    }
  };
};

// Add a blogpost
export const addBlogPost = data => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/add-blogpost",
        {
          method: "POST",
          headers: {
            token: token
          },
          body: data
        }
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({
          type: ADD_BLOG_POST,
          payload: res
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
        payload: error.toString()
      });
    }
  };
};

// Delete a blogpost
export const deleteBlogPost = id => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/delete-blog-post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            id: id,
            token: token
          }
        }
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({
          type: DELETE_BLOG_POST,
          payload: res
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
        payload: error.toString()
      });
    }
  };
};

// Retrieves blogpost based on path
export const getSinglePost = path => {
  return async function(dispatch) {
    try {
      dispatch({ type: LOADING_DATA });
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/single-post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            path: path
          }
        }
      );
      const res = await response.json();
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
        payload: error.toString()
      });
    }
    dispatch({ type: LOADING_FINISHED });
  };
};

// Retrieves blogposts by page num
export const fetchNextPosts = page => {
  return async function(dispatch) {
    try {
      dispatch({ type: LOADING_DATA });
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/get-next-posts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            page_num: page,
            posts_per_page: 4 //posts per page
          }
        }
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({
          type: FETCH_NEXT_POSTS,
          payload: res.data
        });
      } //else {
      //   dispatch({
      //     type: APP_ERROR,
      //     payload: res.error
      //   });
      // }
    } catch (error) {
      dispatch({
        type: APP_ERROR,
        payload: error.toString()
      });
    }
    dispatch({ type: LOADING_FINISHED });
  };
};
