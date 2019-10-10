function isDigit(symbol) {
  if(symbol.length>1) return false;
  return !isNaN(symbol)
  }