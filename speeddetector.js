  const speedlimit = 70;
  const exceedingspeed = 5;
  function calculateDemeritPoints(){
    const speed = prompt('Input the speed of the car')
    if (speed <=speedlimit){
        alert('OK');
    }
    else {
        const demeritpoints = Math.floor((speed - speedlimit) / exceedingspeed);
    if (demeritpoints >= 12){
        alert('license suspended');
    }
    else {
        alert(`You have ${demeritpoints} demerit points!`);
        }
    }
}
calculateDemeritPoints();