import {
  FETCH_IMAGES,
  ADD_IMAGE,
  DELETE_IMAGE,
  APP_ERROR,
  LOADING_DATA,
  LOADING_FINISHED
} from "./types.js";

const token = localStorage.getItem("token");

//retrieve images
export const fetchImages = () => {
  return async function(dispatch) {
    dispatch({ type: LOADING_DATA });
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/retrieve-images"
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({
          type: FETCH_IMAGES,
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

// add an image
export const addImage = data => {
  return async function(dispatch) {
    try {
      dispatch({ type: LOADING_DATA });
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/image-save",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: data
        }
      );
      const res = await response.json();

      if (res.status === "ok") {
        dispatch({ type: ADD_IMAGE, payload: res });
      } else {
        dispatch({ type: APP_ERROR, payload: res.error });
      }
    } catch (error) {
      dispatch({ type: APP_ERROR, payload: error.toString() });
    }
    dispatch({ type: LOADING_FINISHED });
  };
};

// deleting  an image
export const deleteImage = id => {
  return async function(dispatch) {
    try {
      const response = await fetch(
        "https://kathrynsmithmakeup-backend.herokuapp.com/api/image-delete",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            id: id
          }
        }
      );
      const res = await response.json();
      if (res.status === "ok") {
        dispatch({ type: DELETE_IMAGE, payload: res }); // for now
      } else {
        dispatch({ type: APP_ERROR, payload: res.error });
      }
    } catch (error) {
      dispatch({ type: APP_ERROR, payload: error.toString() });
    }
  };
};
