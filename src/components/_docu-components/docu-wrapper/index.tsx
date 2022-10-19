import { FC, HTMLAttributes, ReactNode } from 'react'
import React from 'react'

interface DocuWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const DocuWrapper: FC<DocuWrapperProps> = ({ children, className }) => {
  const skipNormalizeCssForTailwind_className = 'prose max-w-none'

  return (
    <div className={`docu-wrapper ${skipNormalizeCssForTailwind_className} ${className ? className : ''}`}>
      {children}
    </div>
  )
}

export default DocuWrapper
