import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import { saveState, loadState } from './localStorage';

export default function EditForm(): React.ReactElement {
  const persistedState = loadState();
  const [tempTitle, setTempTitle] = useState(persistedState.tempTitle);
  const [pageTitle, setPageTitle] = useState(persistedState.pageTitle);
  let [redirect, setRedirect] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setTempTitle(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(redirect);
    e.preventDefault();
    saveState({tempTitle: tempTitle, pageTitle: tempTitle});
    setPageTitle(tempTitle);
    setRedirect(true);
    console.log(redirect);
  }

  useEffect(() => {
    // I added this eventListener to listen for page reloads, so that when a user refreshes the page for any reason while editing the title
    // but before hitting save, the current title, and not the slug, will reappear in the form input.
    window.addEventListener("beforeunload", function(e) {
      // At this point on initial render, textArea will be null, since nothing has been rendered yet
      const textArea = document.getElementById("textarea") as HTMLTextAreaElement;
      if(textArea) {
        textArea.value = persistedState.pageTitle;
      };
    })

    document.addEventListener("keyup", function(e) {
      e.preventDefault();
      const slug = document.getElementById("slug") as HTMLParagraphElement;
      if(slug) {
        slug.style.display = "block"
      };
    });
    const cancelLink = document.getElementsByClassName("submit")[0] as HTMLInputElement;
    if(tempTitle.length === 0) {
      cancelLink.style.background = "#9B9B9B";
      cancelLink.style.color = "#FFFFFF";
      cancelLink.disabled = true;
    } else {
      cancelLink.style.background = "#5FCC9C";
      cancelLink.style.color = "#FFFFFF";
      cancelLink.disabled = false;
    }
  })

  if(redirect) {
    return(
      <Redirect to="/" />
    )
  }
  return(
    <form id="edit-form" className="edit-form" onSubmit={submitHandler}>
      <textarea id="textarea" onChange={changeHandler} value={tempTitle} />
      <p id="slug">slug: {tempTitle}</p>
    </form> 
  );
};


