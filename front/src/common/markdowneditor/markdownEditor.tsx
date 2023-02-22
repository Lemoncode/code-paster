import type React from "react";
import { basicSetup, EditorView } from 'codemirror'
import { EditorState } from '@codemirror/state'
import { useEffect, useRef, useState } from 'react'
import { markdown } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { tags } from '@lezer/highlight'
import { syntaxHighlighting, HighlightStyle} from '@codemirror/language'
import classes from './styles.module.css'

const stylesEditor = HighlightStyle.define([
  { tag: tags.heading1, class: classes.h1},
  { tag: tags.heading2, class: classes.h2},
  { tag: tags.heading3, class: classes.h3},
])

interface Props {
  // en vez de eso llamar al value y en el onChange llamar al value actual
  initialDoc: string
  onChange?: (state: EditorState) => void
}

export const MarkdownEditor = <T extends Element>(
  props: Props
  ): [React.MutableRefObject<T | null>, EditorView?] => {
    const refContainer = useRef<T>(null)
    const [editorView, setEditorView] = useState<EditorView>()
    const { onChange } = props

    useEffect(() => {
      if (!refContainer.current) return
      const startState = EditorState.create({
        doc: props.initialDoc,
        extensions: [
          basicSetup,
          markdown({
            codeLanguages: languages,
          }),
          syntaxHighlighting(stylesEditor),
          EditorView.lineWrapping,
          EditorView.updateListener.of((update) => {
            if (update.changes) {
              onChange && onChange(update.state)
            }
          }),
        ],
      });
      const view = new EditorView({
        state: startState,
        parent: refContainer.current,
      });
      setEditorView(view)
      return () => {
        view.destroy()
      }
    }, [refContainer])
  return [refContainer, editorView]
}
