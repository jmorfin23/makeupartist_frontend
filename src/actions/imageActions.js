import { FETCH_IMAGES, NEW_IMAGE } from "./types.js";

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

//deleting image when called called
