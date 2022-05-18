import * as C from './styles'

import { items } from '../../data/items'

import { formatDate } from '../../helpers/dateFilter'

export function Table(){
  return(
    <C.Container>
      <C.Table>
        <thead>
          <tr>
            <C.TableHeading width={100}>Data</C.TableHeading>
            <C.TableHeading width={140}>Categoria</C.TableHeading>
            <C.TableHeading>Título</C.TableHeading>
            <C.TableHeading width={150}>Valor</C.TableHeading>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index)=>(
            <tr key={index}>
              <td>{formatDate(item.date)}</td>
              <td>{item.category}</td>
              <td>{item.title}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </C.Table>
    </C.Container>
  )
}