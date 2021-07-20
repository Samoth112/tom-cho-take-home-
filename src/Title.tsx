import React, {useEffect, PropsWithChildren} from 'react';
import {loadState} from './localStorage';

interface TitleProps {
  title: string;
}

export default function Title({title}: PropsWithChildren<TitleProps>): React.ReactElement {
  // On initial load, just as in App.tsx, loadState will return undefined,
  // but it is important to reload state when this component renders
  // in order to keep the displayed title current.
  // Again, a ternary operater is used to catch this.
  // A title prop is passed in from the parent, App.tsx, and then used
  // to compare the currentTitle with the one saved in localStorage.
  // If the title prop is not equal to the most current tile saved in
  // persistedTitle, update the value.
  // localStorage will always hold the most current title because the submitHandler in EditForm.tsx
  // will save it with saveState.
  // The Title component will render when App.tsx first renders and after a user
  // hits save and redirects back to "/," however App.tsx will not rerender in this second instance,
  // since App is the current rendered component, meaning the value of the title prop will also not be updated,
  // so always load and check against the persistedTitle.
  const persistedTitle = loadState() ? loadState().pageTitle : undefined;
  title = persistedTitle && title !== persistedTitle ? persistedTitle : title;

  useEffect(() => {
    // Since the above check is essentially looking for the current title
    // use this component to also update the document title.
    if(title !== document.title) {
      document.title = title;
    }
  });

  return(
    <p className="title">
      {/* 400 is the heaviest weight available */}
      {title}
    </p>
  )
}