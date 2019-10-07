function sortByHeight(a) {
  var x=0;
  var b = a.filter(e => e >0)
  b.sort((a,b)=>a-b);
  for (var j=0;j<a.length;j++){
      if(a[j]>=0){
          a[j]=b[x];
          x++;
      }
  }
  return a;
}
