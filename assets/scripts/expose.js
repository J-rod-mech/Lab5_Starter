// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();

  document.getElementById('horn-select').addEventListener('change', function() {
    if (this.value === 'air-horn') {
      document.querySelector('img').src = 'assets/images/air-horn.svg';
      document.querySelector('img').alt = 'Air Horn';
      document.querySelector('audio').src = 'assets/audio/air-horn.mp3';
    }
    else if (this.value === 'car-horn') {
      document.querySelector('img').src = 'assets/images/car-horn.svg';
      document.querySelector('img').alt = 'Car Horn';
      document.querySelector('audio').src = 'assets/audio/car-horn.mp3';
    }
    else if (this.value === 'party-horn') {
      document.querySelector('img').src = 'assets/images/party-horn.svg';
      document.querySelector('img').alt = 'Party Horn';
      document.querySelector('audio').src = 'assets/audio/party-horn.mp3';
    }
  });

  document.getElementById('volume').addEventListener('input', function() {
    document.querySelector('audio').volume = this.value / 100;
    if (this.value == 0) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-0.svg';
      document.querySelector('#volume-controls img').alt = 'Volume level 0';
    }
    else if (this.value < 33) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-1.svg';
      document.querySelector('#volume-controls img').alt = 'Volume level 1';
    }
    else if (this.value < 67) {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-2.svg';
      document.querySelector('#volume-controls img').alt = 'Volume level 2';
    }
    else {
      document.querySelector('#volume-controls img').src = 'assets/icons/volume-level-3.svg';
      document.querySelector('#volume-controls img').alt = 'Volume level 3';
    }
  });

  document.querySelector('button').addEventListener('click', function() {
    document.querySelector('audio').play();
    if (document.getElementById('horn-select').value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}