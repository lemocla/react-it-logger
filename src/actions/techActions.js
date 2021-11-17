import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR} from './types'

// get techs from server - refactored
export const getTechs = () => async dispatch => {
    // Redux thunk --> aync mehod // will return a function
        try {
            setLoading();
            const res = await fetch('/techs');
            const data = await res.json();
            dispatch({
                type: GET_TECHS,
                payload: data
            })            
        } catch (error) {
            dispatch({
                type: TECHS_ERROR,
                payload: error.response.statusText
            })
        }
    }

// set loading to true
export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}