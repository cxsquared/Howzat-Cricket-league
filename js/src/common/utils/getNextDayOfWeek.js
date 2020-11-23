export default function getNextDayOfWeek(date, dayOfWeek) {
    // https://codereview.stackexchange.com/questions/33527/find-next-occurring-friday-or-any-dayofweek
    // Code to check that date and dayOfWeek are valid left as an exercise ;)

    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);

    return resultDate;
}