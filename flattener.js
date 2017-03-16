function flatten(arr) {
  var array = arr.toString();
  array = array.split(",");

  return array;
}


module.exports = flatten;
