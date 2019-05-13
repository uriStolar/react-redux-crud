import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
    return { ...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      const key = action.payload
      const {[key]:val, ...rest} = state
      return rest
    default:
      return state;
  }
};
