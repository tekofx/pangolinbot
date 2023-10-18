import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => {
  ctx.reply('Welcome to my bot!');
});

bot.help((ctx) => {
  ctx.reply('This is a help message.');
});

bot.command('hello', (ctx) => {
  ctx.reply('Hello!');
});

bot.on('text', (ctx) => {
  ctx.reply(`You said: ${ctx.message.text}`);
});

bot.launch();
console.log("Running bot")
