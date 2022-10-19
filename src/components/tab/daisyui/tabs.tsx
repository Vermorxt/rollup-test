import { FC, forwardRef } from 'react'
import { getClassNamesFromAttributes } from '../../_utils/css-class-generator'
import { Ui_TabProps } from '../type'
import React from 'react'

const Ui_Tabs: any = forwardRef<HTMLDivElement, Ui_TabProps & { Tab: FC<Ui_TabProps> }>(
  ({ children, className, id, boxed, style, ...rest }, ref) => {
    return (
      <div
        className={`
          tabs
          ${className ? className : ''}
          ${boxed ? 'tabs-boxed' : ''} 
        `}
        id={id}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export const Tab: any = forwardRef<HTMLAnchorElement, Ui_TabProps>(
  ({ children, className, style, active, bordered, lifted, boxed, ...rest }, ref) => {
    const convertAttributeToClassName_tab = [
      ['large', 'medium', 'small', 'tiny', 'mini'], // NOTE: attributes to convert
      ['lg', 'md', 'sm', 'xs', 'xxs'], // NOTE: attributes translated based on attributes above
    ]

    const classAttributes = getClassNamesFromAttributes({
      names: rest,
      convert: convertAttributeToClassName_tab,
      withoutPrefix: [],
      addPrefix: 'tab',
    })

    return (
      <a
        className={`tab 
        ${classAttributes}
        ${className ? className : ''} 
        ${active ? 'tab-active' : ''} 
        ${bordered ? 'tab-bordered' : ''} 
        ${lifted ? 'tab-lifted' : ''} 
      `}
        style={style}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

Ui_Tabs.Tab = Tab

export default Ui_Tabs
