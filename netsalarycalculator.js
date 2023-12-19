function netSalaryCalculator(){
    //Calculate the gross salary. Basic salary plus benefits
    const basicSalary = prompt('input your basic salary');
    const benefits = prompt ('input your total benefits amount');
    // Add basic salary and benefits
    const grossSalary = parseInt(basicSalary) + parseInt(benefits);
    const personalRelief =2400;
    const taxableIncome = grossSalary - personalRelief;
    const netSalary = grossSalary - nssfCalculation(grossSalary) + nhifCalculation(grossSalary) + payeCalculation(taxableIncome);
    return netSalary;
}
//nssf calculation
function nssfCalculation(grossSalary){
    return Math.floor(grossSalary*0.06); 
}
// NHIF Calculation 
function nhifCalculation(grossSalary){
    let nhif = 0;
    if (grossSalary>0 && grossSalary<=5999){
    }
    else if (grossSalary>=6000 && grossSalary<=7999){
        nhif = 300;
    }
    else if (grossSalary>=8000 && grossSalary<=11999){
        nhif = 400;
    }
    else if (grossSalary>=12000 && grossSalary<=14999){
            nhif = 500;
    }
    else if (grossSalary>=15000 && grossSalary<=19999){
                nhif = 600;
    }
    else if (grossSalary>=20000 && grossSalary<=24999){
        nhif = 750;
    }
    else if (grossSalary>=25000 && grossSalary<=29999){
        nhif = 850;
    }
    else if (grossSalary>=30000 && grossSalary<=34999){
        nhif = 900;
    }
    else if (grossSalary>=35000 && grossSalary<=39999){
        nhif = 950;
    }
    else if (grossSalary>=40000 && grossSalary<=44999){
            nhif = 1000;
    }
    else if (grossSalary>=45000 && grossSalary<=49999){
                nhif = 1100;
    }
    else if (grossSalary>=50000 && grossSalary<=59999){
        nhif = 1200;
    }
    else if (grossSalary>=60000 && grossSalary<=69999){
        nhif = 1300;
    }
    else if (grossSalary>=70000 && grossSalary<=79999){
        nhif = 1400;
    }
    else if (grossSalary>=80000 && grossSalary<=89999){
        nhif = 1500;
    }
    else if (grossSalary>=90000 && grossSalary<=99999){
        nhif = 1600;
    }
    else if(grossSalary>=100000){
        nhif = 1700;
    }
    else {
        alert ('invalid input');
    }
    return nhif;
}
//paye calculation
    function payeCalculation(taxableIncome){   
        let paye = 0;
    if (taxableIncome>0 && taxableIncome<=24000){
        paye = (gtaxableIncome*0.1);
    }
    else if(taxableIncome>=24001 && taxableIncome<=32333){
        paye = (grossSalary*0.25);
    }
    else if(taxableIncome>=32334 && taxableIncome<=500000){
        paye = (taxableIncome*0.30);
    }
    else if(taxableIncome>=500001 && taxableIncome<=800000){
        paye = (taxableIncome*0.325);
    }
    else if(taxableIncome>=800000){
            paye = (taxableIncome*0.35);
    }
    else{
        alert('invalid input');
    }
    return paye;
}
// Call the netSalaryCalculator function and log the result
const result = netSalaryCalculator();