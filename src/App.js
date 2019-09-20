import React, { Component } from 'react'
import './App.css'
import './css/pure-min.css';
import './css/side-menu.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div id="layout">
      <div id="menu">
          <div className="pure-menu">
              <a className="pure-menu-heading" href="#">Copadubo</a>
              <ul className="pure-menu-list">
                  <li className="pure-menu-item"><Link to="/upload" onclick={global.dataLayer.push({'event': 'menupload','formLocation':'menu'})} className="pure-menu-link">Upload File</Link></li>
                  <li className="pure-menu-item"><Link to="/relatorio" className="pure-menu-link">Reports</Link></li>
              </ul>
          </div>
      </div>
      <div id="main">
              {this.props.children}
      </div>
      </div>
    )
  }
}
export default App
