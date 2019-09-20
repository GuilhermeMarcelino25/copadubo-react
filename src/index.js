import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Upload from './upload/Upload'
import Relatorio from './relatorio/Relatorio';

ReactDOM.render(
  <BrowserRouter basename="/copadubo-react/">
      <App/>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/relatorio" component={Relatorio}/>
  </ BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();
