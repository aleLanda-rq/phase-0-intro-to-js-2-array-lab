const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
cats.push(name)
return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
    return cats;
}
function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray;
    }
    function prependCat(name) {
    var newArray = [...cats];
    newArray.unshift(name);
    return newArray;
    }
    function removeLastCat() {
        var newArray=cats.slice();
        newArray.pop()
        return newArray;
    }
    function removeFirstCat() {
    var newArray = cats.slice();
    newArray.shift()
    return newArray;
    }
