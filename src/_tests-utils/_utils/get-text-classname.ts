export const getTextClassName = (color: string) => {
  const bgTextPreSelector = 'text'
  const bgTextPostSelector = 'content'

  return `.${bgTextPreSelector}-${color}-${bgTextPostSelector}`
}
