import {
  FETCH_IMAGES,
  ADD_IMAGE,
  DELETE_IMAGE,
  APP_ERROR,
  LOADING_DATA,
  LOADING_FINISHED
} from "./types.js";

//retrieve images from database
export const fetchImages = () => {
  return async function(dispatch) {
    dispatch({ type: LOADING_DATA });
    console.log("fetching images");
    const response = await fetch("http://127.0.0.1:5000/api/retrieve-images");
    const res = await response.json();
    try {
      if (res.status === "ok") {
        dispatch({
          type: FETCH_IMAGES,
          payload: res.data
        });
        dispatch({ type: LOADING_FINISHED });
      } else {
        dispatch({
          type: APP_ERROR,
          payload: res.error
        });
      }
    } catch (error) {
      dispatch({
        type: APP_ERROR,
        error: error
      });
    }
  };
};

//add image to database
export const addImage = imageInfo => {
  return function(dispatch) {
    console.log("inside add image action");
    fetch("http://127.0.0.1:5000/api/image-save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        imageInfo: JSON.stringify(imageInfo)
      }
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: ADD_IMAGE,
          payload: data
        })
      );
  };
};

//deleting image when called called
export const deleteImage = id => {
  return function(dispatch) {
    console.log("inside delete image action");
    fetch("http://127.0.0.1:5000/api/image-delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        id: id
      }
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: DELETE_IMAGE,
          payload: data
        })
      );
  };
};
