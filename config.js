import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['967776643812', '967776643812', true],
  ['967776643812']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['967776643812', '967776643812']
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
global.packname = 'لوسيفار' 
global.author = 'بوت لوسيفار' 

//--info FG
global.botName = 'لوسيفار'
global.fgig = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR' 
global.fgsc = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR' 
global.fgyt = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR' 

//--- Grupos WA
global.id_canal = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR' //-ID de canal de WhatsApp
global.fgcanal = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR'
global.bgp = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR'
global.bgp2 = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR'
global.bgp3 = 'https://chat.whatsapp.com/GcDlcb8r5QGAdgIH0VjfPR' //--GP NSFW

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
