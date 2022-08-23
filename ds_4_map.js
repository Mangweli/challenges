const map = new Map([['a',1],['b', 2]]);
map.set('c', 3);
console.log(map.has('b'))
console.log(map.size);
console.log(map);
map.delete('c');
map.clear()

for(const [key, value] of map) {
    console.log(`${key}: ${value}`)
}

