function palindromeRearranging(inputString) {
  var abc = new Array(26).fill(0);
  var t = 0;
  for(var i = 0;i < inputString.length;i++){
      var c = inputString[i].charCodeAt() - 97;
      abc[c]++;
  }
  for(var i = 0;i < abc.length;i++)
      t = abc[i] % 2 == 1? t + 1: t;
  return inputString.length % 2 == t;
}
