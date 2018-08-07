// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'
import App from './App'

const initial = ['Ice Cream', 'Chocolate', 'Pizza']

// flow complains about `getElementById` possibly return `null`
const root = document.getElementById('root')
if (root) ReactDOM.render(
  <Provider store={createStore(reducer, initial)}>
    <App />
  </Provider>
  , root
)
