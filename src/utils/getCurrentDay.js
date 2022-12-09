export default function getCurrentDayAsString(date) {
  return date.toDateString().split(' ').slice(1, 4).join(' ')
}
