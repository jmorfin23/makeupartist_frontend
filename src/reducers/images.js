//REDUCER : checks action and modifies store accordingly
export const images = (state = [], action, imageList) => {
  switch (action.type) {
    case "UPDATE IMAGES":
      for (let i = 0; i < imageList.length; i++) {
        state.push(imageList[i]);
      }
      return state;
  }
};
