import React, { Component } from 'react'

import Card from './Card'

import '../assets/less/List.less';


type Props = {
    selected: ItemInterface | null,
    items: ItemInterface[]
}

export default class List extends Component<Props> {
    render() {
        return (
            <div className="list-container">
                <div className="list">
                    {this.props.items.map(item => <Card key={item.id} selected={this.props.selected} item={item} />)}
                </div>
            </div>
        )
    }
}