const soundBtns = document.querySelectorAll(
  '.sound__btn',
) as NodeListOf<HTMLButtonElement>;

const audioElement = document.querySelector('audio') as HTMLAudioElement;

let currentTime = 0;
let currentSound = '';

soundBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const sound: string = btn.dataset.sound ?? 'summer';

    if (isAudioPlaying()) {
      //Нажата та же кнопка - останавливаем
      if (currentSound === sound) {
        stopSound();
        currentTime = audioElement.currentTime;
      }
      //Нажата другая кнопка - останавливаем старое и запускаем новое
      else {
        stopSound();
        currentTime = 0;
        playSound(sound);
      }
    } else playSound(sound);
  });
});

function stopSound(): void {
  audioElement.pause();
}

function playSound(sound: string): void {
  if (currentSound === sound) {
    audioElement.currentTime = currentTime;
  } else {
    currentSound = sound;
    audioElement.src = `./assets/sounds/${sound}.mp3`;
  }

  audioElement.play();
}

function isAudioPlaying(): boolean {
  const isPlaying =
    !audioElement.paused && !audioElement.ended && audioElement.currentTime > 0;
  return isPlaying;
}
