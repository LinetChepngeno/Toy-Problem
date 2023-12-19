  const speedlimit = 70;
  const exceedingspeed = 5;
  //declare a function that will detect speed.
  function calculateDemeritPoints(){
    //prompt one to input the speed of the car
    const speed = prompt('Input the speed of the car')
    //condItion that checks if the speed limit is okay
    if (speed <=speedlimit){
        alert('OK');
    }
    //declare a variable called demeritpoints 
    else {
        const demeritpoints = Math.floor((speed - speedlimit) / exceedingspeed);
    if (demeritpoints >= 12){
        alert('license suspended');
    }
    //condition that checks the demeritpoints and alert when licence is suspended
    else {
        alert(`You have ${demeritpoints} demerit points!`);
        }
    }
}
calculateDemeritPoints();