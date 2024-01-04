# Toy-Problem
# Net Salary Calculator

This JavaScript program calculates the net salary based on the provided basic salary and benefits. It takes into account deductions for NSSF, NHIF, and PAYE.

## Usage

1. Open the `index.html` file in a web browser.
2. The program will prompt you to input your basic salary and total benefits.
3. Enter the required values and press OK.
4. The program will display a payslip with details such as gross salary, PAYE deduction, NHIF deduction, NSSF deduction, and net salary.

## Functions

### `netSalaryCalculator()`

Calculates the net salary based on the provided basic salary and benefits. It includes deductions for NSSF, NHIF, and PAYE.

### `nssfCalculation(grossSalary)`

Calculates the NSSF deduction based on the provided gross salary.

### `nhifCalculation(grossSalary)`

Calculates the NHIF deduction based on the provided gross salary.

### `payeCalculation(taxableIncome)`

Calculates the PAYE deduction based on the taxable income.

## Notes

- Ensure that you enter valid numeric values for basic salary and benefits.
- The program includes basic error handling for invalid inputs.

# Speed Detector

This JavaScript program calculates demerit points based on the speed of a car. It checks if the speed is within the speed limit and calculates demerit points if it exceeds the limit.

## Usage

1. Open the `index.html` file in a web browser.
2. The program will prompt you to input the speed of the car.
3. Enter the speed and press OK.
4. The program will display an alert indicating whether the speed is okay, the demerit points, or a license suspension message.

## Variables

### `speedlimit`

Specifies the speed limit allowed on the road (default: 70).

### `exceedingspeed`

Specifies the speed by which a car can exceed the speed limit without getting demerit points (default: 5).

## Functions

### `calculateDemeritPoints()`

Calculates demerit points based on the input speed and checks if the license should be suspended.

## Notes

- Ensure that you enter a valid numeric value for the speed of the car.
- The program includes basic error handling for invalid inputs.
- The default speed limit is set to 70, and the default exceeding speed is set to 5. You can modify these values to match your requirements.

# Student Grade Generator

This JavaScript program generates a grade based on the marks entered by the user. It uses a set of conditions to determine the grade and displays an alert with the corresponding grade.

## Usage

1. Open the `index.html` file in a web browser.
2. The program will prompt you to enter your marks.
3. Enter your marks and press OK.
4. The program will display an alert with your corresponding grade.

## Function

### `studentGradeGenerator()`

Generates a grade based on the input marks and displays an alert with the result.

## Notes

- Ensure that you enter a valid numeric value for the marks.
- The program includes basic error handling for invalid inputs.
- The grade is determined based on predefined grade ranges. You can customize these ranges to match your grading criteria.