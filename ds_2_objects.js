const obj = {
    name: 'Kingsley',
    age: 32,
    'key.three': true,
    sayMyName: function(){
        console.log(this.name)
    }
}

obj.hobby = "Football";
delete obj.hobby

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key.three"]);
console.log(obj);
obj.sayMyName();

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));