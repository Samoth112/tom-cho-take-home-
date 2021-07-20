import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Title from './Title';
import EditForm from './EditForm';
import {loadState} from './localStorage';
import './App.css';

function App(): React.ReactElement {
  // Since this is the "initial point of entry," in regards to components,
  // initialize persistedTitle to the original article title, "Guidelines for Inkjet Cartridge Refill."
  // On initial render, persistedState will be undefined (see localStorage.ts), since state has yet to be
  // saved to localStorage.
  // The ternary operator will catch this scenario and do the initialization if persistedState is undefined.
  // Then set the document title to persistedTitle.
  // On subsequent renders, although I don't think this current setup will require any for App.tsx,
  // pesistedTitle, and therefore document.title, will draw from persistedState. 
  const persistedState = loadState();
  const persistedTitle = persistedState ? persistedState.pageTitle : "Guidelines For Inkjet Cartridge Refill"; 
  document.title = persistedTitle;

  return (
    <div className="main-grid">
      {/* Here, the idea is to mimic css subgrid, by making main-grid's grid items themselves grids that are
          identical to the main-grid.
      */}
      <section className="hero main-grid__sub-grid">
        <img className="img img--centered" src="https://i.imgur.com/HVih4Qp.png" alt="the Golden Gate Bridge from the eastern shore"></img>
        <section className="overlay">
          <p className="date">
            11-20-2018
          </p>
            {/* Router will manage views */}
            <Router>
              <Route exact path="/">
                <a href="/articles/1/edit">
                  <p className="edit-link">
                    <img src="https://i.imgur.com/XkVcQW2.png" alt=""></img>
                    Edit
                  </p>
                </a>
                {/* Made the title into its own component to give it its own logic and props. 
                    It takes a title prop (see Title.tsx)
                */}
                <Title title={persistedTitle} />
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
                {/* Made the edit form into its own component to give it its own logic and props. 
                    It takes a title prop (see EditForm.tsx)
                */}
                <EditForm title={persistedTitle} /> 
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
  );
}

export default App;
