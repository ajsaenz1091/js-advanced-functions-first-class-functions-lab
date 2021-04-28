// Code your solution in this file!

//* should return a new array containing the first two drivers from the passed-in array
//* returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers = function (){
        let firstTwo;
        if (drivers.length === 2){
            firstTwo = [...drivers];
            return firstTwo;
        }else{
            firstTwo = drivers.slice(0,2);
            return firstTwo;
        }
    }
    return firstTwoDrivers();
}

//* should return an array of the last two drivers
//* returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = function(){
        let lastTwo;
        if (drivers.length === 2){
            lastTwo = [...drivers];
            return lastTwo;
        }else{
            lastTwo = drivers.slice(drivers.length - 2,drivers.lenght);
            return lastTwo;
        }
    }
    return lastTwoDrivers();
}

//* 1) has the `returnFirstTwoDrivers` function to as its first element
//* 2) has the `returnLastTwoDrivers` function to as its last element
//* 3) allows us to invoke either function from the array

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//* 1) returns a function
//* 2) should multiply a given value using the created multiplier

function createFareMultiplier(multiple){
    return function (fare){
        return fare * multiple;
    }
}

//* 1) is a function
//* 2) doubles fares
//* fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

function fareDoubler(fare){
    const totalFare = createFareMultiplier(2);
    return totalFare(fare);
}

//* fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

function fareTripler(fare){
    const tripleFare = createFareMultiplier(3);
    return tripleFare(fare);
}

//* selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}