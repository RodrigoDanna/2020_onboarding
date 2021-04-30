import { ThemeContext } from "../App";
import * as React from "react"

import '../assets/less/Card.less';

export default (props: { selected: ItemInterface | null; item: ItemInterface; }) => {

    return (
        <ThemeContext.Consumer>
            {({ setSelected }) => (
                <div onClick={() => { setSelected(props.item); }} className={`${props.selected?.id == props.item.id ? 'active' : ''} card`} >
                    <div className="image"><img src={props.item.album.cover_big} alt={props.item.album.title} /></div>
                    <div className="info">
                        <b className="title">{props.item.title}</b>
                        <span className="artist">{props.item.artist.name}</span>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}