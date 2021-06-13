import { ADD_INPUT } from "../actionType";

const initialState = {
    allIds: [],
    byIds: {}
  };
  
  const addons = (state = initialState, action) => {
    switch (action.type) {
      case ADD_INPUT: {
        const { id, content } = action.payload;
        return {
          ...state,
          allIds: [...state.allIds, id],
          byIds: {
            ...state.byIds,
            [id]: {
              content
            }
          }
        };
      }
      default:
      return state;
  }
}

export default addons;