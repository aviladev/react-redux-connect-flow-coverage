// @flow
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// flow complains about `getElementById` possibly return `null`
const root = document.getElementById('root')
if (root) ReactDOM.render(<App />, root)
