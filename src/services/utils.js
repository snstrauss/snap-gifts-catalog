export function randomInt(limit) {
    return Math.floor(Math.random() * Math.floor(limit));
}

export function randomFromList(list){
    return list[randomInt(list.length)];
}

export function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

export default {
    randomInt,
    randomFromList,
    isElementInViewport
}