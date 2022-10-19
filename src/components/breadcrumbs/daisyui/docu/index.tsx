import React, { FC } from 'react'
import Code from '../../../_docu-components/code'
import DocuAttributes from '../../../_docu-components/docu-attributes'
import DocuWrapper from '../../../_docu-components/docu-wrapper'
import { breadcrumbsCodeExamples } from './breadcrumbs-code'

export const Ui_Breadcrumbs_Docu: FC = props => {
  console.log('breadcrumbs docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [{ name: 'Ui_Breadcrumbs', description: 'Breadcrumbs element', type: 'Component' }],
  }

  return (
    <DocuWrapper>
      <h1>Breadcrumbs</h1>
      <p>Breadcrumbs helps users to navigate through the website.</p>

      <DocuAttributes {...{ attributes }} />

      {breadcrumbsCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
