import { ADD_POST, GET_POST, DELETE_POST, POST_LOADING } from './types';

import axios from 'axios';

export const getPost = () => dispatch => {
    dispatch(setPostLoading());

    axios
        .get("http://localhost:5050/api/posts/list")
        .then(
            res => {
                dispatch({
                type: GET_POST,
                payload: res.data
            })}
        )
        .catch(err => dispatch(err) );
}

export const addPost = data => dispatch => {
    axios
        .post('http://localhost:5050/api/posts/add', data)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            })}
        )
}

export const deletePost = id => dispatch => {
    axios.delete(`http://localhost:5050/api/posts/${id}`).then(res => {
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    })
}

export const setPostLoading = () => {
    return{
        type: POST_LOADING,
    }
}