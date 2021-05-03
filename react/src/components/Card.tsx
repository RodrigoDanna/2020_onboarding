import { ThemeContext } from "../App";
import * as React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import '../assets/less/Card.less';

export default (props: { selected: ItemInterface | null; item: ItemInterface; }) => {

    return (
        <ThemeContext.Consumer>
            {({ setSelected }) => (
                <div onClick={() => { setSelected(props.item); }} className={`${props.selected?.id == props.item.id ? 'active' : ''} card`} >
                    <div className="image">
                        <LazyLoadImage
                            alt={props.item.album.title}
                            height="200px"
                            width="200px"
                            src={props.item.album.cover_medium}
                            effect="blur"
                            className="cover-image"
                        />
                    </div>
                    <div className="info">
                        <b className="title">{props.item.title}</b>
                        <span className="artist">{props.item.artist.name}</span>
                    </div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}