'use client'
import React from 'react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'

import styles from '@/components/richtext.module.css'

export default function RichTextHtml({ data }: { data: SerializedEditorState | null }) {
  if (!data) return null
  const html = convertLexicalToHTML({ data: data })
  return <div className={styles.richText} dangerouslySetInnerHTML={{ __html: html }} />
}
