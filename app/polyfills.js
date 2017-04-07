// TODO: finish this

if (typeof Object.clone !== 'function') {
  Object.clone = (target, ...args) => {
    if (target == null) throw new TypeError('Cannot convert undefined or null to object');

    let to = Object(target);

    [...args].forEach((el) => {

    })



    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}
