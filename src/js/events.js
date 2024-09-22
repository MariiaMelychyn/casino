document.getElementById('liveEventsButton').addEventListener('click', function() {
    const audio = document.getElementById('click-sound');
    if (audio) {
      audio.play().catch(function(error) {
        console.error("Помилка відтворення аудіо:", error);
      });
    }
  });