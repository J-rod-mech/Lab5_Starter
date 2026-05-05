// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  function loadVoices() {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      document.getElementById('voice-select').appendChild(option);
    }
  }

  document.querySelector('button').addEventListener('click', function() {
    const synth = window.speechSynthesis;
    const text = document.getElementById('text-to-speak').value;
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedOption = 
      document.getElementById('voice-select').selectedOptions[0].getAttribute('data-name');
    const voices = synth.getVoices();
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterance.voice = voice;
        break;
      }
    }
    synth.speak(utterance);
    document.querySelector('img').src = 'assets/images/smiling-open.png';
    utterance.onend = function() {
      document.querySelector('img').src = 'assets/images/smiling.png';
    };
  });

  document.getElementById('voice-select').addEventListener('change', function() {
    const synth = window.speechSynthesis;
    synth.cancel();
    document.querySelector('img').src = 'assets/images/smiling.png';
  });

  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}