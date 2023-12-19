//declare a function
function studentGradeGenerator(){
//prompt the user to input marks
   let marks = prompt('Enter your marks',);
//set the conditions for the marks and give alert for the respective grades
   let grade;
    if(marks>=79){
        grade = 'A';
    } 
    else if(marks>=60 && marks<=79){
        grade = 'B';
    }
    else if(marks>=49 && marks<=59){
        grade = 'C';
    }
    else if(marks>=40 && marks<49) {
        grade = 'D'
    }
    else if(marks>0 && marks<40){
        grade = 'E'
    }
    return alert(grade);
}
//invoke the fuction
studentGradeGenerator();
