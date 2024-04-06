function deleteNth(arr, n) {
    let counts = {}
    let result = []
    for (let num of arr) {
      if (!(num in counts) || counts[num] < n) {
        result.push(num)
        counts[num] = (counts[num] || 0) + 1
      }
    }
    return result
  }