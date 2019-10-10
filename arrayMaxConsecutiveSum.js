function arrayMaxConsecutiveSum(inputArray, k) {
  var sum = 0;
      for(var i =0; i<k;i++)
          sum+=inputArray[i];
      var sum1 = sum;
      for(var i = 1; i <= inputArray.length - k;i++){
          sum1 = sum1 - inputArray[i-1] + inputArray[i+k-1];
          if(sum1 > sum) sum = sum1;
      }
      return sum;
  }
  