import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['+967734144053', '967734144053', true],
  ['967734144053']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['967734144053', '967734144053']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠' 
global.author = '-بوت ڪَباؘس丫:١⁶𝑘𝑎𝑝𝑎𝑠' 

//--info FG
global.botName = 'ڪَباؘسِ丫:١⁶𝑘𝑎𝑝𝑎𝑠'
global.fgig = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA==' 
global.fgsc = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA==' 
global.fgyt = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA=='
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA==' 

//--- Grupos WA
global.id_canal = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA==' //-ID de canal de WhatsApp
global.fgcanal = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA=='
global.bgp = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA=='
global.bgp2 = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA=='
global.bgp3 = 'https://www.instagram.com/kskk721?igsh=OGQ5ZDc2ODk2ZA==' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
