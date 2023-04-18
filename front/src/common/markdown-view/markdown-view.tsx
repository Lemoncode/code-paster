import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  value: string;
  className?: string;
}

export const MarkdownViewer: React.FC<Props> = (props) => {
  return (
    <div className={props.className}>
      <ReactMarkdown children={props.value} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
