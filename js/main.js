let before = document.getElementById("before");
let liner = document.getElementById("liner");
let command = document.getElementById("typer");
let textarea = document.getElementById("texter");
let terminal = document.getElementById("terminal");

let git = 0;
let pw = false;
let commands = [];

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);


//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
 
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine(
        "[Huzbi@naruhina]~$" + command.innerHTML,
        "no-animation",
        0
      );
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }

  const commandFunctions = {
    help: () => loopLines(help, "color2 margin", 80),
    aboutme: () => loopLines(aboutme, "color2 margin", 80),
    social: () => loopLines(social, "color2 margin", 80),
    history: () => {
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
    },
    email: () => {
      addLine(`Opening mailto:<a href="${email}"> huzbi@protonmail.com</a>...`, "color2", 80);
      newTab(email);
    },
    clear: () => {
      setTimeout(function () {
        terminal.innerHTML = 
        '<a id="before"><div class="pt-2"><span class="text-[#7d82d7db] ">Welcome to my portfolio! — Type <span class="command text-[#75e1e7]">help</span> for a list of supported commands.</span></div></a>';
        before = document.getElementById("before");
      }, 1);
    },
    weeb: () => {
      addLine("Opening Weeb Commands...", "color2", 0);
      addLine("If you're a true weeb, you'll find those commands! (work in progress)", "color2", 0);
    },
    banner: () => {
      loopLines(banner, "", 80);
    },
    sudo: () => {
      addLine("Li'l boy, you ain't an admin 😤...", "color2", 0);
      newTab(sudo);
    },
    // socials
    mal: () => {
      addLine("Opening MyAnimeList...", "color2", 80);
      newTab(mal);
    },
    twitter: () => {
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
    },
    discord: () => {
      addLine("Opening Discord...", "color2", 0);
      newTab(Discord);
    },
    instagram: () => {
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
    },
    github: () => {
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
    },
    // huzbi's profile
    huzbi: () => {
      addLine("Opening Huzbi's Profile...", "color2", 0);
      newTab(huzbi);
    },
    // weeb commands
    hentai: () => {
      addLine("Opening Hentai 😏 Command...", "color2", 0);
      newTab(hentai);
    },
    // educational vloggers
    education: () => {
      addLine("Opening Education Command...", "color2", 0);
      newTab(education);
    },
    // pwd command
    pwd: () => {
      addLine("home/huzbi", "color2", 0);
    },
    // ls command
    ls: () => {
      addLine("I ain't showing you my files!", "color2", 0);
    },
    // movie site command
    movie: () => {
      addLine("Opening HuzStream+...", "color2", 0);
      newTab(movie);
    }
  };
function commander(cmd) {
  const commandFunc = commandFunctions[cmd.toLowerCase()];

  if (commandFunc) {
    commandFunc();
  } else {
    addLine(
      '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
      "error",
      100
    );
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}
