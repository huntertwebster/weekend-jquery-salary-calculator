# Weekend Challenge: jQuery Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 

## Topics Covered
- JavaScript
- jQuery - Selectors, append, and event handling


## Order of Operations:
1) create an input form for an employee's 
    [x] first name
    [x] last name
    [x] ID number
    [x] job title
    [x]  annual salary

2) do all the html stuff 
    [x]  make h1 for "Salary Calculator"
    [x]  make h2 for "Add Employees"
    [x]  make h2 for "Employees"
    [x]  make a table 
    [x] create a button called 'Submit'
    [x] commit

3)  1st round of JS stuff
    [x] collect the form information
    [] store info to calculate monthly costs
    [] append information to the DOM
    [] clear the input fields
    [] commit

4)  2nd round of JS stuff - Using stored information
    [] calculate monthly costs
    [] append this to the to DOM
    [] commit

5) 3rd round of JS stuff 
    []If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
    [] Create a delete button that removes an employee from the DOM.
    [] commit

6) Stretch Goals
    [] CSS- Add styling or extra functionality that fits with the theme of this assignment.
    [] JS - Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. (SEE HINT BELOW)
    [] commit

## Assignment

The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

### Files Provided
No files have been provided (just instructions.md and a readme.md). Instead of forking and cloning this repo, please choose "Use This Template" (green button) and name your new repo "weekend-jquery-salary-calculator" and clone down from there. Make sure to commit regularily!

### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Stretch Mode

Add styling or extra functionality that fits with the theme of this assignment.

Once the employee is deleted, update the _Total Monthly Cost_ section on the page to reflect the employee's removal. _HINT:_ You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using `.text()` as a getter, or look into jQuery's `.data()` function. This is tricky! 

## Reminder About Modes

Above, we introduced the concept of levels of difficulty. "Mode" is how we will typically refer to each level. Below is a brief explanation of

* what to expect when attempting each mode
* if they are required or not

Mode | Description
--- | ---
Base | required
Stretch | optional, stretches your understanding and may require additional research

## Assignment Submission
Check in your repo, then turn in your work via the EDA Assignment Portal. As usual, don't hesitate to hit up the Slack channel as needed!
