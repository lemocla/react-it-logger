import { keyDown } from 'materialize-css';
import React, {useState, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechListItem from './TechListItem';
import { getTechs } from '../../actions/techActions';



const TechListModal = ({getTechs, tech: {techs, loading}}) => {
    // set state to empty array

    // fetch API to get Json data
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []) //[] means that this will happen only once

    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4 className='center'>Technician List</h4>
                <ul className="collection ">
                    {!loading && techs!==null && techs.map(tech => <TechListItem tech={tech} key={tech.id}/>)}
                </ul>
            </div>
        </div>

    )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech: state.tech
  });

export default connect(mapStateToProps, {getTechs})(TechListModal)
