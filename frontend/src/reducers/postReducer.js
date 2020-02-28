import { GET_POST, ADD_POST, DELETE_POST, POST_LOADING } from '../actions/types';

const initialState = {
   post: [],
   loading: false
};

export default function( state = initialState, action) {
    switch(action.type) {
        case GET_POST:
            return{
                ...state,
                post: action.payload,
                loading: false
            }

        case ADD_POST:
            return{
                ...state,
                post: [action.payload, ...state.post],
            }
        case DELETE_POST: 
            return{
                ...state,
                post: state.post.filter(post => post._id !== action.payload)
            }
        case POST_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state
    }   
}