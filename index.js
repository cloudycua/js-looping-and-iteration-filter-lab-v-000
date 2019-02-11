function findMatching(list, arg) {
  return list.filter(function (item) {
    return item.toLowerCase() === arg.toLowerCase();
  });
}

function fuzzyMatch(list, arg) {
  return list.filter(function (driverName) {
    return driverName.slice(0, arg.length).toLowerCase() === arg.toLowerCase();
  });
}
