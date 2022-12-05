export default function getCurrentDay() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const minimumYear = year - 100

  return {
    max: `${day}${month}${year}`,
    min: `${day}${month}${minimumYear}`,
  }
}
