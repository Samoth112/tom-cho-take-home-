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
              <Router>
                <Route exact path="/articles/:id">

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
