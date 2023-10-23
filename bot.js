const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const TOKEN = "6792689176:AAG8RgJm1U7csyFQEjD_B4TVGFTnTMZdehY"
const bot = new Telegraf(TOKEN)
// Listen for the `new_chat_member` event
const welcomeMessages = {
    en: [
      'Welcome, {ctx.from.username}!',
      'Hey {ctx.from.username}, welcome to the party!',
      'Glad to have you here, {ctx.from.username}!',
      'Welcome to the best group on Telegram, {ctx.from.username}!',
      'We\'re so excited to have you join us, {ctx.from.username}!',
      'Welcome to the group, {ctx.from.username}! We\'re always looking for new members to add to the conversation.',
      'We\'re glad you\'re here, {ctx.from.username}! We hope you\'ll find our group to be a valuable resource.',
      'Welcome to the group, {ctx.from.username}! We\'re always looking for new members to help us grow the community.',
      'We\'re excited to have you on board, {ctx.from.username}! We hope you\'ll share your knowledge and expertise with the group.',
      'Welcome to the group, {ctx.from.username}! We\'re always looking for new members to contribute to the fun.',
      'Welcome to the group, {ctx.from.username}! We\'re glad you\'re here to join in on the madness.',
      'Welcome to the group, {ctx.from.username}! We hope you\'ll enjoy your time with us.',
      'Welcome to the group, {ctx.from.username}! We\'re glad you\'re here to be a part of the family.',
    ],
  };
  
  // Create a function to check the welcome message for any violations
function checkWelcomeMessage(message) {
    // TODO: Implement this function to check the welcome message for any violations of the safety guidelines
  
    // Return a boolean value indicating whether or not the message violates any of the safety guidelines
    return false;
  }
  
  // Create a function to generate a creative welcome message
  function generateCreativeWelcomeMessage(user) {
    // TODO: Implement this function to generate a creative welcome message for the given user
  
    // Return a creative welcome message
    return `Welcome to the group, ${ctx.from.username}! We're glad to have you here!`;
  }
  
  // Listen for the `new_chat_member` event
  bot.on('new_chat_member', async (ctx) => {
    // Get the new user's language code
    const userLanguageCode = ctx.message.new_chat_member.languageCode;
  
    // If the new user's language code is not supported by the bot, use the default language code (English)
    const languageCode = welcomeMessages[userLanguageCode] ? userLanguageCode : 'en';
  
    // Get a random welcome message for the user's language
    const welcomeMessage = welcomeMessages[languageCode][Math.floor(Math.random() * welcomeMessages[languageCode].length)];
  
    // Check the welcome message for any violations
    const isSafeMessage = checkWelcomeMessage(welcomeMessage);
  
    // If the welcome message is safe, send it to the new user
    if (isSafeMessage) {
      ctx.sendMessage(welcomeMessage.replace('{ctx.from.first_name}', ctx.message.new_chat_member.firstName));
    } else {
      // If the welcome message is not safe, send a creative welcome message
      ctx.sendMessage(generateCreativeWelcomeMessage(ctx.message.new_chat_member));
    }
  });
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))