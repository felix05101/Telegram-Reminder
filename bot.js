const TelegramBot = require('node-telegram-bot-api');

const token = '6222220529:AAH7Wr6SXolETerbUEqy77PJOlxGAHEG5Lw';

const bot = new TelegramBot(token, { polling: true });

let isReminding = false;

bot.onText(/\/remind/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Reminder started');
  isReminding = true;

  const interval = setInterval(() => {
    if (isReminding) {
      bot.sendMessage(msg.chat.id, 'Erreichbar?');
    } else {
      clearInterval(interval);
    }
  }, 5000);
});

bot.onText(/\/unremind/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Reminder stopped');
  isReminding = false;
});
