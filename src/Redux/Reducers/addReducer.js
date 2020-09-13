import { TODO } from "../Constants";
import { REHYDRATE } from "redux-persist";

const initialState = {
  add: [],
  completed: [],
};

const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
      };

    case TODO.ADD:
      return {
        ...state,
        add: action.payload,
      };

    case TODO.COMPLETED:
      return {
        ...state,
        completed: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default AddReducer;
