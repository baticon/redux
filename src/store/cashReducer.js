const defaultState = {
  cash: 0,
};

const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      // take old state "...state" and change it like this "cash: state.cash + action.payload"
      return { ...state, cash: state.cash + action.payload };

    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

export default cashReducer;
