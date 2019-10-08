function areSimilar(a, b) {
  let count= a.map((e,i) =>[e, b[i]]).filter(e => e[0] !== e[1]).length
  return a.sort().toString() === b.sort().toString() && count <= 2
}
