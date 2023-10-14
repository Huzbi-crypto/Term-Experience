const mal = "https://myanimelist.net/profile/Huzbi";
const twitter = "https://twitter.com/HuzbiC";
const discord = "https://discordapp.com/users/653883645546856448";
const instagram = "https://www.instagram.com/Huzbinaru/";
const github = "https://github.com/Huzbi-crypto";
const huzbi = "https://huzbi.vercel.app/";
const sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
const email = "mailto:huzbi@protonmail.com";
const hentai = "https://www.youtube.com/watch?v=Jrg9KxGNeJY";
const art = "https://huzbi-artgallery.vercel.app/";
const artp = "https://huzbi-artperspective.vercel.app/";
const education = "https://huzbi-education.obinode.app/";
const movie = "https://huzstream.obinode.app/";
const code = "https://github.com/Huzbi-crypto/Term-Experience";
const image_gen = "https://huzbi-animeartai.vercel.app/";

aboutme = [
  "<br>",
  "<span class='underline'>Yo, it's Huzbi!👋</span>",
  "<br>",
  "<li>🔭 A weeb learning to make websites</li>",
  "<li>🌱 My fields of interests are</li>",
  `<pre class="whitespace-pre-wrap">
        - Fullstack Development
        - ML and AI
        - Anime, Manga, and Books</pre>`,
  `<li><pre class="whitespace-pre-wrap">⌛ Time is limited and so much is left. I'll have to work harder to 
   read more manga and do more projects!
   I love learning new stuff and using it to improve my skills.
   You can browse around my website to find out more stuff and probably 
   some hidden stuff for weebs 😏 (coming soon)...
   *Try using a social command.`,
  `<li><pre class="whitespace-pre-wrap">👨‍💻 Check out my github profile to view other stuff I've created.
   *Use the github command to take a look at my GitHub profile.`,
  `<li>📫 Contact me at <a href= "${email}">huzbi@protonmail.com</a>`,
  "<br>",
];

function createSocialLink(name, url) {
  return `${name} <a href="${url}" target="blank">${url}</a>`;
}

social = [
  "<br>",
  createSocialLink("Mal", mal),
  createSocialLink("Twitter", twitter),
  createSocialLink("Discord", discord),
  createSocialLink("Instagram", instagram),
  createSocialLink("GitHub", github),
  "<br>",
];

const commands_desc = {
  aboutme: 'Displays Who I am?',
  social: 'Lists social networks.',
  email: 'To send me an email.',
  history: 'View command history.',
  sudo: 'Try it out for yourself.',
  clear: 'Clear terminal.',
  weeb: 'Find weeb commands. 😉',
};
function createHelpText(commands) {
  let helpText = '<br><pre class="whitespace-pre-wrap">';

  for (const command in commands) {
    helpText += `<span class="command">${command}</span>     
    <span class="command">↳</span>&nbsp;${commands_desc[command]}\n`;
  }

  helpText += "</pre><br>";

  return [helpText];
}
help = createHelpText(commands_desc);

banner = [
  `<div class="pt-2"><span class="text-[#7d82d7db] ">Welcome to Exclusive Terminal Experience! — Type <span class="command text-[#75e1e7]">help</span> for a list of supported commands.</span></div>`,
];
