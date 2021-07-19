interface PersistedState {
  tempTitle: string;
  pageTitle: string;
}

export const saveState = (state: PersistedState) => {
  // use try/catch block since user's privacy setting may not allow access to sessionStorage
  try {
    // using sessionStorage so that data clears after tab is closed
    sessionStorage.setItem('state', JSON.stringify(state));
  } catch (err) {
    return undefined;
  }
};

export const loadState = () => {
  try {
    const state = sessionStorage.getItem('state');
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch(err) {
    return undefined;
  }
}