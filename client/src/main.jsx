import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import store from './app/store'

import { CSSReset, AppStyles } from './globalStyles'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <CSSReset />
        <AppStyles />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
