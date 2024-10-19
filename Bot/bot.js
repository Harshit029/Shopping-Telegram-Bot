const { Telegraf } = require('telegraf')

const TOKEN ='8051392949:AAFhvBmejUawfdCBjAahgKue3TPxAVH06CU';



const bot = new Telegraf(TOKEN);
const web_link= 'https://671396d0c5a1568f5549f3fa--flourishing-gnome-043c14.netlify.app/'

bot.start((ctx) => ctx.reply('Welcome To DIY Shopping',{reply_markup:{keyboard :[[{text:'web app', web_app:{url:web_link}}]]}}))


bot.launch()