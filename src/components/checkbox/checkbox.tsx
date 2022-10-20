import { forwardRef, useEffect, useRef } from 'react'
import { Ui_CheckboxProps } from './type'
import React from 'react'
import { getClassNamesFromAttributes } from '../_utils/css-class-generator'

export const withoutPrefix_checkbox = ['disabled']
export const convertAttributeToClassName_checkbox = [
  ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
  ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
]

const Ui_Checkbox = forwardRef<HTMLInputElement, Ui_CheckboxProps>(
  (
    {
      onChange,
      className,
      name,
      style,
      checked,
      disabled,
      label,
      indeterminate,
      labelPosition,
      ...rest
    }: Ui_CheckboxProps,
    ref
  ) => {
    const refElem = useRef<HTMLInputElement>(null) || ref

    const { large, medium, small, tiny, mini } = rest

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_checkbox,
      withoutPrefix: withoutPrefix_checkbox,
      addPrefix: 'checkbox',
    })

    useEffect(() => {
      if (refElem?.current && indeterminate) {
        refElem.current.indeterminate = true
      }
    }, [])

    const CheckboxElement = (
      <input
        ref={ref}
        disabled={disabled ? true : false}
        type="checkbox"
        checked={checked}
        style={style}
        className={`
      checkbox${' '} ${classAttributes} 
      ${(className as string) || ''}
      `}
        {...{ onChange, name }}
      />
    )

    if (label) {
      let textSize = 'text-xl'
      if (large) textSize = textSize
      if (medium) textSize = 'text-base'
      if (small) textSize = 'text-sm'
      if (tiny) textSize = 'text-xs'
      if (mini) textSize = 'text-xxs'

      if (labelPosition === 'right') {
        return (
          <label className="cursor-pointer label">
            {CheckboxElement}
            <span className={`label-text pl-3 ${textSize}`}>{label}</span>
          </label>
        )
      } else {
        return (
          <label className="cursor-pointer label">
            <span className={`label-text pr-3 ${textSize}`}>{label}</span>
            {CheckboxElement}
          </label>
        )
      }
    }

    return CheckboxElement
  }
)

export default Ui_Checkbox
