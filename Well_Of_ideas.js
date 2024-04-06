function well(x) {
    let goodCount = 0
    for (let idea of x) {
      if (idea === 'good') {
        goodCount++
      }
    }
    if (goodCount === 0) {
      return 'Fail!'
    } else if (goodCount <= 2) {
      return 'Publish!'
    } else {
      return 'I smell a series!'
    }
  }