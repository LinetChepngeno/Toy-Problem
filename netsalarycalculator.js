function netSalaryCalculator(){
    //Calculate the gross salary. Basic salary plus benefits
const basicSalary = prompt('input your basic salary');
const benefits = prompt ('input your total benefits amount')
    // Add basic salary and benefits
    
    //Calculate deductions
    //NSSF
function nssfCalculation(grossSalary){
    return Math.floor(grossSalary*0.06); 
}
// NHIF Calculation
function nhifCalculation(grossSalary){
    let nhif;
    let basicPay = prompt('Enter your basic pay');
    if (grossSalary>0 && grossSalary<=5999){
        nhif = '150';
    }
    else if (grossSalary>=6000 && grossSalary<=7999){
        nhif = '300';
    }
    else if (grossSalary>=8000 && grossSalary<=11999){
        nhif = '400';
    }
    else if (grossSalary>=12000 && grossSalary<=14999){
            nhif = '500';
    }
    else if (grossSalary>=15000 && grossSalary<=19999){
                nhif = '600';
    }
    else if (grossSalary>=20000 && grossSalary<=24999){
        nhif = '750';
    }
    else if (grossSalary>=25000 && grossSalary<=29999){
        nhif = '850';
    }
    else if (grossSalary>=30000 && grossSalary<=34999){
        nhif = '900';
    }
    else if (grossSalary>=35000 && grossSalary<=39999){
        nhif = '950';
    }
    else if (grossSalary>=40000 && grossSalary<=44999){
            nhif = '1000';
    }
    else if (grossSalary>=45000 && grossSalary<=49999){
                nhif = '1100';
    }
    else if (grossSalary>=50000 && grossSalary<=59999){
        nhif = '1200';
    }
    else if (grossSalary>=60000 && grossSalary<=69999){
        nhif = '1300';
    }
    else if (grossSalary>=70000 && grossSalary<=79999){
        nhif = '1400';
    }
    else if (grossSalary>=80000 && grossSalary<=89999){
        nhif = '1500';
    }
    else if (grossSalary>=90000 && grossSalary<=99999){
        nhif = '1600';
    }
    else if (grossSalary>=100000){
        nhif = '1700';
    }
}
    function payeCalculation(grossSalary); {
        
    let 
    if (grossSalary>0 && grossSalary<=24000){
        paye = '0.1';
    }
    else (grossSalary>=24001 && grossSalary<=32333){
        paye = '0.25';
    }
    else if(grossSalary>=32334 && grossSalary<=500000){
        paye = '0.30';
    }
    else if(grossSalary>=500001 && grossSalary<=800000){
        paye = '0.325';
    }
    else if(grossSalary>=800000){
            paye = '0.35';
    }
}
return nssf;
return nhif;
return paye;

