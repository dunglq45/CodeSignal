function findEmailDomain(address) {
  if (!/\S+@\S+\.\S+/.test(address))
      return false;
      return address.slice(address.lastIndexOf('@')+1)
  }
  