import React from 'react';

export const useLog = () => {
  const [log, internalSetLog] = React.useState('');
  const logRef = React.useRef('');

  const appendToLog = (value: string) => {
    const newText = `${logRef.current}\n${value} `;
    internalSetLog(newText);
    logRef.current = newText;
  };

  const setLog = (content: string) => {
    internalSetLog(content);
    logRef.current = content;
  };

  return { log, appendToLog, logRef, setLog };
};
