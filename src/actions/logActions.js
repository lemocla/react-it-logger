import { GET_LOGS, SET_LOADING, LOGS_ERROR} from './types'

/* initial
export const getLogs = () => {
// Redux thunk --> aync mehod // will return a function
    return async ( dispatch ) => {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        })
    }
}*/


// get logs from server - refactored
export const getLogs = () => async dispatch => {
    // Redux thunk --> aync mehod // will return a function
        try {
            setLoading();
            const res = await fetch('/logs');
            const data = await res.json();
            dispatch({
                type: GET_LOGS,
                payload: data
            })            
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.data
            })
        }
    }


// set loading to true
export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}