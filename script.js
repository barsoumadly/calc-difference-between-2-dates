'use strict';

// Selecting input fields
const startDateInput = document.getElementById('date-1');
const endDateInput = document.getElementById('date-2');

// Selecting buttons
const btnSubmit = document.getElementById('submit');

// Selecting output message
const message = document.getElementById('output');

// Calculating the difference
const calcDifference = function (date1, date2) {
  return Math.trunc(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
};

// Displaying message
const displayMessage = function (daysPassed) {
  if (daysPassed === 1) {
    message.innerHTML = `<span> ${daysPassed} </span> day is passed (Yesterday)`;
  } else {
    message.innerHTML = `<span> ${daysPassed} </span> days are passed`;
  }
  // message.textContent = `${daysPassed} is passed`;
};

btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();

  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  // check dates validation
  if (startDate !== '' && endDate !== '') {
    // get difference between two dates
    const daysPassed = calcDifference(new Date(startDate), new Date(endDate));

    // display output message
    displayMessage(daysPassed);
  }

  // reset input fields
  startDateInput.value = endDateInput.value = '';
});
