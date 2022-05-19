import { useEffect, useState } from "react";
import { Header } from "./components/Header/";
import { Table } from './components/Table'
import { Item } from "./types/Item";
import { Container } from './App.styles'
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";


export function App(){
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  
  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth])

  return(
    <Container>
      <Header />
    
      <Table list={filteredList} />
    </Container>
  )
}