import * as React from 'react';

export const useWithRef = function<T>(initialValue: T) {
  const [state, setInternalState] = React.useState(initialValue);
  const ref = React.useRef(initialValue);

  const setState = (value: T) => {
    ref.current = value;
    setInternalState(value);
  };

  return [state, setState, ref] as const;
};
