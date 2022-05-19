export function formatDate(date: Date){
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()

  return `${convertDateToTwoDigits(day)}/${convertDateToTwoDigits(month)}/${year}`
}

function convertDateToTwoDigits(date: number){
  return date < 10 ? '0' + `${date}` : date
}