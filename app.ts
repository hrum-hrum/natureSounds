const soundBtns = document.querySelectorAll(
  '.sound__btn',
) as NodeListOf<HTMLButtonElement>;

const audioElement = document.querySelector('audio') as HTMLAudioElement;

soundBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const sound: string = btn.dataset.sound ?? 'summer';

    if (isAudioPlaying(audioElement)) {
      audioElement.src.includes(sound) ? stopSound() : playSound(sound);
    } else playSound(sound);
  });
});

function playSound(weather: string): void {
  audioElement.src = `./assets/sounds/${weather}.mp3`;
  audioElement.play();
}

function stopSound(): void {
  audioElement.pause();
}

function isAudioPlaying(audioElement: HTMLAudioElement): boolean {
  const isPlaying =
    !audioElement.paused && !audioElement.ended && audioElement.currentTime > 0;
  return isPlaying;
}
