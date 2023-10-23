const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const TOKEN = "6792689176:AAG8RgJm1U7csyFQEjD_B4TVGFTnTMZdehY";
const bot = new Telegraf(TOKEN);

// Welcome messages
const welcomeMessages = {
  en: [
    "Welcome, {ctx.from.username}!",
    "Hey {ctx.from.username}, welcome to the party!",
    "Glad to have you here, {ctx.from.username}!",
    "Welcome to the best group on Telegram, {ctx.from.username}!",
    "We're so excited to have you join us, {ctx.from.username}!",
    "Welcome to the group, {ctx.from.username}! We're always looking for new members to add to the conversation.",
    "We're glad you're here, {ctx.from.username}! We hope you'll find our group to be a valuable resource.",
    "Welcome to the group, {ctx.from.username}! We're always looking for new members to help us grow the community.",
    "We're excited to have you on board, {ctx.from.username}! We hope you'll share your knowledge and expertise with the group.",
    "Welcome to the group, {ctx.from.username}! We're always looking for new members to contribute to the fun.",
    "Welcome to the group, {ctx.from.username}! We're glad you're here to join in on the madness.",
    "Welcome to the group, {ctx.from.username}! We hope you'll enjoy your time with us.",
    "Welcome to the group, {ctx.from.username}! We're glad you're here to be a part of the family.",
  ],
};

// Welcome GIFs
const welcomeGIFs = [
  "https://media.giphy.com/media/3o6ZtgbQ7sY8R2y26Q/giphy.gif",
  "https://media.giphy.com/media/l0HlQ4h9wBkwH8y4A/giphy.gif",
  "https://media.giphy.com/media/3o6ZtgbQ7sY8R2y26Q/giphy.gif",
  "https://media.giphy.com/media/l0HlQ4h9wBkwH8y4A/giphy.gif",
];

// Check welcome message for safety violations
function checkWelcomeMessage(message) {
  // TODO: Implement this function to check the welcome message for any violations of the safety guidelines

  // Return a boolean value indicating whether or not the message violates any of the safety guidelines
  return false;
}

// Generate a creative welcome message
function generateCreativeWelcomeMessage(user) {
  // TODO: Implement this function to generate a creative welcome message for the given user

  // Return a creative welcome message
  return welcomeMessages.en[Math.floor(Math.random() * welcomeMessages.en.length)];
}

// Send a random welcome GIF
function sendWelcomeGIF(ctx) {
  // Get a random welcome GIF
  const randomWelcomeGIF = welcomeGIFs[Math.floor(Math.random() * welcomeGIFs.length)];

  // Send the random welcome GIF to the new user
  ctx.sendDocument(randomWelcomeGIF);
}

// Listen for the 'new_chat_member' event
bot.on("new_chat_member", async (ctx) => {
  // Get the new user's username
  const username = ctx.message.new_chat_member.username;

  // Generate a creative welcome message for the new user
  const welcomeMessage = generateCreativeWelcomeMessage(username);

  // Replace the {ctx.from.username} placeholder with the new user's username
  const personalizedWelcomeMessage = welcomeMessage.replace("{ctx.from.username}", username);

  // Send the personalized welcome message to the new user
  ctx.sendMessage(personalizedWelcomeMessage);

  // Send a random welcome GIF to the new user
  sendWelcomeGIF(ctx);
});

// Launch the bot
bot.launch();
