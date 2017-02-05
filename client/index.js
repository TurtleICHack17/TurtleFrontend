
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'

import App from './containers/App'
import Index from './containers/Index'
import RecordingPage from './components/RecordingPage/index'
import VideoPage from './components/VideoPage/index'
import MatchPage from './components/MatchPage/index'
import Stack from './containers/Stack'
import configure from './store'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}></IndexRoute>
        <Route path="/stack" component={Stack}></Route>
        <Route path="/record/:matchId/:ourId" component={RecordingPage}></Route>
        <Route path="/video/:videoId/:matchId" component={VideoPage}></Route>
        <Route path="/match/:matchId" component={MatchPage}></Route>
      </Route>
    </Router>
  </Provider>
</MuiThemeProvider>,
  document.getElementById('root')
)
