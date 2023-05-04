// alternative of using redux or context stores

import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  // here we want to use logic and data in this custom hook
  //   this way is to use setState only
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listener of listeners) {
      listener(globalState); // the new global state is what we passed to listener
    }
  };

  useEffect(() => {
    // when the component mounts we are pushing the set state to our listener
    if (shouldListen) {
      listeners.push(setState);
    }
    if (shouldListen) {
      // clear the listener when the components unmount
      return () => {
        listeners = listeners.filter((listener) => listener !== setState);
      };
    }
  }, [setState, shouldListen]);
  console.log(globalState);
  return [globalState, dispatch];
};

// this process is equal to creating the providor of all redux reducers in one store
export const initStore = (userActions, initialState) => {
  // if the initial state is there copy its value
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
