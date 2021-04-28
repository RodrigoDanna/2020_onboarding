import React, {useState} from 'react'

import Logo from '../assets/svg/logo.svg';

export default props => {
    const [name, setName] = useState('');
    const placeholder = 'Search by artist, song or album...';

    return (
        <header className="header">
            <img className="logo" src={Logo} alt="Logo" />
            <input className="input" type="text" value={name} placeholder={placeholder} onChange={e => setName(e.target.value)}/>
        </header>
    )
}