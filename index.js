// Code your solution here

function findMatching(drivers, string){
    //string = string.toLowerCase();
    //string[0]=string[0].toUpperCase();
    const result = drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
    return result;
}

function fuzzyMatch(drivers,string){
    const result = drivers.filter(driver => driver[0].toUpperCase() === string[0].toUpperCase())
    return result;
}

function matchName(drivers,string){
    const result = drivers.filter(driver => driver.name.toUpperCase() === string.toUpperCase())
    return result;
}