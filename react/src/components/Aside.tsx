import * as React from "react"
import InfoItem from './InfoItem';

import '../assets/less/Aside.less';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default (props: { selected: ItemInterface | null; }) => {
    return (
        <aside className="aside">
            {props.selected !== null && <>
                <div className="infos">
                    <InfoItem title="Song" value={props.selected.title} />
                    <InfoItem title="Artist" value={props.selected.artist.name} />
                    <InfoItem title="Album" value={props.selected.album.title} />
                    <InfoItem title="Duration" value={`${props.selected.duration} seconds`} />
                </div>

                <a href={props.selected.link} target="_blank" className="button link">
                    <span>See On Deezer</span>
                </a>

                <div className="image">
                    <LazyLoadImage
                        alt={props.selected.artist.name}
                        src={props.selected.artist.picture_medium}
                        effect="blur"
                    />
                </div>
            </>
            }
            {props.selected === null && <span className="empty">Please select the song</span>}
        </aside>
    )
}
