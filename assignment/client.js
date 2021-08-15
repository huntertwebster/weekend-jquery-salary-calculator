// declaring an array for the object of employees
let employees = [
    {
        firstName: 'Jen',
        lastName: 'Barber',
        idNumber: '4521',
        jobTitle: 'Team Lead',
        annualSalary: 80000,
    },
    {
        firstName: 'Maurice',
        lastName: 'Moss',
        idNumber: '8724',
        jobTitle: 'Support Team',
        annualSalary: 58000,
    },
    {
        firstName: 'Roy',
        lastName: 'Smith',
        idNumber: '9623',
        jobTitle: 'Quality Assurance',
        annualSalary: 48000,
    },
];



$().ready(function () {
    console.log('DOM is ready');

    //looping over the array and checkin to see how many will be displayed
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i]);

        // this is give us a reusable function for every employee to pass in their information 
        addRow(
            employees[i].firstName,
            employees[i].lastName,
            employees[i].idNumber,
            employees[i].jobTitle,
            Number(employees[i].annualSalary),
        );
    }


    // remove button, click event
    $('#table').on('click', '.btnRemove', function (event) {
        //finding the element that was clicked
        let deleteRow = $(event.target);
        // remove the employee row from the DOM
        // use .closest to delete the first row that matches the line
        deleteRow.closest('tr').remove();
    });

    function addRow(
        firstName,
        lastName,
        idNumber,
        jobTitle,
        annualSalary
    ) {
        //adds the objects to the DOM inside the table
        $('#table').append(`<tr>
        <td>${firstName} </td>
        <td>${lastName} </td>
        <td>#${idNumber} </td>
        <td>${jobTitle} </td>
        <td>$${annualSalary} </td>
        <td><button class="btnRemove">Delete</button></td>
        </tr>`)
    }


    // submit button, click event
    $('.btn').on('click', function () {
        // grab from the form fields
        // call addEmployee function

        const firstName = $('#first-name').val();
        const lastName = $('#last-name').val();
        const idNumber = $('#ID-Number').val();
        const jobTitle = $('#job-title').val();
        const annualSalary = Number($('#annual-salary').val());

        // use the exsisting function to push fields into employee array
        addRow(
            firstName,
            lastName,
            idNumber,
            jobTitle,
            Number(annualSalary)
        );

        // empty the values
        $('#first-name').val('');
        $('#last-name').val('');
        $('#ID-Number').val('');
        $('#job-title').val('');
        $('#annual-salary').val('');

        //push values to DOM
        employees.push({
            firstName: firstName,
            lastName: lastName,
            idNumber: idNumber,
            jobTitle: jobTitle,
            annualSalary: Number(annualSalary),

            // some function that calcutates the salary + employee salary

            
        });
    });
});



let totalMonthly = 0;

function addMonthly() {
    totalMonthly += employees[i].annualSalary;
    let el = $('#totalSpan');
    el.empty();
    el.append(totalMonthly);
    console.log(totalMonthly);
}
console.log(employee[i].annualSalary);

if (totalMonthly > 20000) {
    $('#totalSpan').css('background-color', 'red');
}


