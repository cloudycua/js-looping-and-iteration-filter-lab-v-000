function findMatching(list, arg) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === arg.toLowerCase();
  });
}

function fuzzyMatch(list, letters) {
  return list.filter(function (driverName) {
    return driverName.slice(0, letters.length).toLowerCase() === letters.toLowerCase();
  });
}
