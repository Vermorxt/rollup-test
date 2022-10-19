import React, { FC } from 'react'
import Code from '../../../_docu-components/code'
import { Ui_Badge } from '../../../../components'
import DocuAttributes from '../../../_docu-components/docu-attributes'
import DocuWrapper from '../../../_docu-components/docu-wrapper'
import { spinnerCodeExamples } from './spinner-code'

export const Ui_Docu_Spinner: FC = props => {
  console.log('spinner docu')

  const attributes = {
    header: ['Attributes', 'Type', 'Target', 'Values', 'Description'],
    values: [
      { name: 'Ui_Spinner', description: 'Container element', type: 'Component' },
      {
        name: 'color',
        description: 'Color for spinner icon',
        type: 'Modifier',
        values: 'colors or hex values, default: secondary color',
      },
      {
        name: 'strokeWidth',
        description: 'Stroke width for spinner icon',
        type: 'Modifier',
        values: 'numbers',
      },
      {
        name: 'large',
        description: 'Large size for spinner',
        type: 'Modifier',
      },
      {
        name: 'medium',
        description: 'Medium size for spinner',
        type: 'Modifier',
      },
      {
        name: 'small',
        description: 'Small size for spinner',
        type: 'Modifier',
      },
      {
        name: 'tiny',
        description: 'Tiny size for spinner',
        type: 'Modifier',
      },
    ],
  }

  return (
    <DocuWrapper>
      <h1>
        Spinner{' '}
        <Ui_Badge info outline small>
          no daisy ui component
        </Ui_Badge>
      </h1>
      <p>
        Spinner is used to show a loading indicator. It is useful to wrap the spinner, because it is only a svg element.
      </p>

      <DocuAttributes {...{ attributes }} />

      {spinnerCodeExamples.map((example, index) => (
        <Code key={index} {...example} />
      ))}
    </DocuWrapper>
  )
}
