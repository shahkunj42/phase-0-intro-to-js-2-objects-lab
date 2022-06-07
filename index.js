const employee = {
    name: "streetAdress"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
      obj[key] = value;
      return obj;
  }
  
function deleteFromEmployeeByKey(obj, key){
    let newEmployee = {...obj}
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}