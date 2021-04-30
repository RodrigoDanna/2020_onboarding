import * as React from "react"
import * as ReactDOM from "react-dom"
import eminemTracks from './mocks/eminem.json'

import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root'),
  () => {
    const getTracks = (inputSearch: string) => {
      window.dispatchEvent(
        new CustomEvent('setResultsItems', {
          detail: {
            results: {
              total: eminemTracks.length * 5,
              data: eminemTracks
            },
            inputSearch: inputSearch
          },
        })
      )
    }
    window.addEventListener('requestResultsList', (e: any) => {
      getTracks(e.detail.inputSearch);
    })
    setTimeout(() => {
      getTracks('eminem');
    }, 500);
  }
);