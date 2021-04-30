import * as React from "react";
import './assets/less/App.less';

//Components
import Header from './components/Header';
import Aside from './components/Aside';
import List from './components/List';
import { Component } from "react";

type Props = {
    search?: string,
    selected?: ItemInterface
    list?: ListInterface
}

type AppState = {
    items: ItemInterface[],
    selected: ItemInterface | null
}


export const ThemeContext = React.createContext({
    setSelected: (e: any) => { }
});

export default class App extends Component<Props> {
    state: AppState = {
        items: [],
        selected: null
    }

    componentDidMount() {
        window.addEventListener('setResultsItems', (e: any) => {
            this.setResultsItems(e.detail.results);
        });
    }

    changeValue = (e: any) => {
        this.setState({
            search: e.target.value
        })
        window.dispatchEvent(
            new CustomEvent('requestResultsList', {
                detail: {
                    inputSearch: e.target.value
                },
            })
        )
    }

    setSelected = (e: any) => {
        this.setState({
            selected: e,
        })
    }

    setResultsItems = (e: any) => {
        this.setState({
            items: e.data
        })
    }

    render() {
        return (
            <div className="app">
                <ThemeContext.Provider value={{ setSelected: this.setSelected }}>
                    <Header search={this.props.search} changeFunction={this.changeValue}></Header>
                    <div className="main-container">
                        <Aside selected={this.state.selected} />
                        <List selected={this.state.selected} items={this.state.items} />
                    </div>
                </ThemeContext.Provider>
            </div>
        )
    }
}