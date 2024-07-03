const initialState = {
  show: false,
  data: {},
  cart: [],
  sum: 0,
};

const SET_SHOW = "SET_SHOW";
const SET_DATA = "SET_DATA";
const SET_CART = "SET_CART";
const SET_SUM = "SET_SUM";

export const setShow = (value) => ({
  type: SET_SHOW,
  payload: value,
});

export const setData = (value) => ({
  type: SET_DATA,
  payload: value,
});

export const setCart = (value) => ({
  type: SET_CART,
  payload: value,
});
export const setSum = (value) => ({
  type: SET_SUM,
  payload: value,
});

const SidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW:
      return { ...state, show: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_SUM:
      return { ...state, sum: action.payload };

    default:
      return state;
  }
};

export default SidebarReducer;
