import { ComponentPropsWithoutRef, CSSProperties, FC, ReactNode } from 'react'
import scss from './flex-grow.module.scss'
import React from 'react'

export interface Ui_FlexGrowProps {
  props?: ComponentPropsWithoutRef<'div'>
  style?: CSSProperties
  children?: ReactNode
  className?: string
  onMouseDown?: any
}

const Ui_FlexGrow: FC<Ui_FlexGrowProps> & { Static: FC<Ui_FlexGrowProps>; Full: FC<Ui_FlexGrowProps> } = props => (
  <div className={scss.flex} {...props}>
    {props?.children}
  </div>
)

const Static: FC<Ui_FlexGrowProps> = props => (
  <div className={scss.static} {...props}>
    {props?.children}
  </div>
)
const Full: FC<Ui_FlexGrowProps> = props => (
  <div className={scss.grow} {...props}>
    {props?.children}
  </div>
)

Ui_FlexGrow.Static = Static
Ui_FlexGrow.Full = Full

export default Ui_FlexGrow
