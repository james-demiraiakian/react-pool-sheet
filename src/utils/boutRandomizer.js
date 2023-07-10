// Takes in an array of numbers representing individual fencers
export default function boutRandomizer(array) {
  // Create array to hold bouts
  let bouts = [];
  const orderedBouts = [];

  // Pairs each fencer into bouts with every other fencer.
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j < array.length - 1) {
      j++;
      bouts.push([array[i], array[j]]);
    }
  }

  // Conditional outputs a premade tournament schedule if there are only 4 fighters
  if (array.length === 4) {
    // No way to shuffle a 4 man pool such that no one fights more than once in a row
    bouts = [
      [1, 4],
      [2, 3],
      [1, 3],
      [2, 4],
      [3, 4],
      [1, 2],
    ];
  } else {
    bouts = customSort(bouts);
  }

  orderedBouts.push(...bouts);
  return bouts;
}

// Credit from this point forward goes to Chris Ling
// Sorting function takes takes in the ordered array
const customSort = (arrayIn) => {
  const arrayOut = [];
  let i = 0;

  // Assumes currently there is always a solution
  while (arrayIn.length > 0) {
    if (arrayOut.length === 0) {
      arrayOut.push(arrayIn.shift());
      continue;
    }
    const lastBout = arrayOut.at(-1);
    let len = arrayOut.length;
    let j = i;
    // Cycle through arrayIn at least once;
    do {
      const possibleBout = arrayIn[i];
      if (lastBout.some((fencer) => possibleBout.includes(fencer))) {
        // this allows us to cycle the arrayIn infinitely.
        i = (i + 1) % arrayIn.length;
      } else {
        arrayOut.push(...arrayIn.splice(i, 1));
        i = i % arrayIn.length;
      }
    } while (len === arrayOut.length && j !== i);

    // We cycled through at least once, need to find the first place to stuff.
    if (j === i) {
      const toInsertBout = arrayIn[0];
      j = 0;
      while (len === arrayOut.length) {
        const prevBout = arrayOut[j];
        const nextBout = arrayOut[j + 1];
        if (
          toInsertBout.every(
            (fencer) => !prevBout.includes(fencer) && (nextBout ? !nextBout.includes(fencer) : true)
          )
        ) {
          arrayOut.splice(j + 1, 0, toInsertBout);
          arrayIn.shift();
          i = i % arrayIn.length;
        } else j = (j + 1) % arrayOut.length;
      }
    }
  }

  return arrayOut;
};
