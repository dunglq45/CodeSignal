function deleteDigit(n) {
  var m = 0;
  for(var d=1;d <= n; d*=10){
      var t = n%d + (Math.floor(Math.floor(n/d)/10)*d)
      m = Math.max(m,t);
  }
  return m;
}
