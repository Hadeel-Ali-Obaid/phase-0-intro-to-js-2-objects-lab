// Write your solution in this file!
let employee ={
    name: "hadeel",
    streetAddress: "abuNsair"
}

const updateEmployeeWithKeyAndValue = function(employee, key, value) {
    return {
        ...employee,
        [key]: value,
      };
    }


function nondestructivelyUpdateObject(obj, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  const new1 = nondestructivelyUpdateObject(
    employee,
    "name",
    "sam",
    "street",
    "11 Broadway"
  );
   


   const destructivelyUpdateEmployeeWithKeyAndValue = function() {
    employee.streetAddress= "12 Broadway";
    return employee
  }



  let newEmployee
  const deleteFromEmployeeByKey= function(employee, key) {
    newEmployee = {...employee};
    delete newEmployee.name; 
    return newEmployee;
  }


  
  const destructivelyDeleteFromEmployeeByKey= function(employee, key) {
   delete employee.name;
   return employee;
  }
