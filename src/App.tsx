import { useEffect, useState } from "react";
import { Container } from './App.styles'
import { Header } from "./components/Header/";
import { Table } from './components/Table'
import { InfoArea } from "./components/InfoArea";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { categories } from "./data/categories";
import { InputArea } from "./components/InputArea";


export function App(){
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  
  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth])

  useEffect(() =>{
    let newIncome = 0
    let newExpense = 0
    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        newExpense += filteredList[i].value 
      }else{
        newIncome += filteredList[i].value
      }
    }
    setIncome(newIncome)
    setExpense(newExpense)
  }, [filteredList])

  const handleMonthChange = (newMonth: string) =>{
    setCurrentMonth(newMonth);
  }

  function handleAddItem(item: Item){
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return(
    <Container>
      <Header />

      <InfoArea 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />

      <InputArea onAdd={handleAddItem} />

      <Table list={filteredList} />
    </Container>
  )
}