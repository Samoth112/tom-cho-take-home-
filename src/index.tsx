import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {saveState, loadState} from './localStorage';
import reportWebVitals from './reportWebVitals';

const persistedState = loadState();
const persistedTitle = persistedState ? persistedState.pageTitle : "Guidelines For Inkjet Cartridge Refill"; 
saveState({pageTitle: persistedTitle, tempTitle: persistedTitle})
document.title = persistedTitle;

window.addEventListener("beforeunload", function(e) {
  const textBox = document.getElementById("textarea") as HTMLTextAreaElement;
  textBox.value = persistedTitle;
})

document.addEventListener("keyup", function(e) {
  e.preventDefault();
  const slug = document.getElementById("slug") as HTMLParagraphElement;
  if(slug) {
    slug.style.display = "block"
  };
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
