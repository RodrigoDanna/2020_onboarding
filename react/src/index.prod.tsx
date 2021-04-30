import * as React from "react"
import * as ReactDOM from "react-dom"
import retargetEvents from 'react-shadow-dom-retarget-events'
import styles from 'assets/less/AppProd.less'

import App from './App'

export default class MainApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const appStyles = document.createElement('style');
    appStyles.innerHTML = styles;

    shadowRoot.appendChild(appStyles);
    shadowRoot.appendChild(mountPoint);

    ReactDOM.render(<App />, mountPoint);
    retargetEvents(shadowRoot);
  }
}

window.customElements.define('app-main', MainApp);
