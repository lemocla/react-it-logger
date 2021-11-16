import React from 'react'
import Moment from 'react-moment'
import { PropTypes } from 'prop-types'

const TechListItem = ({ tech }) => {
    return (
        <li className='collection-item'>
            <div>
                 {tech.firstName} {tech.lastName}
                 <a href='#!' className='secondary-content'><i className='material-icons grey-text'>delete</i></a>
            </div>
        </li>
         )
     }
     
     TechListItem.propTypes = {
     log: PropTypes.object.isRequired,
     }

export default TechListItem
