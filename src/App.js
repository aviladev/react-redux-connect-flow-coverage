// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'

import type { State } from './reducer'

type Props = { items: State }

class App extends Component<Props> {
  render() {
    return (
      <div>
        <h1>List of items (from redux store)</h1>
        <ul>
          {this.props.items.map(i => <li key={i}>{i}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({ items: state })
export default connect(mapStateToProps)(App)
