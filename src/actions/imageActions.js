import { FETCH_IMAGES, NEW_IMAGE } from "./types.js";

export const fetchImages = () => {
  return function(dispatch) {
    console.log("fetching");
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

// retrieveAllPosts = async () => {
//
//   let response = await fetch();
//   let data = await response.json();
//
//   if (data.error) {
//     alert(data.error.message);
//   }
//
//   let d = data.success.data;
//   console.log(d);
//   for (let i = 0; i < d.length; i++) {
//     this.setState(prevState => ({
//       images: [...prevState.images, d[i]]
//     }));
//   }
//   console.log(this.state.images);
// };
