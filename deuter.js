const bio = document.getElementById("choose-bio");
const songs = document.getElementById("choose-songs");
const bioContent = document.getElementById("bio");
const songsContent = document.getElementById("songs");

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
