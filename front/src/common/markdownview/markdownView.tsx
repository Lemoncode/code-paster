import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  doc: string;
}

export const MarkdownView: React.FC<Props> = (props) => {
  return (
    <div>
      <ReactMarkdown children={props.doc} remarkPlugins={[remarkGfm]} />
    </div>
  );
};
