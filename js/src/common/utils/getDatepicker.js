import datepicker from 'js-datepicker';
import getNextDayOfWeek from './getNextDayOfWeek';

export default function getDatepicker(selector, date, onSelect) {
    let now = new Date();
    let maxDate;

    if (now.getDay() === 0) {
        maxDate.setDate(date.getDate() + 7);
    } else {
        maxDate = getNextDayOfWeek(now, 0);
    }

    return datepicker(selector, {
        dateSelected: date,
        maxDate: maxDate,
        disabler: (date) => date.getDay() != 0,
        onSelect: onSelect,
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString();
            input.value = value;
        },
    });
}
