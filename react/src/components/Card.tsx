import * as React from "react"

import '../assets/less/Card.less';

export default (props: { image: string; title: string; artist: string }) =>
    <div className="card">
        <div className="image"></div>
        <div className="info">
            <b className="title">{props.title}</b>
            <span className="artist">{props.artist}</span>
        </div>
    </div>