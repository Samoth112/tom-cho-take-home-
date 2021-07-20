import React, { useEffect } from 'react';
import {loadState} from './localStorage';

export default function Title(): React.ReactElement {
  const persistedTitle = loadState().pageTitle;
  
  useEffect(() => {
    if(persistedTitle !== document.title) {
      document.title = persistedTitle;
    }
  });

  return(
    <p className="title">
      {/* 400 is the heaviest weight available */}
      {persistedTitle}
    </p>
  )
}