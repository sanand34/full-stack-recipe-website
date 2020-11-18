export const initialState = {
  user: null,
  item: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ITEM: "SET_ITEM",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
