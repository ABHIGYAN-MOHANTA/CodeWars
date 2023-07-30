// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  if (str.length != 0) {
    let ar = [];
    while (str.length != 0) {
      ar.push(str.slice(0, 2));
      str = str.slice(2);
    }
    if (ar[ar.length - 1].length == 1) {
      ar[ar.length - 1] = ar[ar.length - 1] + "_";
    }
    return ar;
  } else {
    return [];
  }
}

console.log(solution("hello0"));
