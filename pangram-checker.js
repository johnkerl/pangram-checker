'use strict';

// See index.html for context.
class PangramChecker {
  constructor() {
    this.ALPHA_ARRAY = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    this.FREQ_ARRAY = ["e","o","t","h","a","s","n","i","r","d","l","u","y","m","w","f","g","c","b","p","k","v","j","q","x","z"];
    this.SCRAMBLE_ARRAY = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    this.letters_set = new Set();
    for (let c of this.ALPHA_ARRAY) {
      this.letters_set.add(c)
    }

    this.letters_array = [...this.ALPHA_ARRAY]
  }

  alphabetize() {
    this.letters_array = [...this.ALPHA_ARRAY]
  }

  // Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  arrangeByFrequency() {
    this.letters_array = [...this.FREQ_ARRAY]
  }

  scramble() {
    this.letters_array = [...this.SCRAMBLE_ARRAY]
    this.shuffleArray(this.letters_array)
  }

  getCounts(text) {
    const lettersPresentSet = new Set();
    for (let c of text.toLowerCase()) {
      lettersPresentSet.add(c);
    }

    const lettersPresentVec = [];
    const lettersAbsentVec = [];

    for (let c of this.letters_array) {
      if (lettersPresentSet.has(c)) {
        lettersPresentVec.push(c)
      } else {
        lettersAbsentVec.push(c)
      }
    }

    return {present: lettersPresentVec, absent: lettersAbsentVec}
  }
}
