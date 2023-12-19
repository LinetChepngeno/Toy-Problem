  const speedlimit = 70;
  const exceedingspeed = 5;
  function calculateDemeritPoints(){
    const speed = prompt('Input the speed of the car')
    if (speed <=speedlimit){
        print ('OK');
    }
    else {
        const demeritpoints = math.floor((speed - speedlimit) / exceedingspeed);
    if (demeritpoints >= 12){
        print ('license suspended');
    }
    else {
        print ('You have ${demerit points} demerit points!')}
    }
    }
}