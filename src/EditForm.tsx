import React, {useEffect, useState} from 'react';
import { saveState, loadState } from './localStorage';

export default function EditForm(): React.ReactElement {
  const persistedState = loadState();
  const persistedTitle = persistedState.pageTitle; 
  const [tempTitle, setTempTitle] = useState(persistedState.tempTitle);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setTempTitle(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("I work");
  }

  useEffect(() => {
    if(tempTitle.length === 0) {
      const cancelLink = document.getElementsByClassName("submit")[0] as HTMLInputElement;
      cancelLink.style.background = "gray";
      cancelLink.disabled = true; 
    }
  })

  return(
    <form id="edit-form" className="edit-form" onSubmit={submitHandler}>
      <textarea id="textarea" onChange={changeHandler} value={tempTitle} />
      <p id="slug">slug: {tempTitle}</p>
    </form> 
  );
};
