import { FC } from 'react'
import Code from '../../../_docu-components/code'
import DocuAttributes from '../../../_docu-components/docu-attributes'
import DocuWrapper from '../../../_docu-components/docu-wrapper'
import { linkCodeExamples } from './link-code'
import React from 'react'

export const Ui_Docu_Link: FC = props => {
  console.log('link docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Link', description: 'Link element', type: 'Component' },
      { name: 'hover', description: 'Link with underline on hover', type: 'Modifier' },
    ],
  }

  return (
    <DocuWrapper>
      <h1>Link</h1>
      <p>Link helps users to navigate through the website.</p>

      <DocuAttributes {...{ attributes }} />

      {linkCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
