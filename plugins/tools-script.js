import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ لايوجد اسكربت قيد التطوير*

▢ Git : ${_package.homepage}
`.trim())
    
}

handler.help = ['اسكربت']
handler.tags = ['tools']
handler.command = ['سكربت', 'git', 'script'] 

export default handler
