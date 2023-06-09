export function compareStrings(string1, string2) {
  if (string1.length === 0 || string2.length === 0) {
    return false;
  }

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  if (string1 === string2) {
    return true;
  }

  if (string1.indexOf(string2) !== -1 || string2.indexOf(string1) !== -1) {
    return true;
  }

  if (string1.length === string2.length) {
    for (var i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
}
