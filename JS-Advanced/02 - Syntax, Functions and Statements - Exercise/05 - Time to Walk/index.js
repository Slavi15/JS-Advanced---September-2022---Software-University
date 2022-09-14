function timeToWalk(steps, footPrintLength, speed) {
    const distance = (steps * footPrintLength) / 1000;
    const stepsIn500M = 500 / footPrintLength;
    const breakTimeInHours = Math.floor(steps / stepsIn500M) / 60;
    const time = ((distance / speed) + breakTimeInHours) * 3600;
    
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.ceil(time % 60);

    console.log(`${hours >= 0 && hours <= 9 ? `0${hours}` : hours}:${minutes >= 0 && minutes <= 9 ? `0${minutes}` : minutes}:${seconds >= 0 && seconds <= 9 ? `0${seconds}` : seconds}`);
};

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);