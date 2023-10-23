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

// Check welcome message for safety violations
function checkWelcomeMessage(message) {
  // TODO: Implement this function to check the welcome message for any violations of the safety guidelines

  // Return a boolean value indicating whether or not the message violates any of the safety guidelines
  return false;
}

// Generate a creative welcome message
function generateCreativeWelcomeMessage(user) {
  // Get a random welcome message from the array
  const randomWelcomeMessage = welcomeMessages.en[Math.floor(Math.random() * welcomeMessages.en.length)];

  // Return the random welcome message
  return randomWelcomeMessage;
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
});

// Launch the bot
bot.launch();
