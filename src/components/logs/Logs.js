import React, {useState, useEffect } from 'react'

const Logs = () => {

    // set state to empty array
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    // fetch API to get Json data
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []) //[] means that this will happen only once

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();
        setLogs(data);
        setLoading(false);
    }

    // If loading -> return loading ...
    if (loading){
       return <h4>Loading...</h4>
    }

    return (
        <ul className="collection-with-header">
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show....</p>) 
            : (logs.map(log => <li>{log.message}</li>))}
        </ul>
    )
}

export default Logs
