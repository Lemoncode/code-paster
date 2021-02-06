import React from 'react';

export const useAutoScroll = () => {
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = React.useState(true);
  const textAreaRef = React.useRef(null);

  const doAutoScroll = () => {
     if(isAutoScrollEnabled && textAreaRef.current) {
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
    }
  }

  return {isAutoScrollEnabled, setIsAutoScrollEnabled, textAreaRef, doAutoScroll}
}
