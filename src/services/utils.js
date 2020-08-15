export function randomInt(limit) {
    return Math.floor(Math.random() * Math.floor(limit));
}

export function randomFromList(list){
    return list[randomInt(list.length)];
}

export default {
    randomInt,
    randomFromList
}