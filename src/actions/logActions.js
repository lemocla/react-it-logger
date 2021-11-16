import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG} from './types'

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

    // ADD logs from server - refactored
    export const addLog = (log) => async dispatch => {
    // Redux thunk --> aync mehod // will return a function
        try {
            setLoading();
            const res = await fetch('/logs', {
                method:'POST',
                body: JSON.stringify(log),
                headers: {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            dispatch({
                type: ADD_LOG,
                payload: data
            })            
        } catch (err) {
            dispatch({
                type: LOGS_ERROR,
                payload: err.response.data
            })
        }
    }

// delete logs from server - refactored
export const deleteLog = (id) => async dispatch => {
    // Redux thunk --> aync mehod // will return a function
        try {
            setLoading();
            await fetch(`/logs/${id}`, {method: 'DELETE'});
            dispatch({
                type: DELETE_LOG,
                payload: id
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