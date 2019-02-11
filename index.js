function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, letters) {
  return list.filter(function (driverName) {
    return driverName.slice(0, letters.length).toLowerCase() === letters.toLowerCase();
  });
}

function matchName(list,arg)
