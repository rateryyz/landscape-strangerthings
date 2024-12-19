document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("music");
  const switchButton = document.getElementById("switch-theme-button");

  switchButton.addEventListener("click", switchTheme);

  function switchTheme() {
      const body = document.body;
      const audio = document.getElementById("music");
      
      body.classList.toggle("dark-theme");
      body.classList.toggle("light-theme");

      const isDarkTheme = body.classList.contains("dark-theme");
      audio.src = `src/musics/${isDarkTheme ? "inverted-world.mpeg" : "normal-world.mpeg"}`;
      audio.play();
      audio.volume = 0.2;
  }
});

