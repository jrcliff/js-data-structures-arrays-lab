// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    let allDrivers = [...drivers];
    allDrivers.push(name);
    return allDrivers
}

function prependDriver(name){
    let allDrivers = [...drivers]
    allDrivers.unshift(name);
    return allDrivers
}

function removeLastDriver(){
    return drivers.slice(0, -1);
}

function removeFirstDriver(){
    return drivers.slice(1);
}
