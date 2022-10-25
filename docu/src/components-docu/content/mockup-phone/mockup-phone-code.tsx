import { Ui_MockupPhone, Ui_Artboard } from '@vermorxt/ui_pandora'

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
