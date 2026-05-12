class AudioPlayer {
  private audio: HTMLAudioElement;
  private soundBtns: NodeListOf<HTMLButtonElement>;
  private currentTime: number = 0;
  private currentSound: string = '';

  constructor() {
    this.audio = document.querySelector('#weatherAudio') as HTMLAudioElement;
    this.soundBtns = document.querySelectorAll(
      '.sound__btn',
    ) as NodeListOf<HTMLButtonElement>;

    this.init();
  }

  private init(): void {
    this.soundBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.handleSoundBtnClick(btn);
      });
    });
  }

  private handleSoundBtnClick(btn: HTMLButtonElement): void {
    const sound: string = btn.dataset.sound ?? 'summer';

    if (this.isAudioPlaying()) {
      // Нажата та же кнопка - останавливаем
      if (this.currentSound === sound) {
        this.stopSound();
        this.currentTime = this.audio.currentTime;
      }
      // Нажата другая кнопка - останавливаем старое и запускаем новое
      else {
        this.stopSound();
        this.currentTime = 0;
        this.playSound(sound);
      }
    } else {
      this.playSound(sound);
    }
  }

  private stopSound(): void {
    this.audio.pause();
  }

  private playSound(sound: string): void {
    if (this.currentSound === sound) {
      this.audio.currentTime = this.currentTime;
    } else {
      this.currentSound = sound;
      this.audio.src = `./assets/sounds/${sound}.mp3`;
    }

    this.audio.play();
  }

  private isAudioPlaying(): boolean {
    return (
      !this.audio.paused && !this.audio.ended && this.audio.currentTime > 0
    );
  }
}

const audioPlayer = new AudioPlayer();
