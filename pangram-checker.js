'use strict';

class PangramChecker {
  // ----------------------------------------------------------------
  // PUBLIC METHODS

  constructor() {

    this.LOCAL_STORAGE_KEY = document.URL + '-pangram-checker'

    this.ALPHA_VEC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //this.ALPHA_VEC = ["e","o","t","h","a","s","n","i","r","d","l","u","y","m","w","f","g","c","b","p","k","v","j","q","x","z"];
    this.ALPHA_SET = new Set();
    for (let c of this.ALPHA_VEC) {
      this.ALPHA_SET.add(c)
    }
  }

  getCounts(text) {
    const lettersPresentSet = new Set();
    for (let c of text.toLowerCase()) {
      lettersPresentSet.add(c);
    }

    const lettersPresentVec = [];
    const lettersAbsentVec = [];

    for (let c of this.ALPHA_VEC) {
      if (lettersPresentSet.has(c)) {
        lettersPresentVec.push(c)
      } else {
        lettersAbsentVec.push(c)
      }
    }

    return {present: lettersPresentVec, absent: lettersAbsentVec}
  }
}
