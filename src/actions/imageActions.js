import { FETCH_IMAGES, ADD_IMAGE } from "./types.js";

//retrieving images upon loading application
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

//adding image
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
