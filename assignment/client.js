$().ready(function () {
    console.log('DOM is ready');

    //Click handlers here!

    //adding row on click
    $('#btn').on('click', '', addRow)
    //removing row on click
    $('#table').on('click', '.btnRemove', removeRow)
});


// declaring an array for the object of employees
let employees = [];


//function to add rows to the table
function addRow(event) {
    console.log(event);

    let newRow = {
        firstName : $('#first-name').val(),
        lastName : $('#last-name').val(),
        idNumber : $('#ID-Number').val(),
        jobTitle : $('#job-title').val(),
        annualSalary : $('#annual-salary').val()
    }

    //adding row of objects to table
    employees.push(newRow);

    //adds the objects to the DOM inside the table
    $('#table').append(`

    <tr>
        <td>${newRow.firstName} </td>
        <td>${newRow.lastName} </td>
        <td>#${newRow.idNumber} </td>
        <td>${newRow.jobTitle} </td>
        <td>$${newRow.annualSalary} </td>

        <td>
        <button class="btnRemove">Remove</button>
        </td>
    </tr>
    `)
    

    // clears the inputs after it is added to the table
    $('#first-name').val('');
    $('#last-name').val('');
    $('#ID-Number').val('');
    $('#job-title').val('');
    $('#annual-salary').val('')
    }

    // function to remove the button upon a click event
    function removeRow(event) {
        let clickedOn = $(event.target)
        clickedOn.closest('tr').remove();
    }

