import fs from 'fs'
import path from 'path'
const schemes = {}
export default (async () => {
    const dir = await fs.promises.opendir('./')
    for await (const dirent of dir) {
        console.log(dirent.name)
        const schema = dirent.name.split('Schema')[0]
        if (schema) {
            schemes[schema] = import(
                path.join(__dirname, schema)
            ).catch((rej) => console.error(rej))
        }
    }
    return schemes
})()
