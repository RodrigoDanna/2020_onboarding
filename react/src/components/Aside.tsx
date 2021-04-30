import * as React from "react"
import InfoItem from './InfoItem';

import Play from '../assets/svg/play.svg';

import '../assets/less/Aside.less';

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
                <a href="" className="button play">
                    <img className="icon" src={Play} alt="Play Preview" />
                    <span>Play Preview</span>
                </a>
                <a href={props.selected.link} target="_blank" className="button link">
                    <span>See On Deezer</span>
                </a>

                <div className="image">
                    <img className="artist-image" src={props.selected.artist.picture_medium} alt="Artist Image" />
                </div>
            </>
            }
            {props.selected === null && <span className="empty">Please select the song</span>}
        </aside>
    )
}
