import Code from '../../../_docu-components/code'
import DocuAttributes from '../../../_docu-components/docu-attributes'
import DocuWrapper from '../../../_docu-components/docu-wrapper'
import React, { FC } from 'react'
import { stackCodeExamples } from './stack-code'

export const Ui_Docu_Stack: FC = props => {
  console.log('stack docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [{ name: 'Ui_Stack', description: 'Stack element', type: 'Component' }],
  }

  return (
    <DocuWrapper>
      <h1>Stack</h1>
      <p>Stack visually puts elements on top of each other.</p>

      <DocuAttributes {...{ attributes }} />

      {stackCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
