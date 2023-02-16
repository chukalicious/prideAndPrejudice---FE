const questionsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        questions: action.payload,
      };
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default questionsReducer;
