//Creating user reducer function
//{Type: "LOGGED_IN_USER", payload: {name: "", role: "Seller"}}

const authReducer = (state = { name: "Nikku", role: "Seller" }, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
