import * as React from "react"

export default (props: { title: string; value: string | number }) => {
    return (
        <div className="info-item">
            <b>{props.title}: </b>
            <span>{props.value}</span>
        </div>
    )
}