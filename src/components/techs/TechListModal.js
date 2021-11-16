import { keyDown } from 'materialize-css';
import React, {useState, useEffect } from 'react';
import TechListItem from './TechListItem';


const TechListModal = () => {
    // set state to empty array
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    // fetch API to get Json data
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []) //[] means that this will happen only once

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
        console.log(data)
        setLoading(false);
    }

    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4 className='center'>Technician List</h4>
                <ul className="collection ">
                    {!loading && techs.map(tech => <TechListItem tech={tech} key={tech.id}/>)}
                </ul>
            </div>
        </div>

    )
}

export default TechListModal
