// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = (function(drivers){
    return drivers.slice(0,2);
})
const returnLastTwoDrivers = (function(drivers){
    return drivers.slice(2,4);
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function() {
        return x*x
    }
}


function fareDoubler(x){
    return x*2
}

function fareTripler(x){
    return x*3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}