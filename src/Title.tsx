import React, { useEffect } from 'react';
import {loadState} from './localStorage';

export default function Title(): React.ReactElement {
  const title = loadState().pageTitle;

  useEffect(() => {
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