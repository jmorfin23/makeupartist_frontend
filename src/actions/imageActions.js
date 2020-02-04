import { FETCH_IMAGES, ADD_IMAGE, DELETE_IMAGE } from "./types.js";

//retrieve images from database
export const fetchImages = () => {
  return function(dispatch) {
    console.log("fetching images");
    fetch("http://127.0.0.1:5000/api/retrieve-images")
      .then(response => response.json())
      .then(images =>
        dispatch({
          type: FETCH_IMAGES,
          payload: images
        })
      );
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
export const deleteImage = imageURL => {
  return function(dispatch) {
    console.log("inside delete image action");
    fetch("http://127.0.0.1:5000/api/image-delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        imageURL: imageURL
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
