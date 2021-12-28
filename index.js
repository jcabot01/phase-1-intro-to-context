// Your code here
//take in an array as an argument
function createEmployeeRecord(array){
    let newObject = { //create a new object, set each key to the corresponding value in the input array, starting at index 0
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
    }
  return newObject //have this function return the newObject
  }
//take in the same employee array (it now includes the newObject) as the argument
function createEmployeeRecords(array) { //create an array of employee objects
  return array.map(createEmployeeRecord)  //map over the whole array this new Object, affecting any other employee data arrays
  }  

//take in the new employee object & a date stamp ("YYYY-MM-DD HHMM"), and return an updated employee object with updated timedInEvent array (currently empty)
function createTimeInEvent(employeeObj, dateStamp) {
  let [date, hour] = dateStamp.split(" "); //split the dateStamp arg into 2 new strings 'date' & 'hour' and returns a new array
  hour = parseInt(hour); //take the hour element an convert to integer
  let type = "TimeIn"; //assign "TimeIn" to the 'type' key.
  employeeObj.timeInEvents.push({type, hour, date}); //push all of these as new keys in an object into timeInEvent
  return employeeObj;
}

//do the same thing for timeOutEvent
function createTimeOutEvent(employeeObj, dateStamp) {
  let [date, hour] = dateStamp.split(" "); 
  hour = parseInt(hour);
  let type = "TimeOut";
  employeeObj.timeOutEvents.push({type, hour, date});
  return employeeObj;
}

//filter dates to compare times, extract time in, extract time out, then find the difference & divide by 100 to get down to the single hour(s)
function hoursWorkedOnDate(employeeObj, dateStamp) {
  let timeIn = employeeObj.timeInEvents.filter((element) => element.date === dateStamp).map((element) => element.hour); //filter by date, create a new array with results from map
  let timeOut = employeeObj.timeOutEvents.filter((element) => element.date === dateStamp).map((element) => element.hour);//same, now we have a range, can use our new array and subtract the out from in

  let hoursDifference = (timeOut - timeIn) / 100;
  return hoursDifference;
}

//take in the employee object and the date containing hours worked
function wagesEarnedOnDate(employeeObj, dateStamp) {
  let dailyTakeHome = employeeObj.payPerHour * hoursWorkedOnDate(employeeObj, dateStamp) //take employee hourly rate * our hoursWorkedOnDate function that finds # of hours, pass in obj and dateStamp
  return dailyTakeHome;
}

//take in employee object and sum up all of the wages from all of the dates
function allWagesFor(employeeObj) {
  let result = [];
  let allDates = employeeObj.timeInEvents.map((element) => (element = element.date)) //return an array of all timeIn dates that match
  for(let workDay of allDates) {  //loop over entire array of workDays, and push the daily earnings for each day into the empty 'result' array
    result.push(wagesEarnedOnDate(employeeObj, workDay))  //chuck everything into a fresh array that we can .reduce()
  }
  let reducer = (previousValue, currentValue) => previousValue + currentValue; //create an accumulator to run thru 'result' array to combine all daily incomes
  return result.reduce(reducer, 0) //start reduce at 0 index
}

function calculatePayroll(employeesArray) { //take in ARRAY of all employees
  // let //create an empty array to contain allWages for all employees
  return employeesArray.reduce((m, e) => m + allWagesFor(e), 0)
}
// ### `calculatePayroll`

// * **Argument(s)**
//   * `Array` of employee records
// * **Returns**
//   * Sum of pay owed to all employees for all dates, as a number
// * **Behavior**
//   * Using `wagesEarnedOnDate`, accumulate the value of all dates worked by the
//     employee in the record used as context. Amount should be returned as a
//     number.
