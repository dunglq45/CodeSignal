function isIPv4Address(inputString) {
  var  r=inputString.split(".")
  
  return r.length===4&&r.every(x=>x!=""&&!isNaN(x)&&x>=0&&x<256)
}
