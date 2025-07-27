// Topbar minimize on scroll
let lastScrollY = 0;
const topbar = document.querySelector('.topbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    topbar.classList.add('minimized');
  } else {
    topbar.classList.remove('minimized');
  }
  lastScrollY = window.scrollY;
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function searchFacts(query) {
  const facts = document.querySelectorAll("#fact-list li");
  query = query.toLowerCase();
  facts.forEach(fact => {
    const text = fact.textContent.toLowerCase();
    fact.style.display = text.includes(query) ? "block" : "none";
  });
}

// 💭 Comments logic
const commentList = document.getElementById("static-comments");
const sampleUsernames = [
  "CodeFox88", "BinaryBard", "JSWizard", "AdaFan42", "BitNinja",
  "LoopQueen", "TechieTom", "ScriptSage", "ConsoleKing", "PixelPilot",
  "BugSquasher", "TagMaster", "ByteBuddy", "SyntaxSamurai", "HTMLHero"
];
const sampleComments = [
  "HTML was never a programming language 😆",
  "Ada Lovelace definitely deserves more hype 👏",
  "I wish JavaScript had a slower origin story… it’s wild 🧠",
  "Fun fact: Ada’s notes were longer than the original paper!",
  "JavaScript in 10 days? No wonder we have quirky syntax 😅",
  "HTML's identity crisis is too real.",
  "Ada was coding before it was cool!",
  "Imagine inventing algorithms in the 1800s 🤯",
  "That JS anecdote is legendary.",
  "Could someone make a movie about Ada already?",
  "HTML's drama arc feels oddly relatable.",
  "JS: Built in haste, maintained in chaos 😅",
  "There’s elegance in HTML… just misunderstood.",
  "Team Ada forever 💻",
  "JS facts are like urban legends sometimes.",
  "Historical trivia makes tech way more human.",
  "I feel smarter already reading this 😎",
  "Now I want to start coding again."
];

// Modified comment array to pair with usernames
const commentsWithUsers = sampleComments.map(comment => ({
  username: sampleUsernames[Math.floor(Math.random() * sampleUsernames.length)],
  text: comment
}));

let currentIndex = 0;
function rotateComments() {
  commentList.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const { username, text } = commentsWithUsers[(currentIndex + i) % commentsWithUsers.length];
    const li = document.createElement("li");
    li.innerHTML = `<strong>${username}:</strong> ${text}`;
    commentList.appendChild(li);
  }
  currentIndex = (currentIndex + 1) % commentsWithUsers.length;
}
setInterval(rotateComments, 5000);
rotateComments();

function addComment() {
  const input = document.getElementById("new-comment");
  const newText = input.value.trim();
  if (newText) {
    const randomUser = sampleUsernames[Math.floor(Math.random() * sampleUsernames.length)];
    commentsWithUsers.push({ username: randomUser, text: newText });
    input.value = "";
    rotateComments();
  }
}
