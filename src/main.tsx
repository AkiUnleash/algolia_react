// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from "./history";
import Top from './components/pages/Top';
import Write from './components/pages/Write';
import { Provider } from "react-redux"
import { store } from './common/redux/store'


const App: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/write" component={Write} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#app'));