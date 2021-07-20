import React, {useEffect, useState, PropsWithChildren} from 'react';
import {Redirect} from 'react-router-dom';
import {saveState, loadState} from './localStorage';

interface EditFormProps {
  title: string;
}

export default function EditForm({title}: PropsWithChildren<EditFormProps>): React.ReactElement {
  // Use useState to initialze tempTitle and pageTitle with the title initialized in App.tsx.
  // tempTitle and pageTitle are set to equal values at first,
  // All changes to the title before hitting save will be held in tempTitle (see changeHandler below).
  // Below, the value of the edit form's textarea element and slug are set to tempTitle.
  // This is to allow the user to make changes, relect those changes in the slug in real time, but not commit
  // to them until hitting save (see submitHandler below).
  let [tempTitle, setTempTitle] = useState(title);
  let [pageTitle, setPageTitle] = useState(title);
  let [redirect, setRedirect] = useState(false);

  debugger;

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Whenever a change is made to the title before hitting save,
    // the tempTitle is updated in state, which will cause a rerender of this component.
    e.preventDefault();
    setTempTitle(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    // When the user is ready to commit to a new title, they hit the save button,
    // which fires the submitHandler callback.
    // The tempTitle, which is kept current by changeHandler, is persisted into localStorage
    // using saveState as both the new pageTitle as well as the new tempTitle, for the next time
    // a user makes an edit.
    e.preventDefault();
    saveState({tempTitle: tempTitle, pageTitle: tempTitle});
    // The pageTitle is then reloaded from localStorage.
    pageTitle = loadState().pageTitle;
    // Finally, the pageTitle and redirect state properties are updated, causing this component to rerender,
    // with redirect now equal to true (see if statement below), which will redirect back to the static view.
    setPageTitle(pageTitle); // I'm not sure how necessary this is.
    setRedirect(true);
  }

  useEffect(() => {
    // I added this eventListener to listen for page reloads, so that when a user refreshes the page for any reason while editing the title
    // but before hitting save, the current title, and not the slug, will reappear in the form input.
    window.addEventListener("beforeunload", function(e) {
      // At this point on initial render, textArea will be null, since nothing has been rendered yet.
      // Check to see that it exists before giving it a value of the current title.
      const textArea = document.getElementById("textarea") as HTMLTextAreaElement;
      if(textArea) {
        textArea.value = title;
      };
    });

    // This eventListener is on the lookout for the keyup event, when a user edits the title.
    document.addEventListener("keyup", function(e) {
      e.preventDefault();
      const slug = document.getElementById("slug") as HTMLParagraphElement;
      if(slug) {
        slug.style.display = "block"
      };
    });
    // Since what happens in changeHandler rerenders the component,
    // and since useEffect first after each render, this is a good place to
    // check the length of the tempTitle and style and disable or enable the
    // save button accordingly.
    const cancelLink = document.getElementsByClassName("submit")[0] as HTMLInputElement;
    if(tempTitle.length === 0) {
      cancelLink.style.background = "#9B9B9B";
      cancelLink.style.color = "#FFFFFF";
      cancelLink.disabled = true;
    } else {
      cancelLink.style.background = "#5FCC9C";
      cancelLink.style.color = "#FFFFFF";
      cancelLink.disabled = false;
    };
  });

  if(redirect) {
    return(
      <Redirect to="/" />
    );
  };

  return(
    <form id="edit-form" className="edit-form" onSubmit={submitHandler}>
      <textarea id="textarea" onChange={changeHandler} value={tempTitle} />
      <p id="slug">slug: {tempTitle}</p>
    </form> 
  );
};


