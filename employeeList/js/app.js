//Print Function
//render all employee info
const printFn = function(){
  render(employeeList);
}

// VERIFY Function
// prompt the user for an employee name
// print true if the employee exists otherwise print false
const verifyFn = function(){

}

// LOOKUP
//* prompt the user for an employee name
//* print the employee's name, office number, and telephone number
const lookupFn = function(){

}


// CONTAINS
//* prompt the user for a string
//* print the information of *all* employees whose names contain the given string
const containsFn = function(){

}

// UPDATE
//* prompt the user for a name
//* prompt the user for a field they would like to update
//* prompt the user for a value
//* find the employee with that name and update the provided field with the provided value
//* print the new info for that employee
const updateFn = function(){

}

// ADD
//* prompt the user for a name
//* prompt the user for an office number
//* prompt the user for a telephone number
//* add this employee to the `employeeList`
//* print the updated `employeeList`
const addFn = function(){

}

// DELETE
//* prompt the user for a name
//* delete the object with this name property from the array entirely.
//* print the updated `employeeList`
;

// render function to print to empty container
const render = function (htmlStr){
  $('#content').html(htmlStr);
}


//call to eventListener to call functions on click
$('#print').on('click', printFn);

