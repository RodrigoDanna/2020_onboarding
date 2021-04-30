import * as React from 'react'
import { Component } from 'react';

import Logo from '../assets/svg/logo.svg';

import '../assets/less/Header.less';

type Props = {
    search?: string,
    changeFunction: any
}

export default class Header extends Component<Props> {
    render() {

        return (
            <header className="header">
                <img className="logo" src={Logo} alt="Logo" />
                <input
                    className="input"
                    type="text"
                    value={this.props.search}
                    placeholder='Search by artist, song or album...'
                    onChange={this.props.changeFunction}
                />
            </header>
        )
    }
}