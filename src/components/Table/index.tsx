import * as C from './styles'

import { items } from '../../data/items'
import { TableItem } from '../TableItem'

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
            <TableItem key={index} item={item} />
          ))}
        </tbody>
      </C.Table>
    </C.Container>
  )
}