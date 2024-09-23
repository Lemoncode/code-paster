import React from 'react';
import { basicSetup, EditorView } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { tags } from '@lezer/highlight';
import { syntaxHighlighting, HighlightStyle } from '@codemirror/language';
import * as classes from './markdown-editor.styles';

const editorStyles = HighlightStyle.define([
  { tag: tags.heading1, class: classes.headerH1 },
  { tag: tags.heading2, class: classes.headerH2 },
  { tag: tags.heading3, class: classes.headerH3 },
]);

interface Props {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  onAppendTrainerTextInternal?: () => void;
}

export const MarkdownEditor: React.FC<Props> = (props) => {
  const { value, onChange, className, onAppendTrainerTextInternal } = props;

  const refContainer = React.useRef(null);
  const editorView = React.useRef<EditorView>();

  React.useEffect(() => {
    if (!refContainer.current) return;

    editorView.current = new EditorView({
      state: EditorState.create({
        doc: value,
        extensions: [
          basicSetup,
          markdown({
            codeLanguages: languages,
          }),
          syntaxHighlighting(editorStyles),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            onChange(update.state.doc.toString());
          }),
          EditorView.theme({
            '&': {
              border: '2px solid #070707',
              height: '300px',
            },
          }),
        ],
      }),
      parent: refContainer.current,
    });

    return () => editorView.current?.destroy();
  }, []);

  const scrollToEnd = () => {
    if (!refContainer.current) return;

    const scrollHeight = refContainer.current.scrollHeight;
    const clientHeight = refContainer.current.clientHeight;
    editorView.current.scrollDOM.scrollTop = scrollHeight - clientHeight;
  };

  React.useEffect(() => {
    const state = editorView.current?.state;
    const currentValue = state?.doc.toString();
    if (state && currentValue !== value) {
      const update = state.update({
        changes: { from: 0, to: state.doc.length, insert: value },
      });
      editorView.current?.update([update]);
      scrollToEnd();
    }
  }, [value]);
  // TODO HAY QUE ARREGLARLO PARA EL SESION
  // ?. si existe llama a la función, de lo contrario, se ignora
  return (
    <div
      role="log"
      id="session"
      ref={refContainer}
      className={className}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && event.ctrlKey) {
          onAppendTrainerTextInternal?.();
        }
      }}
    />
  );
};
