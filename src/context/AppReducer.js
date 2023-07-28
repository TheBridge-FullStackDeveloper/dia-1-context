const characters = (state, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,//si hay estado previo que no lo borre
        characters: action.payload,//res.data.results
      };
    default:
      return state;
  }
};
export default characters;
