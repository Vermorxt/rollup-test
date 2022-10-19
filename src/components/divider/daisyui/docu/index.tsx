import React, { FC } from 'react'
import Code from '../../../_docu-components/code'
import DocuAttributes from '../../../_docu-components/docu-attributes'
import DocuWrapper from '../../../_docu-components/docu-wrapper'
import { dividerCodeExamples } from './divider-code'

export const Ui_Docu_Divider: FC = props => {
  console.log('divider docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [
      { name: 'Ui_Divider', description: 'Divider element', type: 'Component' },
      { name: 'horizontal', description: 'Divider with horizontal alignment', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Divider</h1>
      <p>Divider will be used to separate content vertically or horizontally.</p>

      <DocuAttributes {...{ attributes }} />

      {dividerCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
