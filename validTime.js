function validTime(time) {
  // return time.split(":")[0]<24&& time.split(":")[1]<60
      var a = time.split(":")[0]
      console.log(a)
      var b = time.split(":")[1]
      console.log(b)
      return a>=0&&b>=0&&a<24&&b<60
  }
  