import Ui_MockupPhone from './../../../mockup-phone'
import Ui_Artboard from './../../../artboard'
import React from 'react'

export const mockupPhoneCodeExamples = [
  {
    id: 'mockupPhone',
    title: 'Mockup phone simple',
    preview: (
      <>
        <Ui_MockupPhone>
          <Ui_Artboard demo phone1>
            Hi.
          </Ui_Artboard>
        </Ui_MockupPhone>
      </>
    ),
    codeExample: `
<Ui_MockupPhone>
  <Ui_Artboard demo phone1>
    Hi.
  </Ui_Artboard>
</Ui_MockupPhone>`,
  },
  {
    id: 'mockupPhone',
    title: 'Mockup phone simple',
    preview: (
      <>
        <Ui_MockupPhone border="primary">
          <Ui_Artboard demo phone1>
            Hi.
          </Ui_Artboard>
        </Ui_MockupPhone>
      </>
    ),
    codeExample: `
<Ui_MockupPhone border="primary">
  <Ui_Artboard demo phone1>
    Hi.
  </Ui_Artboard>
</Ui_MockupPhone>`,
  },
]
