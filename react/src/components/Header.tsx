import * as React from 'react'
import { Component } from 'react';

import Logo from '../assets/svg/logo.svg';

import '../assets/less/Header.less';

export default class Header extends Component {
    state: { search: string; };

    constructor(props: {} | Readonly<{}>) {
        super(props)

        this.state = {
            search: ''
        }
    }

    changeValue = (value: string) => {
        this.setState({
            search: value
        })
    }

    render() {

        return (
            <header className="header">
                <img className="logo" src={Logo} alt="Logo" />
                <input
                    className="input"
                    type="text"
                    value={this.state.search}
                    placeholder='Search by artist, song or album...'
                    onChange={e => this.changeValue(e.target.value)}
                />
            </header>
        )
    }
}