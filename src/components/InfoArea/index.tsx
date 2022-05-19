import * as C from './styles'

import { formatCurrentMonth } from '../../helpers/dateFilter'

type InfoAreaProps = {
  currentMonth: string;
  onMonthChange: (month: string) => void;
  income: number;
  expense: number;
}

export function InfoArea({ currentMonth, onMonthChange, income, expense }: InfoAreaProps){
  const handlePreviousMonth = () =>{
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () =>{
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return(
    <C.Container>
      <C.Date>
        <C.Arrow onClick={handlePreviousMonth}>⬅️</C.Arrow>
        <C.DateTitle>{formatCurrentMonth(currentMonth)}</C.DateTitle>
        <C.Arrow onClick={handleNextMonth}>➡️</C.Arrow>
      </C.Date>
      <C.Infos>
        <C.Info>
          <C.InfoTitle>Receita</C.InfoTitle>
          <C.InfoValue>R$ {income}</C.InfoValue>
        </C.Info>
        <C.Info>
          <C.InfoTitle>Despesa</C.InfoTitle>
          <C.InfoValue>R$ {expense}</C.InfoValue>
        </C.Info>
        <C.Info>
          <C.InfoTitle>Balanço</C.InfoTitle>
          <C.InfoValue color={income - expense < 0 ? '#A44A3F' : '#2A7F62'}>
            R$ {income - expense}
          </C.InfoValue>
        </C.Info>
      </C.Infos>
    </C.Container>
  )
}