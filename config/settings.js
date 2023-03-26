const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6288223674569'] // no own
global.author = 'NainDev' // nama author 
global.packname = 'Kyzu-BOT' // nama pack sticker
global.namabot = 'Kyzu-BOT' // nama bot mu
global.group = 'https://chat.whatsapp.com/CvuudxG8F1fGkSHMs5hJKl' // grup mu
global.pic = 'https://telegra.ph/file/b9aafbf4f9269f15ecd9b.jpg' // logo lu


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})