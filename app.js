const soundBtns = document.querySelectorAll('.sound__btn');
const audioElement = document.querySelector('audio');
soundBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        var _a;
        const sound = (_a = btn.dataset.sound) !== null && _a !== void 0 ? _a : 'summer';
        if (isAudioPlaying(audioElement)) {
            audioElement.src.includes(sound) ? stopSound() : playSound(sound);
        }
        else
            playSound(sound);
    });
});
function playSound(weather) {
    audioElement.src = `./assets/sounds/${weather}.mp3`;
    audioElement.play();
}
function stopSound() {
    audioElement.pause();
}
function isAudioPlaying(audioElement) {
    const isPlaying = !audioElement.paused && !audioElement.ended && audioElement.currentTime > 0;
    return isPlaying;
}
export {};
//# sourceMappingURL=app.js.map