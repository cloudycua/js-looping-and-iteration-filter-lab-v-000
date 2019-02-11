function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, letter) {
  return list.filter(function (driverName) {
    return driverName.charAt(0).toLowerCase() === letter.toLowerCase();
  });
}
