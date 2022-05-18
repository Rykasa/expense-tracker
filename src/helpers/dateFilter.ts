export function formatDate(date: Date){
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()

  return `${day}/${month}/${year}`
}

function formatDateToTwoDigits(){
  
}