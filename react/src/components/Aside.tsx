import * as React from "react"
import InfoItem from './InfoItem';

import Play from '../assets/svg/play.svg';
import ArtistImage from '../assets/svg/ozzy.jpg';

export default (props: any) => {
    return (
        <aside className="aside">
            <div className="infos">
                <InfoItem title="Song" value="Crazy Train" />
                <InfoItem title="Artist" value="Ozzy Osbourne" />
                <InfoItem title="Album" value="Memoirs of a Madman" />
                <InfoItem title="Duration" value="291 seconds" />
            </div>
            <a href="" className="button play">
                <img className="icon" src={Play} alt="Play Preview" />
                <span>Play Preview</span>
            </a>
            <a href="" className="button link">
                <span>See On Deezer</span>
            </a>

            <div className="image">
                <img className="artist-image" src={ArtistImage} alt="Artist Image" />
            </div>
        </aside>
    )
}
