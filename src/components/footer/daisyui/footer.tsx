import { FC, forwardRef } from 'react'
import { Ui_FooterProps } from '../type'
import React from 'react'

interface FooterComponent extends FC<Ui_FooterProps> {
  Title: typeof Title
}

const Ui_Footer: FC<Ui_FooterProps> & FooterComponent = ({
  children,
  className,
  id,
  shadow,
  bgColor,
  rounded,
  center,
  itemsCenter,
  style,
}) => {
  return (
    <footer
      className={`
            footer ${className ? className : 'p-10'} 
            ${shadow ? `shadow-${typeof shadow === 'boolean' ? 'xl' : shadow}` : ''}
            ${rounded ? `rounded-${typeof rounded === 'boolean' ? 'box' : rounded}` : ''}
            ${bgColor ? `bg-${bgColor} text-${bgColor}-content` : 'bg-base-300'}
            ${center ? `footer-center` : ''}
            ${itemsCenter ? `items-center` : ''}
            `}
      id={id}
      style={style}
    >
      {children}
    </footer>
  )
}

const Title = forwardRef<HTMLDivElement, Ui_FooterProps>(({ children, className, style }, ref) => {
  return (
    <div className={`footer-title ${className ? className : ''} `} style={style} ref={ref}>
      {children}
    </div>
  )
})

Ui_Footer.Title = Title

export default Ui_Footer
