function adjacentElementsProduct(inputArray) {
  var max = inputArray[0] * inputArray[1]
for (var i = 1; i<inputArray.length; i++){
  if(inputArray[i]*inputArray[i + 1] >max){
          max = inputArray[i]*inputArray[i + 1]
      }
 
      }
   return max
}