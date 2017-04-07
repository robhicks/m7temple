function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function throttle(callback, limit) {
  let wait = false; // Initially, we're not waiting
  return function() { // We return a throttled function
    if (!wait) { // If we're not waiting
      callback.call(); // Execute users function
      wait = true; // Prevent future invocations
      setTimeout(function() { // After a period of time
        wait = false; // And allow future invocations
      }, limit);
    }
  };
}

function contains(str, val) {
  return str.indexOf(val) !== -1;
}

export {contains, debounce, throttle};
