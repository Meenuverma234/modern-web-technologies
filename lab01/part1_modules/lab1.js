const _ = require('lodash');

const holidays = [
    { name: 'Christmas', date: '2024-12-25' },
    { name: 'Canada Day', date: '2024-07-01' },
    { name: 'New Year', date: '2025-01-01' }
];

holidays.forEach(holiday => {
    const today = new Date();
    const holidayDate = new Date(holiday.date);
    const diffTime = holidayDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(`${holiday.name} is in ${diffDays} day(s).`);
});

const randomHoliday = _.sample(holidays);
console.log(`Random Holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

const holidayNames = holidays.map(h => h.name);
console.log(`Index of Christmas: ${_.indexOf(holidayNames, 'Christmas')}`);
console.log(`Index of Canada Day: ${_.indexOf(holidayNames, 'Canada Day')}`);
