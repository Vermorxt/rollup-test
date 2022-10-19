import Ui_Label from './../../../label'
import React from 'react'
import { DRAWER_ID_SIDEBAR } from '../../../../_constants/main'

export const labelCodeExamples = [
  {
    id: 'label_1',
    title: 'Label sizes',
    preview: (
      <>
        <Ui_Label large>Label</Ui_Label>
        <Ui_Label medium>Label</Ui_Label>
        <Ui_Label small>Label</Ui_Label>
        <Ui_Label tiny>Label</Ui_Label>
      </>
    ),
    codeExample: `
<Ui_Label large>Label</Ui_Label>
<Ui_Label medium>Label</Ui_Label>
<Ui_Label small>Label</Ui_Label>
<Ui_Label tiny>Label</Ui_Label>`,
  },
  {
    id: 'label_2',
    title: 'Label sizes',
    preview: (
      <>
        <Ui_Label as="button" small htmlFor={DRAWER_ID_SIDEBAR}>
          Button
        </Ui_Label>
      </>
    ),
    codeExample: `
const drawerId = '${DRAWER_ID_SIDEBAR}'

<Ui_Label as="button" small htmlFor={drawerId}>
  Button
</Ui_Label>`,
  },
]
