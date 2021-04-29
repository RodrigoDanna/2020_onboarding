import React, { Component } from 'react'

import Card from './Card'

export default class List extends Component {

    constructor(props: {} | Readonly<{}>) {
        super(props)

        this.state = {
            items: ''
        }
    }

    setResultsItems = (e: any) => {
        this.setState({
            items: e
        })
    }

    componentDidMount() {
        window.addEventListener('setResultsItems', (e) => this.setResultsItems(e))
    }

    componentWillUnmount() {
        window.removeEventListener('setResultsItems', (e) => this.setResultsItems(e))
    }

    render() {
        return (
            <div className="list-container">
                <div className="list">
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                    <Card image="" title="Mama, I'm Coming Home" artist="Ozzy Osbourne" />
                </div>
            </div>
        )
    }
}