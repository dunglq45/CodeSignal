function longestWord(text) {
    
  let patt = /[^a-z^A-Z]/
  
  text = text.split(patt);
  
  let longest = text.reduce(function (a, b) { return a.length > b.length ? a : b; });
  
  return longest

}
