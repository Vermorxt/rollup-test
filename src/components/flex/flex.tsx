import { forwardRef } from 'react'
import scss from './flex.module.scss'
import { Ui_FlexProps } from './type'
import React from 'react'

export const Ui_Flex = forwardRef<HTMLDivElement, Ui_FlexProps>(
  ({ children, className, ...rest }: Ui_FlexProps, ref?) => {
    return (
      <div
        {...rest}
        className={`
          ${className ? className : ''}
          ${scss.wrapper}`}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Ui_Flex
