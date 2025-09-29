'use client'

import React from 'react'
import { useField, TextInput } from '@payloadcms/ui'
import './styles.scss' // Or .css – import your styles

type ColorPickerProps = {
  field: {
    label: string
    required?: boolean
  }
  path: string
}

const ColorPicker: React.FC<ColorPickerProps> = ({ field: { label, required = false }, path }) => {
  const { value, setValue } = useField<string>({ path })

  return (
    <div className="color-picker">
      <label className="field-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="color-picker__row">
        <input
          type="color"
          value={value || '#875b72'} // Default to black if empty
          onChange={(e) => setValue(e.target.value)}
          className="color-picker__input"
        />
        <TextInput
          label=""
          path={path}
          onChange={(e: any) => setValue(e.target.value)}
          value={value || ''}
          className="color-picker__text"
        />
      </div>
    </div>
  )
}

export default ColorPicker
