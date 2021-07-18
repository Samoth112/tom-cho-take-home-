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
              <div className="edit-link">
                <p>
                  <img src="https://i.imgur.com/XkVcQW2.png"></img>
                  Edit
                </p>
              </div>
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
          <section className="article main-grid__sub-grid">
            <div className="side-meta">
              <div className="author">
                <p className="author-label">
                  Author
                </p>
                <p className="author-name">
                  Art Vandalay
                </p>
              </div>
              <div className="share">
                <p className="share-label">
                  Share
                </p>
                <ul className="social-icons">
                  <li><img src="https://i.imgur.com/KQbHWUj.png"></img></li>
                  <li><img src="https://i.imgur.com/c58NdaG.png"></img></li>
                  <li><img src="https://i.imgur.com/a5J1AiX.png"></img></li>
                </ul>
              </div>
            </div>
            <p className="text">
              Lyra Energy Services LLC (“Lyra”) has developed a new generation liquid hydrogen sulfide (H2S) scavenger (“Vega”). 
              Lyra has developed the Vega scavenger to overcome several shortcomings of conventional liquid scavengers such as triazine. 
              Through extensive laboratory testing in collaboration with Gas Technology Institute (“GTI”), Vega has proven superior to 
              conventional non-regenerative liquid scavengers such as triazine, offering a significant increase in capacity at a reduced cost.
            </p>
            <p className="text">
              Additionally, Vega eliminates foaming and solid formation associated with triazine use, minimizing operational challenges. 
            </p>
            <p className="text">
              Vega utilizes and expands chemistry that is well understood in the gas sweetening processes and uses relatively inexpensive, 
              readily available, safe and established chemicals to ensure effective removal of H2S while reducing operating costs. In this chemistry, 
              H2S sulfur is oxidized to a higher oxidation state, namely S(0), with no or minimal solid formation.
            </p>
            <div className="quote">
              <p className="text">
                GTI has conducted extensive head-to-head laboratory testing of the Vega scavenger versus triazine. In the contact tower setting, Vega 
                demonstrated significant benefits over triazine:
              </p>
            </div>
            <p className="byline">
                - Ronald McDonald
            </p>
            <p className="text">
              Lyra Energy Services LLC (“Lyra”) has developed a new generation liquid hydrogen sulfide (H2S) scavenger (“Vega”). 
              Lyra has developed the Vega scavenger to overcome several shortcomings of conventional liquid scavengers such as triazine. 
              Through extensive laboratory testing in collaboration with Gas Technology Institute (“GTI”), Vega has proven superior to 
              conventional non-regenerative liquid scavengers such as triazine, offering a significant increase in capacity at a reduced cost.
            </p>
            <p className="text">
              Additionally, Vega eliminates foaming and solid formation associated with triazine use, minimizing operational challenges. 
            </p>
            <p className="text">
              Vega utilizes and expands chemistry that is well understood in the gas sweetening processes and uses relatively inexpensive, 
              readily available, safe and established chemicals to ensure effective removal of H2S while reducing operating costs. In this chemistry, 
              H2S sulfur is oxidized to a higher oxidation state, namely S(0), with no or minimal solid formation.
            </p>
          </section>
        </div>
      </Route>
    </Router>
  );
}

export default App;
