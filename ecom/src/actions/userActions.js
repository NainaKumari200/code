import {
    REGISTER_USER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    ADD_REGISTERED_USER,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from './actionTypes';
  
  export const registerUser = (formData) => {
    
    return (dispatch, getState) => {
      dispatch({ type: REGISTER_USER });
      
      // Perform form validation
      const errors = {};
      if (!formData.username) {
        errors.username = 'Username is required';
      }
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
      if (!formData.birthdate) {
        errors.birthdate = 'Birthdate is required';
      }
      if (!formData.password) {
        errors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        errors.password = 'Password should be at least 6 characters long';
      }
      if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = 'Passwords do not match';
      }
      
      if (Object.keys(errors).length > 0) {
        dispatch({
          type: REGISTER_FAILURE,
          payload: errors,
        });
      } else {
        // Simulating an asynchronous API call for registration
        setTimeout(() => {
            const { user } = getState().user;
            dispatch({
              type: REGISTER_FAILURE,
              payload: {},
            })
            dispatch({
                type: ADD_REGISTERED_USER,
                payload: formData,
              });
          // Assuming successful registration
          dispatch({
            type: REGISTER_SUCCESS,
            payload: formData,
          });
          
        }, 1000);
      }
    };
  };

  export const loginRequest = () => {
    return {
      type: LOGIN_REQUEST,
    };
  };
  
  export const loginSuccess = (user) => {
    return {
      type: LOGIN_SUCCESS,
      payload: user,
    };
  };
  
  export const loginFailure = (error) => {
    return {
      type: LOGIN_FAILURE,
      payload: error,
    };
  };
  
  export const logout = () => {
    return {
      type: LOGOUT,
    };
  };

  export const loginUser = (formData, rememberMe) => {
    console.log({formData})
    return (dispatch, getState) => {
      // Simulating an asynchronous API call for login
      dispatch(loginRequest());
    //   setTimeout(() => {
        // Assuming successful login
        // const { registeredUsers } = getState().user;
        // const user = registeredUsers.find(
        //   (user) =>
        //     user.username === formData.username && user.password === formData.password
        // );
        if (formData.username) {
          dispatch(loginSuccess(formData));
          if(rememberMe) localStorage.setItem('loggedInUser',JSON.stringify(formData))
        } else {
          dispatch(loginFailure('Invalid username or password'));
          localStorage.removeItem('loggedInUser')
        }
    //   }, 2000);
    };
  };