import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../actions/logActions';

const Logs = ({log: {logs, loading }, getLogs}) => {


    useEffect(()=>{
        getLogs();
        // eslint-disable-next-line
    }, []);

    // If loading -> return loading ...
    if (loading || logs === null ){
       return <Preloader/>
    }

    return (
        <ul className="collection with-header">
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show....</p>) 
            : (logs.map(log => <LogItem log={log} key={log.id} />))}
        </ul>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
 log: state.log//this is the prop from the root reducer
})

export default connect(mapStateToProps, {getLogs})(Logs); //connect --> react-redux
