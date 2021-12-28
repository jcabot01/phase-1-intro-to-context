// Your code here

//insert 4 params into function
//
//prototype
function createEmployeeRecord(array){
    let newObject = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],
    }
    return newObject
  }
// ### `createEmployeeRecord`

// * **Argument(s)**
//   * A 4-element Array of a `String`, `String`, `String`, and `Number`
//     corresponding to a first name, family name, title, and pay rate per hour
// * **Returns**
//   * JavaScript `Object` with keys:
//     * `firstName`
//     * `familyName`
//     * `title`
//     * `payPerHour`
//     * `timeInEvents`
//     * `timeOutEvents`
// * **Behavior**
//   * Loads `Array` elements into corresponding `Object` properties.
//     _Additionally_, initialize empty `Array`s on the properties `timeInEvents`
//     and `timeOutEvents`.

// ### `createEmployeeRecords`

// * **Argument(s)**
//   * `Array` of `Arrays`
// * **Returns**
//   * `Array` of `Object`s
// * **Behavior**
//   * Converts each nested `Array` into an employee record using
//     `createEmployeeRecord` and accumulates it to a new `Array`

// ### `createTimeInEvent`

// * **Argument(s)**
//   * An employee record `Object`
//   * A date stamp (`"YYYY-MM-DD HHMM"`)
// * **Returns**
//   * The employee record
// * **Behavior**
//   * Add an `Object` with keys to the `timeInEvents` `Array` on the record
//     `Object`:
//     * `type`: Set to `"TimeIn"`
//     * `hour`: Derived from the argument
//     * `date`: Derived from the argument

// ### `createTimeOutEvent`

// * **Argument(s)**
//   * An employee record `Object`
//   * A date stamp (`"YYYY-MM-DD HHMM"`)
// * **Returns**
//   * The employee record
// * **Behavior**
//   * Add an `Object` with keys to the `timeOutEvents` `Array` on the record
//     `Object`:
//     * `type`: Set to `"TimeOut"`
//     * `hour`: Derived from the argument
//     * `date`: Derived from the argument

// ### `hoursWorkedOnDate`

// * **Argument(s)**
//   * An employee record `Object`
//   * A date of the form `"YYYY-MM-DD"`
// * **Returns**
//   * Hours worked, an `Integer`
// * **Behavior**
//   * Given a date, find the number of hours elapsed between that date's
//     timeInEvent and timeOutEvent

// ### `wagesEarnedOnDate`

// * **Argument(s)**
//   * An employee record `Object`
//   * A date of the form `"YYYY-MM-DD"`
// * **Returns**
//   * Pay owed
// * **Behavior**
//   * Using `hoursWorkedOnDate`, multiply the hours by the record's
//     payRate to determine amount owed. Amount should be returned as a number.

// ### `allWagesFor`

// * **Argument(s)**
//   * An employee record `Object`
// * **Returns**
//   * Pay owed for all dates
// * **Behavior**
//   * Using `wagesEarnedOnDate`, accumulate the value of all dates worked by the
//     employee in the record used as context. Amount should be returned as a
//     number. **HINT**: You will need to find the available dates somehow...

// ### `calculatePayroll`

// * **Argument(s)**
//   * `Array` of employee records
// * **Returns**
//   * Sum of pay owed to all employees for all dates, as a number
// * **Behavior**
//   * Using `wagesEarnedOnDate`, accumulate the value of all dates worked by the
//     employee in the record used as context. Amount should be returned as a
//     number.
