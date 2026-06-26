/* ================================================================
   hero.js — Typing terminal animation in the hero section

   To change the phrases that cycle through, edit the `phrases`
   array below. Each string is one full command that will be typed
   out and then deleted before the next one starts.
   ================================================================ */

var phrases = [
  'train --model vision_transformer --epochs 50',
  'docker build -t my-ml-api .',
  'python infer.py --input mri_scan.nii',
  'git push origin feature/segmentation-v2',
  'pytest tests/ --cov=src --cov-report=html',
];

var phraseIndex  = 0;   // which phrase we're on
var charIndex    = 0;   // how many characters typed so far
var isDeleting   = false;

var typedEl = document.getElementById('typed');

function type() {
  var currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Type one character
    charIndex++;
    typedEl.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === currentPhrase.length) {
      // Finished typing — pause then start deleting
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    // Delete one character
    charIndex--;
    typedEl.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === 0) {
      // Finished deleting — move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 400);
      return;
    }
  }

  // Speed: deleting is faster than typing
  var speed = isDeleting ? 28 : 55;
  setTimeout(type, speed);
}

// Kick off the animation
type();
