import { Header } from "./components/Header/";
import { Table } from './components/Table'

import { Container } from './App.styles'

export function App(){
  return(
    <Container>
      <Header />

      <Table />
    </Container>
  )
}