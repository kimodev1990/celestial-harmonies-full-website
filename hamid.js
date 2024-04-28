const bio = document.getElementById("choose-bio-hamid");
const songs = document.getElementById("choose-songs-hamid");
const bioContent = document.getElementById("bio-hamid");
const songsContent = document.getElementById("songs-hamid");
const ebayClick = document.getElementById("ebay-hamid");
const amazonClick = document.getElementById("amazon-hamid");
const downloadClick = document.getElementById("download-hamid");
const ebayPop = document.getElementById("ebay-popup");
const amazonPop = document.getElementById("amazon-popup");
const downloadPop = document.getElementById("download-popup");

document.addEventListener("click", (e) => {
  if (e.target.closest("#ebay-hamid")) {
    ebayPop.classList.remove("hidden");
  } else if (e.target.closest("#amazon-hamid")) {
    amazonPop.classList.remove("hidden");
  } else if (e.target.closest("#download-hamid")) {
    downloadPop.classList.remove("hidden");
  } else {
    ebayPop.classList.add("hidden");
    amazonPop.classList.add("hidden");
    downloadPop.classList.add("hidden");
  }
});

ebayClick.addEventListener("click", () => {
  ebayPop.classList.remove("hidden");
  amazonPop.classList.add("hidden");
  downloadPop.classList.add("hidden");
});

amazonClick.addEventListener("click", () => {
  ebayPop.classList.add("hidden");
  amazonPop.classList.remove("hidden");
  downloadPop.classList.add("hidden");
});

downloadClick.addEventListener("click", () => {
  ebayPop.classList.add("hidden");
  amazonPop.classList.add("hidden");
  downloadPop.classList.remove("hidden");
});

bio.addEventListener("click", () => {
  bioContent.classList.remove("hidden");
  songsContent.classList.add("hidden");
  bio.classList.add("change-cyan-text");
  bio.classList.remove("change-yellow-text");
  songs.classList.remove("change-cyan-text");
  songs.classList.add("change-yellow-text");
});

songs.addEventListener("click", () => {
  songsContent.classList.remove("hidden");
  bioContent.classList.add("hidden");
  bio.classList.remove("change-cyan-text");
  bio.classList.add("change-yellow-text");
  songs.classList.add("change-cyan-text");
  songs.classList.remove("change-yellow-text");
});
