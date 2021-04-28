import React from 'react';
import './assets/css/App.css';

//Components
import Header from './components/Header.jsx';
import Aside from './components/Aside.jsx';
import List from './components/List.jsx';

export default () => (
    <div className="app">
        <Header></Header>
        <div className="main-container">
            <Aside></Aside>
            <List></List>
        </div>
    </div>
)