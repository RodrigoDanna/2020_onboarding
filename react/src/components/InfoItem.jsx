import React from 'react'

export default props => {
    return (
        <div className="info-item">
            <b>{props.title}: </b>
            <span>{props.value}</span>
        </div>
    )
}