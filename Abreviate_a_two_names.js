function abbrevName(name) {
    let names = name.split(' ')
    let initials = names[0][0].toUpperCase() + '.' + names[1][0].toUpperCase();
    return initials;
  }