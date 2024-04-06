function createPhoneNumber(numbers) {
    let areaCode = numbers.slice(0, 3).join('')
    let firstPart = numbers.slice(3, 6).join('')
    let secondPart = numbers.slice(6, 10).join('')
    return `(${areaCode}) ${firstPart}-${secondPart}`
  }