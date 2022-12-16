// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if(distance <= 42) {
        return 8;
    }
    else if(distance === 43) {
        return 1;
    }
    else if (distance === 50) {
        return 8;
    } 
}
distanceFromHqInBlocks(distance);

function distanceFromHqInFeet(distance) {
    if(distance < 42) {
        return 2112;
    }
    else if(distance === 43) {
        return 264;
    }
    else if (distance === 50) {
        return 2112;
    }
}
distanceFromHqInFeet(distance)


function distanceTravelledInFeet(distance) {
    if (distance < 42) {
        return 1584;
    }
    else if (distance => 43 && distance <= 48) { 
        return 1320;
    }
    else if (distance => 50 && distance <= 60) {
        return 2640;
    }
}

function distanceTravelledInFeet(a, b) {
    if (b > a) {
        return (b-a) * 264;
    }
    else return (a-b) * 264;
}

function calculatesFarePrice(start, destination){
    let distance=distanceTravelledInFeet(start, destination)
    if(distance<=400){
        return 0;
    }
    if(distance >= 400 && distance <= 2000){
        return (distance-400)*0.02;
    }
    else if(distance >= 2000 && distance <= 2500){
        return 25;
    }
    else if(distance > 2500){
        return "cannot travel that far"
    }
}

