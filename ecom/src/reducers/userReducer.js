import {
    REGISTER_USER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  ADD_REGISTERED_USER,
  } from '../actions/actionTypes';
  
  const initialState = {
    user: null,
    isLoading: false,
    errors: {},
    error : null,
    registeredUsers: [{username: "Name",email: "name@mail.com",password: "name",confirmPassword: "name", birthdate: "01-04-2021"}],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER:
        return {
          ...state,
          isLoading: true,
          errors: {},
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoading: false,
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          isLoading: false,
          errors: action.payload,
        };
        case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
      case ADD_REGISTERED_USER:
        return {
          ...state,
          registeredUsers: [...state.registeredUsers, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default userReducer;