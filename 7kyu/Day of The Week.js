function getDayOfTheWeek(date) {
const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const d = new Date(date);
const dayName = weekNames[d.getDay()]
return dayName;
}