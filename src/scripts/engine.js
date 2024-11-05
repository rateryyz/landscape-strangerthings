window.addEventListener("click", function () {
  const audio = document.getElementById("music");
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
  }
});

function switchTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const theme = document.body.classList.contains("dark-theme")
    ? "dark-theme"
    : "light-theme";
  const music =
    theme === "light-theme" ? "normal-world.mpeg" : "inverted-world.mpeg";

  const audio = document.getElementById("music");
  audio.src = `src/musics/${music}`;
  audio.play();
  audio.volume = 0.2;
}
