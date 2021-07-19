import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Title from './Title';
import EditForm from './EditForm';
import {saveState, loadState} from './localStorage';
import './App.css';

function App(): React.ReactElement {
  // Normally, I would use a back end to hold article data, like the title, and would not need to initial data like this in index.tsx
  // On initial render, persistedState will always be undefined, since state has not yet ever been saved to localStorage.
  const persistedState = loadState();
  // persistedTitle is initialized to "Guidelines for Inkjet Cartridge Refill."
  const persistedTitle = persistedState ? persistedState.pageTitle : "Guidelines For Inkjet Cartridge Refill"; 
  saveState({pageTitle: persistedTitle, tempTitle: persistedTitle})
  document.title = persistedTitle;

  return (
    <Router>
      <div className="main-grid">
        <section className="hero main-grid__sub-grid">
          <img className="img img--centered" src="https://i.imgur.com/HVih4Qp.png" alt="the Golden Gate Bridge from the shore"></img>
          {/* make this a router to hold the static, edit, and error views */}
          <section className="overlay">
            <p className="date">
              11-20-2018
            </p>
              <Route exact path="/">
                <a href="/articles/1/edit">
                  <p className="edit-link">
                    <img src="https://i.imgur.com/XkVcQW2.png" alt=""></img>
                    Edit
                  </p>
                </a>
                <Title />
              </Route>
              <Route path="/articles/:id/edit">
                <ul className="edit-nav">
                  <li>
                    <a href="/">
                      <p className="cancel-link">Cancel</p>
                    </a>
                  </li>
                  <li>
                    <input className="submit" type="submit" form="edit-form" value="Save" />
                  </li>
                </ul>
                <EditForm /> 
              </Route>
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
                  <li><img src="https://i.imgur.com/KQbHWUj.png" alt=""></img></li>
                  <li><img src="https://i.imgur.com/c58NdaG.png" alt=""></img></li>
                  <li><img src="https://i.imgur.com/a5J1AiX.png" alt=""></img></li>
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
    </Router>
  );
}

export default App;
