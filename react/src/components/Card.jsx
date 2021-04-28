import React from 'react'

export default props =>
    <div className="card">
        <div className="image"></div>
        <div className="info">
            <b className="title">{props.title}</b>
            <span className="artist">{props.artist}</span>
        </div>
    </div>