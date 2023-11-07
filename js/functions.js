
const checkTimeTable = (dayStart, dayFinish, meetStart, meetDuration) => {
  const parseTime = (timeStr) => {
    timeStr = timeStr.split(':');
    return parseInt(timeStr[0], 10) * 60 + parseInt(timeStr[1], 10);
  };
  dayStart = parseTime(dayStart);
  dayFinish = parseTime(dayFinish);
  meetStart = parseTime(meetStart);
  meetDuration = parseInt(meetDuration, 10);
  if (meetStart < dayStart || (meetStart + meetDuration) > dayFinish) {
    return false;
  }
  return true;
};

checkTimeTable('08:00', '17:30', '14:00', 90); // true
checkTimeTable('08:00', '14:30', '14:00', 90); // false
checkTimeTable('8:0', '10:0', '8:0', 120); // true
