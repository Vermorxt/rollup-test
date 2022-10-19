import { FC } from 'react'
import Code from '../../../_docu-components/code'
import DocuAttributes from '../../../_docu-components/docu-attributes'
import DocuWrapper from '../../../_docu-components/docu-wrapper'
import { paginationCodeExamples } from './pagination-code'
import React from 'react'

export const Ui_Docu_Pagination: FC = props => {
  console.log('button group docu')

  const attributes = {
    header: ['Attributes', 'Type', '', 'Values', 'Description'],
    values: [{ name: 'Ui_ButtonGroup', description: 'ButtonGroup element', type: 'Component' }],
  }

  return (
    <DocuWrapper>
      <h1>Pagination</h1>
      <p>Pagination is a group of buttons that allow the user to navigate between a set of related content.</p>

      <DocuAttributes {...{ attributes }} />

      {paginationCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
