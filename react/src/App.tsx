import * as React from "react";
import './assets/less/App.less';

//Components
import Header from './components/Header';
import Aside from './components/Aside';
import List from './components/List';

export default () => (
    <div className="app">
        <Header></Header>
        <div className="main-container">
            <Aside></Aside>
            <List></List>
        </div>
    </div>
)