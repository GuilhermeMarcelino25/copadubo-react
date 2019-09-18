import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import Home from './Home';
import Upload from './upload/Upload'
import Relatorio from './relatorio/Relatorio';

ReactDOM.render(
  (<Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/relatorio" component={Relatorio}/>
          <Route path="/upload" component={Upload}/>
      </Route>
  </Router>),
  document.getElementById('root')
);

serviceWorker.unregister();
