import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

function App(): React.ReactElement {
  return (
    <Router>
      <Route exact path="/articles/:id">
        <div className="main-grid">
          <section className="hero main-grid__sub-grid">
            <img className="img img--centered" src="https://i.imgur.com/HVih4Qp.png"></img>
            {/* make this a router to hold the static, edit, and error views */}
            <section className="overlay">
              <p className="date">
                11-20-2018
              </p>
              <Router>
                <Route exact path="/articles/:id">
                  <p className="title">
                    {/* 400 is the heaviest weight available */}
                    Guidelines For Inkjet Cartridge Refill
                  </p>
                </Route>
                <Route path="/articles/:id/edit">

                </Route>
              </Router>
            </section>
          </section>
          <section className="article">

          </section>
        </div>
      </Route>
    </Router>
  );
}

export default App;
