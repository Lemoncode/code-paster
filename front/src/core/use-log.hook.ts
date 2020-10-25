import React from 'react';

export const useLog = () => {
  const [log, internalSetLog] = React.useState('');
  const logRef = React.useRef('');

  const appendToLog = (value: string) => {
    const newText = logRef.current
      ? `${logRef.current}\n${value} `
      : `${value} `;
    internalSetLog(newText);
    logRef.current = newText;
  };

  const setLog = (content: string) => {
    if (content !== undefined && content !== null) {
      internalSetLog(content);
      logRef.current = content;
    }
  };

  return { log, appendToLog, logRef, setLog };
};
