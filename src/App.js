
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


import Browse from './containers/browsebeers';
import Favorite from './containers/favoritebeers';

class App extends Component {
  render() {
    return (
      <Router>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">

              <a style={{ color: "white" }} className="navbar-brand" href="#"><h3 >BeerBuddy</h3></a>

            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link" to="/">Browse Beers</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/Favorite">Favorite Beers</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <Route path="/" exact component={Browse} />
        <Route path="/Favorite" component={Favorite} />

      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
  }
}
const mapDispatchToProps = disaptch => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
