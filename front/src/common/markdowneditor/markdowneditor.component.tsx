import React from "react";
import { basicSetup, EditorView } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { useEffect, useRef } from 'react'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { tags } from '@lezer/highlight'
import { syntaxHighlighting, HighlightStyle} from '@codemirror/language'
import * as classes from './markdowneditor.styles';

const stylesEditor = HighlightStyle.define([
  { tag: tags.heading1, class: classes.headerH1},
  { tag: tags.heading2, class: classes.headerH2},
  { tag: tags.heading3, class: classes.headerH3},
])

interface Props {
  value: string
  onChange?: (value: string) => void
}

export const MarkdownEditor: React.FC<Props> = (props) => {

  const refContainer = useRef(null)
  const editorView = useRef<EditorView>()

  useEffect(() => {
    if (!refContainer.current) return

    editorView.current = new EditorView({
      state: EditorState.create({
      doc: props.value,
      extensions: [
        basicSetup,
        markdown({
          codeLanguages: languages,
        }),
        syntaxHighlighting(stylesEditor),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          props.onChange(update.state.doc.toString())
        }),
        EditorView.theme({
          '&': {
            border: '1px solid #ccc',
            height: '226px',
          },
        }),
      ]
      }),
        parent: refContainer.current
      });
      
    return () => editorView.current?.destroy()
    }, []);

    useEffect(() => {
      const state = editorView.current?.state
      const currentValue = state?.doc.toString()
      if (state && currentValue !== props.value) {
        const update = state.update({
          changes: { from: 0, to: state.doc.length, insert: props.value }
        });
        editorView.current?.update([update])
      }
    }, [props.value]);

  return <div ref={refContainer} className={classes.textContainer} />
};
