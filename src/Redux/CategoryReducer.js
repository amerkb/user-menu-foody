const initialState = {
  Active: {},
};

const SET_ACTIVE = "SET_ACTIVE";

export const setActive = (value) => ({
  type: SET_ACTIVE,
  payload: value,
});

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return { ...state, Active: action.payload };

    default:
      return state;
  }
};

export default CategoryReducer;
