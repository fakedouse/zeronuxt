import fs from 'fs'
import path from 'path'
const schemes = {}
export default (async () => {
  const dir = await fs.promises.opendir('./')
  for await (const dirent of dir) {
    const schema = dirent.name.split('Schema')[0]
    if (schema) {
      schemes[schema] = await import(path.join(__dirname, schema))
    }
  }
  return schemes
})()
