import { TYPES } from '../actions/fetchActions';

export const fetchInitialState = {
   data: [],
   isLoading: true,
   err: null,
};

export const fetchReducer = (state, action) => {
   switch (action.type) {
      case TYPES.ONCHANGESTATE:
         return {
            ...state,
            data: action.payload,
         };
      case TYPES.ONSUCCESSFETCH:
         return {
            data: action.payload,
            isLoading: false,
            err: {
               error: false,
            },
         };
      case TYPES.ONERRORFETCH:
         return {
            data: state.data,
            isLoading: false,
            err: {
               error: true,
               errorName: action.payload.name,
               errorMessage: action.payload.message,
            },
         };

      default:
         return state;
   }
};
