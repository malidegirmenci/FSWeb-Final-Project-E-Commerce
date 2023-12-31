import * as types from './userActionTypes';
import  instanceAxios  from '../../../api/axiosInstance';
import toastMixin from '../../../utils/sweetAlertToastify';

export const userRequest = (userData) => {
    return {
        type: types.USER_REQUEST,
        payload: userData,
    };
};

export const userSuccess = (response) => {
    return {
        type: types.USER_SUCCESS,
        payload: response,
    };
};

export const userFailure = (error) => {
    return {
        type: types.USER_FAILURE,
        payload: error,
    };
};


export const signUpUser = (userData, history) => (dispatch) => {
    dispatch(userRequest(userData));
    instanceAxios
        .post('/signup', userData)
        .then((response) => {
            dispatch(userSuccess(response.data));
            toastMixin.fire({
                animation: true,
                title: response.data.message
            });
            history.goBack();
        }).catch((error) => {
            dispatch(userFailure(error))
            toastMixin.fire({
                animation: true,
                title: "Sign up has been failed",
                icon:'error',
            });
        })
};

export const loginUser = (userData, history) => (dispatch) => {
    dispatch(userRequest(userData));
    instanceAxios
        .post('/login', userData)
        .then((response) => {
            dispatch(userSuccess(response.data));
            toastMixin.fire({
                animation: true,
                title: response.data.message
            });
            history.push("/");
        }).catch((error) => {
            console.log(error);
            dispatch(userFailure(error))
            toastMixin.fire({
                animation: true,
                title: "Login has been failed",
                icon:'error',
            });
        })
};



