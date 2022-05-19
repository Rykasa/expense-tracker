import { Item } from "../types/Item";

export function formatDate(date: Date){
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return `${convertDateToTwoDigits(day)}/${convertDateToTwoDigits(month)}/${year}`
}

function convertDateToTwoDigits(date: number){
  return date < 10 ? '0' + `${date}` : date
}

export function getCurrentMonth(){
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export function filterListByMonth(list: Item[], date: string){
  let newList: Item[] = []
  const [year, month] = date.split('-');

  for(let i in list){
    if(list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth() + 1) === parseInt(month)
    ){
      newList.push(list[i])
    }
  }

  return newList
}


export function formatCurrentMonth(date: string): string{
  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  const [year, month] = date.split('-')
  return `${months[parseInt(month) - 1]} de ${year}`
}